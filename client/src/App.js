import { Route, Switch } from 'react-router-dom';
import AddPost from './components/Posts/AddPost';
import Posts from './components/Posts/Posts';
import Login from './components/Users/Login';

function App() {
  return (
    <Switch>
      <Route path='/addPost' component={AddPost} />
      <Route path='/login' component={Login} />
      <Route exact path='/' component={Posts} />
    </Switch>
  );
}

export default App;
