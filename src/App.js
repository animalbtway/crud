import React, { useState } from 'react';

import './App.css';

import AddItemForm from "./components/forms/AddItemForm";
import ItemTable from "./components/tables/ItemTable";
import EditItemForm from "./components/forms/editItemForm";



function App() {

    const Data = [
        {
            id: 2,
            name: "Проект 2",
            status: "Completed",
            employees: [ ]
        }
    ]

    const [items, setItems] = useState(Data)
    const [editing, setEditing] = useState(false)
    const initialFormState = {id: '', name: '', status: '', employees: '' }
    const [currentItem, setCurrentItem] = useState(initialFormState)

    function addItem (item) {
        item.id = items.length + 1
        setItems([...items, item])
    }

    function deleteItem (id) {
        setEditing(false)
        setItems(items.filter(item => item.id !== id))
    }

    function updateItem(id, updateItem) {
        setEditing(false)
        setItems(items.map(item => (item.id === id ? updateItem : item)))
    }

    function editRow (item) {
        setEditing(true)
        setCurrentItem({id: item.id, name: item.name, status: item.status, employees: item.employees})
    }

  return (
      <div className='wrapper'>
          <div className="container">
                      {editing ? (
                          <div>
                              <EditItemForm
                              editing={editing}
                              setEditing={setEditing}
                              currentItem={currentItem}
                              updateItem={updateItem}
                              />
                          </div>
                      ) : (
                       <div>
                        <AddItemForm addItem={addItem}/>
                  </div>
                    )}
                  <div>
                        <ItemTable  items={items} deleteItem={deleteItem} editRow={editRow} />
                  </div>
            </div>
      </div>
  )
}

export default App;
