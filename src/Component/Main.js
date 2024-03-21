import React, { useState } from 'react';
import './style.css';
import { data } from './Queues';
import Box1 from './Box1';
import Person2 from './Person2';
// import Final from './Final';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Main = () => {
  const [state, setState] = useState({});
  const todo = data[0].employee;
  const todo1 = data[0].tickets;
  const [box1, setbox1]=useState([ ])
  const [box2, setbox2]=useState([ ])
  const [update,setupdate]=useState(todo1)
  const length=update.length
  const  option_fun=(mydata, index, option)=>{
       if(option==="box1"){
        setbox1([...box1,mydata ])
        
      }
       else{
        setbox2([...box2,mydata])
       }
const filter=update.filter((val, index)=>{
  return mydata!==val;
})

setupdate(filter)

  }
  
  const option_fu=(val,index,option)=>{
    if(option==="box2"){
     setbox2([...box2,val])
    }

    const filter=box1.filter((value, index)=>{
      return value!==val;
    })
    
    setbox1(filter)
  }

  const option_fu2=(val,index,option)=>{
    if(option==="box1"){
     setbox1([...box1,val])
    }
const filter=box2.filter((value, index)=>{
  return value!==val;
})

setbox2(filter)
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const getItemAndSetter = (id) => {
      switch (id) {
        case 'box1':
          return [update, setupdate];
        case 'box2':
          return [box1, setbox1];
          case 'box3':
            return [box2, setbox2];
        default:
          return [];
      }
    };

    const [sourceList, setSourceList] = getItemAndSetter(source.droppableId);
    const [destinationList, setDestinationList] = getItemAndSetter(destination.droppableId);
    const [removed] = sourceList.splice(source.index, 1);
    destinationList.splice(destination.index, 0, removed);

    setSourceList([...sourceList]);
    setDestinationList([...destinationList]);
  };

  return (
    <>
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='maindiv'>
        <div className='BOX'>
          <div className="header">
            <div><h1>{todo.label} Calls</h1></div>
            <div>{length}</div>
          </div>
          <Droppable droppableId="box1">
  {(provided) => (
    <div
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      {update.map((tic, index) => (
        <Draggable key={tic} draggableId={tic.ticketId.toString()} index={index}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className="smalldiv"
              onClick={() => setState({
                box1: "box1",
                box2: "box2",
                add_data: "Add data"
              })}
            >
              <h1>{tic.label}</h1>
              <p>{tic.ticketId}</p>
              <p>{tic.code}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>{tic.visitFee}</p>
                </div>
                <div>
                  <select onChange={(e) => option_fun(tic, index, e.target.value)}>
                    <option>{state.add_data}</option>
                    <option value="box1">{state.box1}</option>
                    <option value="box2">{state.box2}</option>
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

        <div className='BOX'>
          <Box1 value={box1} boxData1={option_fu}/>
        </div>
        <div className='BOX'>
          <Person2  value={box2} boxData2={option_fu2} />
        </div>
        {/* <div className='BOX'>
        <Final value1={box1} value2={box2}/>
        </div> */}
      </div>
      </DragDropContext>
    </>
  );
}

export default Main;