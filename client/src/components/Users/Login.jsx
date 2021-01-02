import { gql, useMutation } from '@apollo/client';

const userLogin = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

function Login() {
  let email, password;
  const [login] = useMutation(userLogin);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { data } = await login({
            variables: {
              email: String(email.value),
              password: String(password.value),
            },
          });
          localStorage.setItem('graphqlBlog', JSON.stringify(data.login));
          console.log(data.login);
        }}
      >
        <input
          type='email'
          ref={(value) => (email = value)}
          id='email'
          placeholder='Email'
        />
        <input
          type='password'
          ref={(value) => (password = value)}
          id='password'
          placeholder='Password'
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
