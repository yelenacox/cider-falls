//import areas function from database.js
import { getAreas, getServices, getServicesInAreas, getGuestsInArea } from "./database.js"

//set return of getAreas equal to a variable
const areas = getAreas()
const services = getServices()
const allAreaServices = getServicesInAreas()
const areaGuests = getGuestsInArea()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            const [, areaPrimaryKey] = itemClicked.id.split("--")
            for (const area of areas) {
                if (area.id === parseInt(areaPrimaryKey)) {
                    const totalGuests = filterAreaByGuests(area)
                    if (totalGuests !== 1) {
                        window.alert(`There are ${totalGuests} guests in this area`)
                    } else {
                        window.alert(`There is 1 guest in this area`)
                    }
                }
            }
        }
    }
)

const filterAreaByGuests = (area) => {
    let parkGuests = 0
    for (const inArea of areaGuests) {
        // for (const guest of currentGuests) {
        if (inArea.areaId === area.id) {
            parkGuests++
        }
    }
    return parkGuests
}

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
