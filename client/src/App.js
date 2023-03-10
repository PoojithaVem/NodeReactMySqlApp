import './App.css';
import {BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home</Link>
        <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/createpost" element={<CreatePost />}></Route>
           <Route path="/post/:id" element={<Post />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
