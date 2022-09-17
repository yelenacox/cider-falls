//import guests function from database.js
import { getGuests} from "./database.js"

//set return of getAreas equal to a variable
const guests = getGuests()

//export function that builds html with info of guests interpolated
export const guestList = () => {
    let guestsHtml = ""

    for (const guest of guests){
        guestsHtml += `<div id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</div>`
    }
    return guestsHtml
}