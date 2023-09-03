import React from 'react'
import Navbar from './components/navbar/navbar'
import "./App.css"
import Banner from './components/banner/banner'
import Rowpost from './components/Rowpost/Rowpost'
import {action,originals,comedy,horror,documentaries,romance} from './urls'
function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url ={action} title='Action' isSmall />
      <Rowpost url ={horror} title='Horror' isSmall />
      <Rowpost url ={romance} title='Romance' isSmall />
      <Rowpost url ={comedy} title='Comedy' isSmall />
      <Rowpost url ={documentaries} title='Documentaries' isSmall />
    </div>
  )
}

export default App
