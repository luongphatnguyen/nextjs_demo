import Head from 'next/head'
import styles from '../styles/Home.module.css'

function Home({posts}) {
  return (
    <div>
         <ul>
          {posts.map((post) => (
            <li>{post?.name?.title}</li>
          ))}
        </ul>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://randomuser.me/api/1.2/?results=50')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: posts.results,
    },
  }
}

export default Home;