export function fetchDataSuccess(data) {
    return {
        type: 'FETCH_DATA_SUCCESS',
        data
    }
}

export function fetchData(url) {
    return (dispatch)=>{
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response
            })
            .then(response => response.json())
            .then(data => dispatch(fetchDataSuccess(data)))
    }
}