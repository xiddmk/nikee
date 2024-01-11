import React, { useState } from 'react'
import Card from './Components/Card'
import './index.css'

import shoesa from './assets/shoe1.png'
import shoesb from './assets/shoe2.png'
import shoesc from './assets/shoe3.png'
import puma from './assets/puma.png'
import adidas from './assets/adidas.png'
import nike from './assets/nike.png'




const App = () => {
  const [shoe1, setShoe] = useState(shoesa)
  const [shoe2, setShoea] = useState(shoesb)
  const [shoe3, setShoe3b] = useState(shoesc)

  const [pumaa, setpuma] = useState(puma)
  const [adidass, setadidas] = useState(adidas)
  const [nikee, setnike] = useState(nike)

  const [companya, setronniea] = useState("RONNIE FIEG X PUMA")
  const [companyb, setronnieb] = useState("NIKE")
  const [companyc, setronniec] = useState("ADIDAS")

  const [namea, setmida] = useState("R698 MID - SAKURA")
  const [nameb, setmidb] = useState("AIR MAX 90 INFRARED")
  const [namec, setmidc] = useState("YEZZY BOOSTS 350")


  const [abouta, setabout] = useState("Ronnie Fleg partners with Puma to redesign the R698. Insoire by Japanesh sakura blossoms  ")
  const [pricea, setpricea] = useState(" $ 299")
  const [priceb, setpriceb] = useState(" $ 199")
  const [pricec, setpricec] = useState(" $ 399")





  return (
    <div className='back w-screen h-screen flex items-center justify-evenly '>
      <Card logo={pumaa} shoe={shoe1} comp={companya} name={namea}    abot={abouta} price={pricea } />
      <Card logo={adidass} shoe={shoe2} comp={companyb} name={nameb}  abot={abouta} price={priceb } />
      <Card logo={nikee} shoe={shoe3} comp={companyc} name={namec}    abot={abouta} price={pricec } />
    </div>

  )
}

export default App
