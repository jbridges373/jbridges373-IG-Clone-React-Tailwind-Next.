import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'SaintXIII',
        userImg: 'https://i.imgur.com/jBLpUXY.jpg',
        img: 'https://i.imgur.com/tJzwpaN.jpg',
        caption: 'BRUCE LEE said it!'
    },
    {
        id: '123',
        username: 'SaintXIII',
        userImg: 'https://i.imgur.com/jBLpUXY.jpg',
        img: 'https://i.imgur.com/b2ZYtwf.jpg',
        caption: 'Dobby, the fluffy nightmare dawg!'
    },
    {
        id: '123',
        username: 'SaintXIII',
        userImg: 'https://i.imgur.com/jBLpUXY.jpg',
        img: 'https://i.imgur.com/hLP9Ndf.jpg',
        caption: 'This is DOPE!'
    },
    
];

function Posts() {
  return (
    <div>
        {posts.map((post) => (
            <Post key={post.id} id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
            />
        ))}           
    </div>
  );
}

export default Posts;
