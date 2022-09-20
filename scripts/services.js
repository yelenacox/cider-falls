//import services function from database.js
import { getServices, getServicesInAreas, getAreas } from "./database.js"

//set return of getAreas equal to a variable
const services = getServices()
const servicesInArea = getServicesInAreas()
const areas = getAreas()

//TO DO ---> event listener. Click event that displays where the service is when you click on it
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        //if itemclicked starts with service 
        if (itemClicked.id.startsWith("service")) {
            //and the primary key matched the service.id, split at --
            const [, servicePrimaryKey] = itemClicked.id.split("--")
            //iterate through services area
            for (const service of services) {
                //check if service.id is equal to primary key
                if (service.id === parseInt(servicePrimaryKey)) {
                    //if it is, set variables equal to the two functions defined below
                    const matchedItems = filterAreasByService(service)
                    //parameter of second function should be variable set to first function
                    const areas = filterMatchedItems(matchedItems)
                    //window alert that says ${service.type} is available in ${area}
                    const matchedService = `${service.type}`
                    const capitalizedService = `${service.type}`.charAt(0).toUpperCase() + matchedService.slice(1)

                    window.alert(`${capitalizedService} is available in ${areas}`)
                }

            }
        }

    }
)

//define function to iterate through servicesInArea. Set parameter for service
const filterAreasByService = (service) => {
    //set variable equal to empty array
    let matchedItems = []
    //iterate through servicesInArea
    for (const serviceInArea of servicesInArea) {
        //for each iteration check if iteration.serviceId is equal to service.id
        if (serviceInArea.serviceId === service.id) {
            //push matched to empty array
            matchedItems.push(serviceInArea)
        }
    }
    //return array
    return matchedItems
}

//define function to iterate through array defined above. Parameter set to that array
const filterMatchedItems = (matchedItems) => {
    //set variable equal to empty string
    let matchedAreas = ""
    //iterate through above array
    for (const match of matchedItems) {
        //nested for loop to iterate through areas array
        for (const area of areas) {
            //for each iteration check if area.id is equal to above array.areaId
            if (area.id === match.areaId) {
                if (matchedAreas === "") {
                    matchedAreas = area.name
                    //add service.type to string (can do the thing where if the string is empty, set it equal to servicetype, if not, set it equal to the string AND the current servicee
                } else {
                    matchedAreas = `${matchedAreas} and ${area.name}`
                }
            }
        }
    }
    //return string
    return matchedAreas
}



//export function that builds html with type of service interpolated
export const parkServices = () => {
    let servicesHtml = ""
    for (let i = 0; i < services.length; i++) {
        if (i !== services.length - 1) {
            servicesHtml += `<div id="service--${services[i].id}">${services[i].type},&nbsp</div>`
        } else { servicesHtml += `<div id="service--${services[i].id}">${services[i].type}</div>` }
    }
    return servicesHtml
}