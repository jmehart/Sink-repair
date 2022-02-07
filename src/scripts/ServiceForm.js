import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="number" name="serviceBudget" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

//creating a mainContainer variable that points to the container in the HTML so that the we listen for an event within that specific html element
const mainContainer = document.querySelector("#container")

//creating a click event listener in the main container tht listens for a new submitted service request
mainContainer.addEventListener("click", clickEvent => {

    //conditional that checks if the click event id property is called "submitRequest"
    //this is referring to the button id on line 20 above
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        // The input and names we/re targeting are in the ServiceForm above and we're storing each value into a variable
        // .value = gives you the value of the input box that the query selector targeted. It's a property like .target.
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        // Properties are the variables we just defined above
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})