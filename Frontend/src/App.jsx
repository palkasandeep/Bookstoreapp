import React from 'react'
import Homee from './Home/Homee';
import { Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './components/Signup';


const App = () => {
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Homee />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  )
}

export default App;