import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';
const App = () => {

const [fullname,setName] = useState();


const [items,setItems] = useState([]);
 
const InputChange = (event) =>{ 
setName(event.target.value);

}

const ChangeButton = () =>{
    setItems((oldvalue)=>{
        return [...oldvalue,fullname];
    });
    setName('');
};

const deleteItems = (id) =>{
   
   setItems((oldvalue)=>{
       return oldvalue.filter((arrElem,index)=>{    
           return index !== id;
       });
   });

};




    return (
        <>
        <div className="main-div">
        <div className="center-div">
            <h1>To-Do List</h1>
            <input type="text" placeholder="Add a items"  onChange={InputChange} value={fullname} ></input>
            <button onClick={ChangeButton}>+</button>

        <ol>
           
          {items.map((itemvalue,index)=>{
            return  <ToDoList key={index} 
            id={index} text={itemvalue}
            onSelect={deleteItems} 
            />
            
          })}
        </ol>

        </div>
        </div>
           </>
    )
}

ReactDom.render(

    <App/>,
    document.getElementById('root')
)
