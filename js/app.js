// console.log('ciao')

// 1 Create an Input 
//     -put the number of KMs to travel

// 2 Create a Select
//     -put inside 3 different options

// 3 Create a Button
//     -when I click the button I get:
//         .price per KMs
//             _then I make a discount
//                 if < 18
//                 else if > 65
//                 else no discount


// took the elemets from HTML
const priceGeneratorElement = document.querySelector('#form-container input[name="price-generator"]')

const travelDistanceElement = document.querySelector('#form-container input[name="travel"]')

const ageSelectorElement = document.querySelector('#form-container select[name="age-selector"]')

const userFullName = document.querySelector('#form-container input[name="full-name"]')

console.log (travelDistanceElement, ageSelectorElement, priceGeneratorElement)

// add event
priceGeneratorElement.addEventListener('click', function() {

console.log(travelDistanceElement.value, ageSelectorElement.value)

// add price rate

const PRICE_PER_KM = 0.21

// add passenger name

let fullName = userFullName.value

// stamp passenger name on HTML

const passengerName = document.querySelector('#passenger-name')
passengerName.innerHTML = fullName

// stamp train carriage number on HTML

const trainCarriage = document.querySelector('#train-carriage')
trainCarriage.innerHTML = parseInt(Math.random() * 9) + 1

// stamp train code on HTML

const trainCode = document.querySelector('#train-code')
trainCode.innerHTML = parseInt(Math.random() * 9999) + 1

// add the "travel" value

let travel = travelDistanceElement.value
    if (travel < 0 || isNaN (travel)) {
        travel = 'Not valid'
    }

// add total price

const totalPrice = travel * PRICE_PER_KM;
    console.log(totalPrice)
    
let Euro = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
})
    
// add the "age-selector" value

let ageToSelect = ageSelectorElement.value

    if (ageToSelect == "young") {

        // get the price of the discount 

        const youngDiscount = totalPrice * 0.2
        console.log(youngDiscount)

        // get the price difference

        const yourPrice = document.getElementById('total-price')

            if (isNaN (totalPrice)) {
                yourPrice.innerHTML = 'Not valid'
            }

            // stamp the new price on HTML 

            else {
                yourPrice.innerHTML = Euro.format(totalPrice - youngDiscount)
                console.log(yourPrice)
            }

        // stamp the type of ticket in HTML 
        
        const ticketType = document.getElementById('ticket-type')
        ticketType.innerHTML = 'Young Ticket'
        
    }

    else if (ageToSelect == "middle") {

        // get the price without discount 

        const noDiscount = totalPrice

        const yourPrice = document.getElementById('total-price')

        if (isNaN(totalPrice)) {
            yourPrice.innerHTML = 'Not valid'
        }

        // stamp the price on HTML

        else {
            yourPrice.innerHTML = Euro.format(noDiscount)
        }

        // stamp the type of ticket in HTML 

        const ticketType = document.getElementById('ticket-type')
        ticketType.innerHTML = 'Standard Ticket'

    }

    else if (ageToSelect == "old"){

        // get the price of the discount

        const oldDiscount = totalPrice * 0.4
        console.log(oldDiscount)

        // get the price difference

        const yourPrice = document.getElementById('total-price')

            if (isNaN(totalPrice)) {
                yourPrice.innerHTML = 'Not valid'
            }

            // stamp the new price on HTML

            else {
                yourPrice.innerHTML = Euro.format(totalPrice - oldDiscount)
            }

            // stamp the type of ticket in HTML 

            const ticketType = document.getElementById('ticket-type')
            ticketType.innerHTML = 'Over Ticket'    
    }

})