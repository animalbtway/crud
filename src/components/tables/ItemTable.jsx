import React from "react";


function ItemTable(props) {

    function handleDeleteItem(id) {
        props.deleteItem(id)
    }

    return(
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                {/*<th>Employees</th>*/}
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {props.items.length > 0 ? (
                    props.items.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.status}</td>
                            {/*<td>{item.employees}</td>*/}
                            <td>
                                <button onClick={() => {props.editRow(item)}} className="button muted-button">
                                    Edit
                                </button>
                                <button
                                    className="button muted-button"
                                    onClick={() => handleDeleteItem(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                    ):(
                    <tr>
                        <td colSpan={3}>Empty</td>
                    </tr>

                )}
            </tbody>
        </table>
    )
}

export default ItemTable;