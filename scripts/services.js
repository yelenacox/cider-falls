//import services function from database.js
import { getServices} from "./database.js"

//set return of getAreas equal to a variable
const services = getServices()

//export function that builds html with type of service interpolated
export const parkServices = () => {
    let servicesHtml = ""
    for (const service of services){
        servicesHtml+= `<div id="service--${service.id}">${service.type}</div>`
    }
    return servicesHtml
}