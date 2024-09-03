// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    
    for(let dish of dishData)
    {
        var finalPrice;
        if(taxBoolean===true)
        {
            finalPrice = dish.price*tax;
        }
        else if(taxBoolean===false)
        {
            finalPrice = dish.price;
        }
        else
        {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log(`Dishes: ${dish.name} price: $${finalPrice}`);
        dish.finalPrice = finalPrice;
    }

}

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean);
    if(guests>0 && guests<30 && typeof(guests)=='number')
    {
        let discount = 0;
        if(guests<5)
        {
            discount = 5;
        }
        else if(guests>=5)
        {
            discount = 10;
        }
        else{}
        console.log(`Discount is: $${discount}`);
    }
    else
    {
        console.log('The second argument must be a number between 0 and 30');
    }
}

// Call getDiscount()
// getDiscount();


function add_types()
{
    let dishes = document.getElementById("dishes");
    for(let dish of dishData)
    {
        let name = dish.name;
        let nameH2 = document.createElement('h2');
        nameH2.innerText = name;
        let newSpan = document.createElement('span');
        newSpan.setAttribute('class',"badge bg-secondary");
        newSpan.innerText = "New";
        nameH2.appendChild(newSpan);
        dishes.appendChild(nameH2);
    }
}
function add_types_prices()
{
    let dishes_table = document.getElementById("dishes_price_table");
    for(let dish of dishData)
    {
        let name = dish.name;
        let price = dish.price;
        let nameH2 = document.createElement('h2');
        nameH2.innerText = name;
        let tableRow = document.createElement('tr');
        let nameData = document.createElement('td');
        nameData.innerText=name;
        let priceData = document.createElement('td');
        priceData.innerText="$"+price;
        tableRow.appendChild(nameData);
        tableRow.appendChild(priceData);
        dishes_table.appendChild(tableRow);
    }
}
getPrices(true);
add_types();
add_types_prices();