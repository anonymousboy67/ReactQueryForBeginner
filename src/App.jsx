
import './App.css'

import PostsTraditional from './components/PostsTraditional'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PostRQ from './components/PostRQ'


function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Traditional Posts</Link>
            </li>
            <li>
              <Link to="/rq-posts">RQ Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsTraditional />} />
          <Route path="/rq-posts" element={<PostRQ />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;