import { getRequests } from "./dataAccess.js"

//define the function that will be passed to the map() method
//convert each service request object into HTML representations

//The function should define 1 parameter (value will be each object in the array)
//The description of the service request should be interpolated inside the <li> HTML representation.
//The function should return the HTML representation.


const convertRequestToListElement = (requestObject) => {

}

export const Requests = () => {
    const requests = getRequests()

    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
        </ul>
    `

    return html
}
