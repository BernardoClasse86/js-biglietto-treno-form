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

const priceGeneratorElement = document.querySelector('#form-container input[name="price-generator"]')

const travelDistanceElement = document.querySelector('#form-container input[name="travel"]')

const ageSelectorElement = document.querySelector('#form-container select[name="age-selector"]')

const userFullName = document.querySelector('#form-container input[name="full-name"]')

console.log (travelDistanceElement, ageSelectorElement, priceGeneratorElement)

priceGeneratorElement.addEventListener('click', function() {

console.log(travelDistanceElement.value, ageSelectorElement.value)


const PRICE_PER_KM = 0.21

let fullName = userFullName.value

let travel = travelDistanceElement.value
    if (travel < 0 || isNaN (travel)) {
        travel = 'Not valid'
    }


const totalPrice = travel * PRICE_PER_KM;
    console.log(totalPrice)


let Euro = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
})
    

let ageToSelect = ageSelectorElement.value

    if (ageToSelect == "young") {

        const youngDiscount = totalPrice * 0.2
        console.log(youngDiscount)

        const yourPrice = document.getElementById('total-price')

            if (isNaN (totalPrice)) {
                yourPrice.innerHTML = 'Not valid'
            }

            else {
                yourPrice.innerHTML = Euro.format(totalPrice - youngDiscount)
                console.log(yourPrice)
            }
            
    }

    else if (ageToSelect == "middle") {

        const noDiscount = totalPrice

        const yourPrice = document.getElementById('total-price')

        if (isNaN(totalPrice)) {
            yourPrice.innerHTML = 'Not valid'
        }

        else {
            yourPrice.innerHTML = Euro.format(noDiscount)
        }

    }

    else if (ageToSelect == "old"){

        const oldDiscount = totalPrice * 0.4
        console.log(oldDiscount)

        const yourPrice = document.getElementById('total-price')

            if (isNaN(totalPrice)) {
                yourPrice.innerHTML = 'Not valid'
            }

            else {
                yourPrice.innerHTML = Euro.format(totalPrice - oldDiscount)
            }
    }

})