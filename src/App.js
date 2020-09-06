import React, { useState } from 'react';

import './App.css';

import AddItemForm from "./components/forms/AddItemForm";
import ItemTable from "./components/tables/ItemTable";
import EditItemForm from "./components/forms/editItemForm";



function App() {
    //
    // function getData () {
    //     fetch('https://webhook.site/64fa91da-1daa-46f1-b321-7960f0e22e3c', {mode: 'no-cors'}).then(data => {
    //         return data
    //     }).then(data => (console.log(data)))
    // }
    //
    //
    // function postData (id, name, status, employees)  {
    //     fetch('https://webhook.site/64fa91da-1daa-46f1-b321-7960f0e22e3c', {
    //         method : 'post',
    //         mode: 'no-cors',
    //         headers: {
    //             'Accept' : 'application/json',
    //             'Content-type' : 'application/json',
    //         },
    //         body: JSON.stringify( {
    //             id: id,
    //             name: name,
    //             status: status,
    //             employees: employees,
    //         })
    //     }).then(data => {
    //         return data
    //     })
    // }
    //
    // function deleteData (id)  {
    //     fetch('https://webhook.site/64fa91da-1daa-46f1-b321-7960f0e22e3c' + id, {
    //         method : 'delete',
    //     })
    //         .then(res => res.text())
    //         .then(res => console.log(res))
    // }
//-----------------------------------------------------------------//
//-----------------------------------------------------------------//


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
