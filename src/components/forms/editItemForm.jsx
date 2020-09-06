import React, { useState, useEffect } from "react";

function EditItemForm (props) {
    const [item, setItem] = useState(props.currentItem)

    useEffect(
        () => {
            setItem(props.currentItem)
        },
        [props]
    )

    function handleInputChange(event) {
        const {name, value} = event.target
        setItem({...item, [name] : value})
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (!item.name || !item.status) return
        props.updateItem(item.id, item)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={item.name}
                onChange={handleInputChange}
            />
            <label>Status</label>
            <input
                type="text"
                name="status"
                value={item.status}
                onChange={handleInputChange}
            />
            {/*/!*<label>Employees</label>*!/*/}
            {/*/!*<input*!/*/}
            {/*/!*    type="text"*!/*/}
            {/*/!*    name="employees"*!/*/}
            {/*/!*    value={item.employees}*!/*/}
            {/*/!*    onChange={handleInputChange}*!/*/}
            {/*/>*/}
            <button>Update</button>
            <button
                onClick={() => props.setEditing(false)}
                className="button muted-button"
            >
                Cancel
            </button>
        </form>
    )
}

export default EditItemForm;