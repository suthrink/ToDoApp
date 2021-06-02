//import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Todolist from './Todolist';
function App() {

  const[inputList,setInputList]=useState("");
  const[Items,setItems]=useState([]);

  const itemEvent = (e)=>{
    setInputList(e.target.value);
  };

  const listOfItems =()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };

  const deleteItems = (id)=>{
    console.log('deleted');
    setItems((oldItems)=>{
      return oldItems.filter((arrelement,index)=>{
              return index!==id;
      })
    })

}
  return (
 
    <div className="center-div">
    <br/>
    <h1>To do List</h1>
    <br/>
    <input className="input" type="text" placeholder="Add a Items" onChange={itemEvent}/>
    <button onClick={listOfItems}  className="button">+</button>
    <ol>
      {Items.map((itemval , index)=>{
       return <Todolist key={index} id={index} onSelect={deleteItems} text={itemval}/>
       })}
    </ol>
    </div>
  
  );
}

export default App;
