import { getRequests, fetchRequests } from "./dataAccess.js"


//define the function that will be passed to the map() method
//convert each service request object into HTML representations
//The function should define 1 parameter (value will be each object in the array)
const convertRequestToListElement = (request) => {


            //The description of the service request should be interpolated inside the <li> HTML representation.
            //The function should return the HTML representation.
            return `
            <li>
                ${request.description}
                <button class="request__delete"
                        id="request--${request.id}">
                    Delete
                </button>
            </li>
        `
                }




// creating a component function that generates html
export const Requests = () => {
    const requests = getRequests()

    //invoking the function above to generate html
    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")
        }
        </ul>
    `

    return html
}


