import React from 'react'

const Final = ({value1,value2}) => {
  return (
    <> 
    <h1 style={{textAlign:"center"}}>MAIN BOX</h1>
          {
        value1.map(( val,index)=>{
            return <div key={index} className='smalldiv' >
            <h1>{val.label}</h1>
                <p>{val.ticketId}</p>
                <p>{val.code}</p>
                <p>{val.visitFee}</p>
            </div>
        })
    }
    {
        value2.map(( val,index)=>{
            return <div key={index} className='smalldiv' >
            <h1>{val.label}</h1>
                <p>{val.ticketId}</p>
                <p>{val.code}</p>
                <p>{val.visitFee}</p>
            </div>
        })
    }
    </>
  )
}

export default Final
