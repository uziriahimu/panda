import Post from '@/Components/Post/Post';

const Posts = ({ posts }) => {
    return (
        <div className='grid grid-cols-3 gap-2 m-10'>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};




export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return {
        props: {
            posts: data
        }
    }

}

export default Posts;