import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Film from './Film'
import Portfolio from './Portfolio'
import Timer from './Timer'
import Pet from './Pet'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Film 
  title="Harry Potter"
  regeseur="Alfonso Cuarón"
  year="2004"
  studio="Warner Bros"
  poster="/public/harry-potter-poster.jpg"
   ></Film>
   <Portfolio 
   name="Zubenko"
   surname="Michaylo"
   middlename="Petrovich"
   phone="+380507777777"
   adress="Fayniy street 777"
   skills={["C+++","C--","C@","C$","C!"]}
   photo="/public/photo.png"
   >
   </Portfolio>
   <Timer></Timer>
   <Pet name="Myrzik" species="Cat" age="3" ></Pet>
  </>
)
