import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"


// convert the data structures to HTML representations
export const SinkRepair = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>

        <article class="formRequests">
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
        </article>
    `
}

