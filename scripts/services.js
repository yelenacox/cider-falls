//import services function from database.js
import { getServices } from "./database.js"

//set return of getAreas equal to a variable
const services = getServices()

//export function that builds html with type of service interpolated
export const parkServices = () => {
    let servicesHtml = ""
    for (let i = 0; i < services.length; i++) {
        if (i !== services.length - 1) {
            servicesHtml += `<div id="service--${services[i].id}">${services[i].type},&nbsp</div>`
        } else { servicesHtml += `<div id="service--${services[i].id}">${services[i].type}</div>`}
    }
    return servicesHtml
}