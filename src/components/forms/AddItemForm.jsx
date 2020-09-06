import React, {useState} from "react";

function AddItemForm(props) {
    const initialFormState = {
        id: null,
        name: "",
        status: "",
        employers: "",
    }
    const [item, setItem] = useState(initialFormState)

    function handleInputChange (event) {
        const {name, value} = event.currentTarget
        setItem({...item, [name]: value})
    }

    function handleSubmit (event) {
        event.preventDefault()
        if(!item.name || !item.status) return
        props.addItem(item)
        setItem(initialFormState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={item.name}
                onChange={handleInputChange}/>
            <label>Status</label>
            <input
                type="text"
                name="status"
                value={item.status}
                onChange={handleInputChange}
            />
            {/*<label>Employees</label>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    name="employees"*/}
            {/*    value={item.employees}*/}
            {/*    onChange={handleInputChange}/>*/}
            <button>Add new item</button>
        </form>
    )
}

export default AddItemForm;