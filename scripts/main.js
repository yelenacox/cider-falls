//import functions that are exported from areas, guests, and services modules
import { parkServices } from "./services.js"
import { guestList } from "./guests.js"
import { parkAreas } from "./areas.js"
//define variable of the main html container equal to document.querySelector("NAME OF ID/CLASS WHERE MAIN HTML IS")

const mainContainer = document.querySelector("#container")

//Main HTML for the site, with values interpolated where they will need to be displayed
const applicationHTML = `
<article class="park-services">
    <section class="detail--column list details__services">
        <h2 class="services">Park Services</h2>
        <div class="service">${parkServices()}</div>
    </section>
    </article>
    
<section class="main">
<article class="park-areas">
    <section class="detail--column list details__areas">
        <h2 class="park-area-heading">Park Areas</h2>
            <div class="cards">
                ${parkAreas()}
            </div>
        </div>
</article>

<article class="guests">
<section class="detail--column--orders">
<h2 class="guest-heading">Current Guests</h2>
    ${guestList()}
    </section>
</article>
</section>

<article class="footer">
555-555-5555 - CiderFalls@email.com - 123 Main St
</footer>

`

mainContainer.innerHTML = applicationHTML