"use strict";

// Animate intro to website



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'Light'},
    {id: 2, name: 'Half City', roast: 'Light'},
    {id: 3, name: 'Cinnamon', roast: 'Light'},
    {id: 4, name: 'City', roast: 'Medium'},
    {id: 5, name: 'American', roast: 'Medium'},
    {id: 6, name: 'Breakfast', roast: 'Medium'},
    {id: 7, name: 'High', roast: 'Dark'},
    {id: 8, name: 'Continental', roast: 'Dark'},
    {id: 9, name: 'New Orleans', roast: 'Dark'},
    {id: 10, name: 'European', roast: 'Dark'},
    {id: 11, name: 'Espresso', roast: 'Dark'},
    {id: 12, name: 'Viennese', roast: 'Dark'},
    {id: 13, name: 'Italian', roast: 'Dark'},
    {id: 14, name: 'French', roast: 'Dark'},
];

// Sets up the format for the coffees
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3> // ' + coffee.roast;

    return html;
}


// Loops through all the coffees using the renderCoffee function
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


function getUserInput() {
    return document.getElementById('userInputElement').value.toLowerCase();
}


function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast === selectedRoast) {
            if (getUserInput() === "") {
                filteredCoffees.push(coffee);
            } else if (coffee.name.toLowerCase().includes(getUserInput())) {
                filteredCoffees.push(coffee);
            }
        }
        else if (selectedRoast === "All") {
            if (getUserInput() === "") {
                filteredCoffees.push(coffee);
            } else if (coffee.name.toLowerCase().includes(getUserInput())) {
                filteredCoffees.push(coffee);
            }
        }
    });
    OldTableDiv.innerHTML = renderCoffees(filteredCoffees);
}



var OldTableDiv = document.querySelector('#coffees');
// Calls render Coffees
OldTableDiv.innerHTML = renderCoffees(coffees);

var roastSelection = document.querySelector('#roast-selection');

var userInput = document.getElementById('userInputElement');

roastSelection.addEventListener('input', updateCoffees);
userInput.addEventListener('input', updateCoffees);


// CODE FOR MAKING A USER-CREATED FAKE COFFEE -----------------------

var newUserInput = document.getElementById('new-user-input');
var newUserRoast = document.getElementById('new-roast-selection');

function MakeFakeCoffee(e) {
    e.preventDefault();
    var newCoffee = {id: (coffees.length + 1), name: newUserInput.value, roast: newUserRoast.value};
    coffees.push(newCoffee);
    updateCoffees(e);
    coffees.innerHTML = renderCoffees(coffees);
}

var fakeCoffeeButton = document.getElementById('FakeCoffeeButton');

fakeCoffeeButton.addEventListener("click", MakeFakeCoffee);