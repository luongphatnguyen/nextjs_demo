function Test({posts = []}) {
    console.log("Blog", posts);
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

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    // const blogs = [{id: 1}, {id: 2}];
  
    // // Get the paths we want to pre-render based on posts
    // const paths = blogs.map((blog) => `/hello/${blog.id}`)
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths: [], fallback: true }
}

// // This also gets called at build time
export async function getStaticProps({ params }) {
    console.log(params.id);
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://randomuser.me/api/1.2/?results=${params.id}`)
    const posts = await res.json()
    // Pass post data to the page via props
    return { props: { posts: posts.results } }
}

export default Test;