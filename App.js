import React from 'react';
import Component from './Component';
import logo from './money-heist.jpg';
import logo1 from './dark.png';
import logo2 from './vampire-diaries.jpg';
import logo3 from './stranger things.jpg';
import logo4 from './sex-education.jpg';
const App = () =>{

return (
<>
<h1 className="top-heading">👉 Top 5 Netflix Original Series 👈</h1>
  <div>
  <Component name="Money-heist"  imgSrc={logo} paragraph="A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain."
    link="https://www.netflix.com/in/title/80192098"/>
  <Component  name="Dark" imgSrc={logo1} paragraph="When two children go missing in a small German town, its sinful past is exposed along with the double lives and fractured relationships ." 
    link="https://www.netflix.com/in/title/80100172"/>
  <Component name="Vampire Diaries" imgSrc={logo2} paragraph="On her first day at high school, Elena meets Stefan and immediately feels a connection with him. However, she doesn't know his brother, Damon, are in fact vampires."
    link="https://www.netflix.com/in/title/70143860"/>
  
  <Component name="Stranger Things" imgSrc={logo3} paragraph="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
    link="https://www.netflix.com/in/title/80057281"/>
 
 <Component name="Sex Education" imgSrc={logo4} paragraph="Insecure Otis has all the answers when it comes to sex advice, thanks to his therapist mom. So rebel Maeve proposes a school sex-therapy clinic."
    link="https://www.netflix.com/in/title/80197526"/>
    

  </div>
  </>
)};

export default App;