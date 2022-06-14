import React from "react";
import { useUserContext } from "../contexts/UserContext";
import "../styles/dashboard.css"

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div className="dashboard">
      <ul className="welcome">
      <li>Welcome {user.displayName}, <span>You Are Amazing!</span></li>
      <li style={{fontSize:"20px"}}>Email: {user.email}</li>
      <li><button onClick={logoutUser} className="buttonLi">Log out</button></li>
      </ul>

      <div className="story">
       <h1 className="per">Here is a story I wrote on my blog last year September about how I became a First bank Ambassador</h1>
       <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56.94 79.32C56.94 74.88 55.74 71.04 53.28 67.92C49.56 63.24 42.3 62.64 38.1 63.6C36.36 53.7 44.76 41.1 55.62 35.7L47.28 24C30.9 31.8 14.76 49.68 17.52 72.3C19.26 86.58 27.54 96 39.24 96C44.34 96 48.6 94.5 51.96 91.5C55.32 88.5 56.94 84.42 56.94 79.32ZM105.24 79.32C105.24 74.88 104.04 71.04 101.58 67.92C97.8 63.24 90.6 62.64 86.4 63.6C84.66 53.7 93.06 41.1 103.92 35.7L95.58 24C79.2 31.8 63.12 49.68 65.88 72.3C67.62 86.58 75.84 96 87.54 96C92.64 96 96.9 94.5 100.26 91.5C103.62 88.5 105.24 84.42 105.24 79.32Z" fill="#FE7BB0"/>
      </svg>
      <h3>Say hello to the new first bank ambassador in town, yelzzz.</h3>
      <h4>Let me give you a quick backstory on how I was able to bag this deal.</h4>
      <p>Last week, I had a long conversation with my friend about how I want my younger sister to come live with me; I told her I was afraid of taking that step because it would be a heavy burden. The truth is that I am still striving to get by on my own and pay my bills, but I wanted to help my sister.</p>
      <p>Then she asked me a question, she said,</p>
      <p>“Let’s assume you were nominated as a leader to climb a tree, and you have other people following you behind who also wants to climb that tree, would you tell them to attach themselves to you while climbing the tree or would you climb the tree alone first and then throw a rope down for them to hang on to and climb with?</p>
      <p>I chose the second option, then she said,</p>
      <p>“That’s a smart decision. If you had chosen the first option then you would never get to climb the tree because the burden of the people hanging on to you will weigh you down. “</p>
      <p>”At this point in your life, you can’t afford to take care of your sister, and it’s not like she has nowhere to stay at the moment. Why don’t you work on yourself first, find better money-making opportunities that would enable you to take care of yourself well, and pay your bills with no hassles?</p>
      <p>By then, you can now have your sister come live with you because she wouldn’t be a burden anymore. You would have enough resources to take care of yourself and her.</p>
      <p>“Wawu!” that was the only word I could come up with at that point because everything she said made perfect sense.</p> 
      <p>Then I immediately remembered the famous First Bank of Nigeria’s slogan,” You First “and there and then I told myself,</p>
      <p>“Hello peace, you come first, okay?  For you to be able to make any significant change to someone else’s life, you need to make a significant change to your own life first”.</p>
      <p>So, guys, that’s how I named myself First Bank’s ambassador.</p>
      <p>Here is the thing, I understand that you want to help people, you want to give your siblings and parents a better life, and you want to change the world, but boo you must realize that for you to make any significant change to anybody’s life, you must come first in your own life. Read that again “for you to make any significant change to anybody’s life, you must come first in your own life.”</p>
      <p>Some people may say doing such a thing makes you selfish, but honestly speaking, it doesn’t. You are only practicing self-care, not selfishness.</p>
      <p>You can’t fill an empty glass of water with an equally empty tap or glass. One vessel has to be full to serve the other.</p>
      <p>To take care of others, you need to start by taking care of yourself.</p>
      <p>Please be a First Bank ambassador like me and put you first.</p>
      <svg width="105" height="120" viewBox="0 0 105 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.5 22.5C10.0734 22.5 0 32.3672 0 45C0 57.6328 10.0734 67.5 22.5 67.5C25.1437 67.5 27.6445 66.9598 30 66.1221V67.5C30 75.7734 23.2734 82.5 15 82.5C10.8586 82.5 7.5 85.8586 7.5 90C7.5 94.1414 10.8586 97.5 15 97.5C31.5422 97.5 45 84.0422 45 67.5V45C45 32.3672 34.9219 22.5 22.5 22.5ZM105 45C105 32.5734 94.9266 22.5 82.5 22.5C70.0734 22.5 60 32.5734 60 45C60 57.4266 70.0734 67.5 82.5 67.5C85.1437 67.5 87.6445 66.9598 90 66.1221V67.5C90 75.7734 83.2734 82.5 75 82.5C70.8586 82.5 67.5 85.8586 67.5 90C67.5 94.1414 70.8586 97.5 75 97.5C91.5422 97.5 105 84.0422 105 67.5V45Z" fill="#FE7BB0"/>
      </svg>
  
      <p className="other">You can check out my other blog posts <a href="https://poriamedia.com/" style={{textDecoration:"none", color:"black", fontWeight:"700"}}> here. </a></p>

      </div>
    
    </div>
  );
};

export default Dashboard;