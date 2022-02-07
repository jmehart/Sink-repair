
// to store that external data in your application state when you fetch it
const applicationState = {
    requests: []
}


// HTTP GET Request with Fetch
const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
        .then(response => response.json())
        .then(
            (serviceRequests) => {
                // Store the external state in application state
                applicationState.requests = serviceRequests
            }
        )
}


// returns a copy of the requests state
export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

/*
Here are the four main methods used on HTTP requests:
Method:	            Description:
GET	                Please give me this resource.
POST	            Please create something new.
PUT	                Please modify an existing resource.
DELETE	            Please delete an existing.
*/


const mainContainer = document.querySelector("#container")

//take the transient state and convert it into permanent state by storing it in the database.json file by using a fetch() call
export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        // POST method on any HTTP request means "Hey API!! I want you to create something new!"
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requests`, fetchOptions)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    })
}


export const deleteRequest = (id) => {
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}



mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})