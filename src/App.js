import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Component/style.css'
import Main from './Component/Main'
import { data } from './Component/Queues'


const App = () => {
  // console.log(data,"data....")
  return (
    <>
<div>
  <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Call Schedule</h1>
  <h2 style={{ textAlign:"center", fontStyle: 'italic', color: 'blue' }}>Schedule all calls here by drag and drop</h2> 
   {/* <buton className="btn btn-primary">click  me</buton> */}
  <Main/>
</div>

    </>
  )
}

export default App
