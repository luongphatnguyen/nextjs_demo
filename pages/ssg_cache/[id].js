import Head from 'next/head'
import styledComponent from '../../components/home.styled'
import styledCommon from '../../components/common.styled';
import Image from 'next/image'
import { useRouter } from 'next/router'
import Artical from '../../components/artical';
function SSG_Cache({ users }) {

  const router = useRouter();

  if (router.isFallback) {
    return <button class="button is-loading"></button>
  }

  const { Banner, CategoryBlock, CategoryFilter, Category, CategoryTitle, CategoryList, CategoryItem } = styledComponent;
  const { Container } = styledCommon;

  return (
    <Container>
        <Banner />
        <Category>
          <CategoryTitle>Danh mục</CategoryTitle>
          <CategoryBlock>
            <CategoryFilter className="tag is-black"  onClick={() => router.push(`/ssg/500`)}>500 SSG</CategoryFilter>
            <CategoryFilter className="tag is-info is-light" onClick={() => router.push(`/ssr/500`)}>500 SSR</CategoryFilter>
            <CategoryFilter className="tag is-secondary" onClick={() => router.push(`/ssg_cache/500`)}>500 SSR build time</CategoryFilter>
          </CategoryBlock>
          <CategoryList>
            {users.map(user => ((
              <CategoryItem>
                <img 
                  src={user.picture.large} 
                  width={42}
                  height={42}
                  loading={'lazy'}
                  alt="avatar image"
                />
              </CategoryItem>
            )))}
          </CategoryList>
        </Category>

          {Array(2).fill({}).map(el => ((
            <Artical />
          )))}

    </Container>
  )
}


export async function getStaticPaths() {
  return { paths: [
    {params: { id: '500' }}
  ], fallback: false }
}

// This function gets called at build time
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://randomuser.me/api/1.2/?results=${params.id}`)
  const users = await res.json()

  // By returning { props: { users } }, the Blog component
  // will receive `users` as a prop at build time
  return {
    props: {
      users: users.results,
    },
  }
}

export default SSG_Cache;