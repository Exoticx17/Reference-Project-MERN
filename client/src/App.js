import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Blogs from './pages/blogs'
import Login from './pages/login'
import Signup from './pages/signup';
import Navbar from './components/navbar';
import React from 'react';
import Footer from './components/footer';
import IdPage from './pages/idpage';
import Database from './pages/database';
import Stories from './pages/stories';
import SDatabase from './pages/sdatabase';
import SIDPage from './pages/sidpage';
import Poles from './pages/poles';
import PIDPage from './pages/pidpage';
import PDatabase from './pages/pdatabase';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/blogs/:id" element={<IdPage />} />
          <Route exact path="/database" element={<Database />} />
          <Route exact path="/stories" element={<Stories />} />
          <Route exact path="/sdatabase" element={<SDatabase />} />
          <Route exact path="/stories/:id" element={<SIDPage />} />
          <Route exact path="/poles" element={<Poles />} />
          <Route exact path="/poles/:id" element={<PIDPage />} />
          <Route exact path="/pdatabase" element={<PDatabase />} />
        </Routes>
      </div>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
