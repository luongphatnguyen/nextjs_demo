function SS({posts = []}) {
    console.log("Blog", posts);
    return (
        <div className="samsung">
            <ul>
                {posts.map((post) => (
                    <li>{post?.name?.title}</li>
                ))}
            </ul>
        </div>
    )
}


export async function getServerSideProps({params}) {
    console.log(params.id);
    // Call an external API endpoint to get posts
    const res = await fetch(`https://randomuser.me/api/1.2/?results=${params.id}`)
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            posts: posts.results,
        },
    }
}

export default SS;