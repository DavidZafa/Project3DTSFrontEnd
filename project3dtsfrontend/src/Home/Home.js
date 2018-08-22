import React from 'react'
import News from '../News/News'
import './Home.css'
import Creators from '../Creators/Creators'
const Home = () => (
  <div className = "home">
  <h1> Welcome To The Danger Zone</h1>

  <p>Welcome to our Project 3! For this project, we decided to create and app that would let you look for and choose selected endangered animals to track!</p>
  <News/>
  <Creators/>
  </div>


)

export default Home
