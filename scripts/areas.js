//import areas function from database.js
import { getAreas, getServices, getServicesInAreas } from "./database.js"

//set return of getAreas equal to a variable
const areas = getAreas()
const services = getServices()
const allAreaServices = getServicesInAreas()

//function to find all services available in a single area
const filterAreaServices = (area) => {
    let areaServices = []
    for (const areaService of allAreaServices) {
        if (areaService.areaId === area.id) {
            areaServices.push(areaService)
        }
    }
    return areaServices
}

const parkServicesToHTML = (areaServices) => {
    let areaServiceTypes = ""
    areaServiceTypes += "<ul>"
    for (const areaService of areaServices) {
        for (const service of services) {
            if (service.id === areaService.serviceId) {
                areaServiceTypes += `<li>${service.type}</li>`
            }
        }
    }
    areaServiceTypes += "</ul>"
    return areaServiceTypes
}


//export function that builds html with names of area interpolated
export const parkAreas = () => {
    let areasHtml = ""
    for (const area of areas) {
        const servicesInArea = filterAreaServices(area)
        const areaServicesHTML = parkServicesToHTML(servicesInArea)
        areasHtml += `<div id="area--${area.id}">${area.name} ${areaServicesHTML}</div>`
    }
    return areasHtml
}
