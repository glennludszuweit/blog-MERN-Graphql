import { gql, useMutation } from '@apollo/client';

const addNewPost = gql`
  mutation AddPost($title: String!, $body: String!) {
    addPost(title: $title, body: $body) {
      title
      body
      id
      author {
        id
        name
      }
    }
  }
`;

function AddPost() {
  let title, body;
  const [addPost] = useMutation(addNewPost);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addPost({
            variables: { title: String(title.value), body: String(body.value) },
          });
        }}
      >
        <input
          type='text'
          ref={(value) => (title = value)}
          id='title'
          placeholder='Title'
        />
        <input
          type='text'
          ref={(value) => (body = value)}
          id='body'
          placeholder='Body'
        />
        <button type='submit'>Add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
