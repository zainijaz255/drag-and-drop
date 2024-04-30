import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Droppable, Draggable } from 'react-beautiful-dnd'
const Person2 =({value ,boxData2}) => {
  return (
    <div>
   
   <Droppable droppableId="box3">
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <h1 style={{ textAlign: "center" }}>Box 2</h1>
          {value.map((val, index) => (
            <Draggable key={val.ticketId} draggableId={val.ticketId.toString()} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  className='smalldiv'
                >
                  <h1>{val.label}</h1>
                  <p>{val.ticketId}</p>
                  <p>{val.code}</p>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                      <p>{val.visitFee}</p>
                    </div>
                    <div>
                      <select
                        onChange={(e) => boxData2(val, index, e.target.value)}
                      >
                        <option>add_data</option>
                        <option value="box2">box2</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
      
    
      
    </div>
  )
}

export default Person2
