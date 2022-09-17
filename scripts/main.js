//import functions that are exported from areas, guests, and services modules
import { parkServices } from "./services.js"
import { guestList } from "./guests.js"
import { parkAreas } from "./areas.js"
//define variable of the main html container equal to document.querySelector("NAME OF ID/CLASS WHERE MAIN HTML IS")
 
const mainContainer = document.querySelector("#container")

//Main HTML for the site, with values interpolated where they will need to be displayed
const applicationHTML = `
<h1>Cider Falls Park</h1>
<article class="park-areas">
    <section class="detail--column list details__areas">
        <h2>Park Areas</h2>
        ${parkAreas()}
    </section>
</article>

<article class="guests">
<section class="detail--column--orders">
<h1>Guests</h1>
    ${guestList()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML