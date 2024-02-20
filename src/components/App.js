import React , {useState} from 'react';
import ToDoItem from './ToDoItem';
import Input from './Input'

function App() {
  

  
  const [item, setItems] = useState([]);

  function AddItem(newitem){
    setItems( (previtem)=> {
      return [...previtem, newitem];
    });
  }

  function deleteItem(id){
    setItems(
      (prevvalue) => {
        return prevvalue.filter((item,index) => {
          return index!==id;
        });
      });
  }


  return (
    <div className="container">
      <div className='heading' >
        <h1>To-Do List</h1>
      </div>

      <Input additem = {AddItem} />

      <div>
        <ul>
          {item.map((todoitem , index) => (
          <ToDoItem 
            key = {index}
            id= {index}
            text={todoitem} 
            onChecked = {deleteItem}
          />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
