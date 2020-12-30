import { useQuery, gql } from '@apollo/client';

const posts = gql`
  {
    getPosts {
      title
      body
      id
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(posts);
  const postsData = data.getPosts;
  console.log(postsData);

  return postsData.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ));
}

export default App;
