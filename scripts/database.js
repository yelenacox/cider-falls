//database with areas, services, and guests objects
const database = {
    areas: [
        {id: 1, name: "Lodge"},
        {id: 2, name: "Lost Wolf Hiking Trail"},
        {id: 3, name: "Chamfort River"},
        {id: 4, name: "Gander River"},
        {id: 5, name: "Campgrounds"},
        {id: 6, name: "Pine Bluffs Trail"}
    ],
    services: [
        {id: 1, type: "lodging"},
        {id: 2, type: "parking"},
        {id: 3, type: "information"},
        {id: 4, type: "picknicking"},
        {id: 5, type: "hiking"},
        {id: 6, type: "rock climbing"},
        {id: 7, type: "rafting"},
        {id: 8, type: "canoeing"},
        {id: 9, type: "fishing"},
        {id: 10, type: "zip lines"}
    ],
    guests: [
        {id: 1, firstName: "Bob", lastName: "Smith"},
        {id: 2, firstName: "Jane", lastName: "Smith"},
        {id: 3, firstName: "John", lastName: "Smith"},
        {id: 4, firstName: "Homer", lastName: "Simpson"},
        {id: 5, firstName: "Marge", lastName: "Simpson"},
        {id: 6, firstName: "Bart", lastName: "Simpson"},
        {id: 7, firstName: "Lisa", lastName: "Simpson"},
        {id: 8, firstName: "Maggie", lastName: "Simpson"},
        {id: 9, firstName: "Lois", lastName: "Lane"},
        {id: 10, firstName: "Bruce", lastName: "Wayne"},
        {id: 11, firstName: "Clark", lastName: "Kent"},
        {id: 12, firstName: "Alfred", lastName: "Pennyworth"}
    ],
    guestsInArea: [
        {id: 1, guestId: 1, areaId: 1},
        {id: 2, guestId: 2, areaId: 1},
        {id: 3, guestId: 3, areaId: 1},
        {id: 4, guestId: 4, areaId: 2},
        {id: 5, guestId: 5, areaId: 3},
        {id: 6, guestId: 6, areaId: 2},
        {id: 7, guestId: 7, areaId: 3},
        {id: 8, guestId: 8, areaId: 3},
        {id: 9, guestId: 9, areaId: 4},
        {id: 10, guestId: 10, areaId: 5},
        {id: 11, guestId: 11, areaId: 4},
        {id: 12, guestId: 12, areaId: 6},
    ],
    servicesInArea: [
        {id: 1, serviceId: 1, areaId: 1},
        {id: 2, serviceId: 2, areaId: 1},
        {id: 3, serviceId: 3, areaId: 1},
        {id: 4, serviceId: 4, areaId: 1},
        {id: 5, serviceId: 9, areaId: 4},
        {id: 6, serviceId: 5, areaId: 4},
        {id: 7, serviceId: 4, areaId: 2},
        {id: 8, serviceId: 5, areaId: 2},
        {id: 9, serviceId: 6, areaId: 2},
        {id: 10, serviceId: 1, areaId: 5},
        {id: 11, serviceId: 2, areaId: 5},
        {id: 11, serviceId: 3, areaId: 5},
        {id: 11, serviceId: 7, areaId: 3},
        {id: 11, serviceId: 8, areaId: 3},
        {id: 11, serviceId: 9, areaId: 3},
        {id: 11, serviceId: 4, areaId: 6},
        {id: 11, serviceId: 5, areaId: 6},
        {id: 11, serviceId: 10, areaId: 6}
    ]
}

//export functions that returns a map of the areas, services, and guests arrays

export const getAreas = () => {
    return database.areas.map(area => ({...area}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getGuestsInArea = () => {
    return database.guestsInArea.map(guestInArea => ({...guestInArea}))
}

export const getServicesInAreas = () => {
    return database.servicesInArea.map(serviceInArea => ({...serviceInArea}))
}
