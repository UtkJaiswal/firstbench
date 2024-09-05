import React from 'react'
// import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar';
import Subject from '../components/Subjects/Subjects';
import HeroSection from '../components/HeroSection/HeroSection';
import DebateSessions from '../components/DebateSection/DebateSessions';
import Evaluation from '../components/EvaluationSection/Evaluation';
import MockTest from '../components/MockTestSection/MockTest';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Subject />
      <DebateSessions />
      <Evaluation />
      <MockTest />
      <Footer />
      {/* <div>
        <h1>Welcome to firstbench.ai</h1>
        <div className="login">
          Click here to &nbsp;
          <span className="loginbtn hover:underline text-blue-600 font-medium">
            <Link to={"/login"}>Login or Signup</Link>
          </span>
        </div>
      </div> */}
    </>
  )
}

export default Home
