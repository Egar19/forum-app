import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LeaderboardsPage from './pages/LeaderboardPage';

function App() {
  return (
    <>
      <div className='flex'>
        <div className='fixed top-0 left-0 h-screen'>
          <Navbar />
        </div>

        <div className='flex-1 ml-10 md:ml-40 p-4'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/post/:id' element={<DetailPage />} />
            <Route path='/addpost' element={<AddPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/leaderboards' element={<LeaderboardsPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
