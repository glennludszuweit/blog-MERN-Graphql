import { useQuery, gql } from '@apollo/client';

const posts = gql`
  query {
    getPosts {
      title
      body
      id
      author {
        name
      }
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(posts);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const postsData = data.getPosts;

  return postsData.map((post) => (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <small>{post.author.name}</small>
    </div>
  ));
}

export default Posts;
