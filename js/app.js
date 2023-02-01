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

// const totalPriceElement = document.getElementById('total-price')

console.log (travelDistanceElement, ageSelectorElement, priceGeneratorElement)

priceGeneratorElement.addEventListener('click', function() {
    // console.log('modify kms')
    console.log(travelDistanceElement.value, ageSelectorElement.value)

    const PRICE_PER_KM = 0.21

    const totalPrice = travelDistanceElement.value * PRICE_PER_KM;
    console.log(totalPrice)

    let Euro = new Intl.NumberFormat('en-DE', {
        style: 'currency',
        currency: 'EUR',
    })

    let travel = travelDistanceElement.value

    let ageToSelect = ageSelectorElement.value

    const youngPriceDiscount = document.querySelector('#form-container option[value="young"]')

    const oldPriceDiscount = document.querySelector('#form-container option[value="old"]')

        // if (ageToSelect < 18){

        //     const youngDiscount = totalPrice * 0.2
        //     console.log(youngDiscount)

        //     const yourPrice = document.getElementById('total-price')
        //     yourPrice.innerHTML = Euro.format(totalPrice - youngDiscount)
        //     console.log(yourPrice)
        // }

        if (ageToSelect == "young") {

            const youngDiscount = totalPrice * 0.2
            console.log(youngDiscount)

            const yourPrice = document.getElementById('total-price')
            yourPrice.innerHTML = Euro.format(totalPrice - youngDiscount)
            console.log(yourPrice)
        }

        else if (ageToSelect == "old"){

            const oldDiscount = totalPrice * 0.4
            console.log(oldDiscount)

            const yourPrice = document.getElementById('total-price')
            yourPrice.innerHTML = Euro.format(totalPrice - oldDiscount)
            console.log(yourPrice)
        }

        else {

            const noDiscount = totalPrice
            console.log(noDiscount)

        }

    

    // let youngPrice = 0

    // let oldPrice = 0

    // let middlePrice = 0
        
    //     switch (ageToSelect) {

    //         case 'young':
    //             youngPrice = Euro.format(totalPrice * 0.8)
    //             break
    //         case 'middle':
    //             middlePrice = Euro.format(totalPrice)
    //             break
    //         case 'old':
    //             oldPrice = Euro.format(totalPrice * 0.6)
    //             break
            
    //     }
    // console.log(youngPrice, middlePrice, oldPrice)

    // const yourPrice = document.getElementById ('total-price')
    // yourPrice.innerHTML = youngPrice , middlePrice , oldPrice




    // console.log(travelDistanceElement, ageSelectorElement)



})