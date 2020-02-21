"use strict";

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// Sets up the format for the coffees
function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

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

var userInputValue = document.getElementById('userInputElement').value;

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
        console.log("running for each");
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}



var tbody = document.querySelector('#coffees');
// Calls render Coffees
tbody.innerHTML = renderCoffees(coffees);

var roastSelection = document.querySelector('#roast-selection');

var userInput = document.getElementById('userInputElement');

roastSelection.addEventListener('input', updateCoffees);
userInput.addEventListener('input', updateCoffees);