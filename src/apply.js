//grabbing elements from the html by id so that we can 'manipulate' (add and change) them later on!
const circusApp = document.getElementById('circus-app');
const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const peanutDisplay = document.getElementById('peanut-display');


//adding an on 'change' event listener so that when someone changes the position of the slider the number on the side changes too to update the current value that the user has inputted
peanuts.addEventListener('change', function() {
    peanutDisplay.textContent = peanuts.value;
});

//adding an on submit event listener to the form, so that when we submit the form all the code inside runs
circusApp.addEventListener('submit', function(event) {  
    event.preventDefault();  //preventing the default form submission behavior because we want to write our own code instead!
    const tigerNames = [];  //initializing a new variable tigerNames with the value as an empty array


    for(let i = 0; i < circusApp.tiger.length; i++) {  //looping through the length of tiger i.e. the number of inputs that have the name attribute of tiger
        const name = circusApp.tiger[i];   // rassigning name to be each individual tiger input, i.e. it will be different each time we loop through the array of tiger inputs
        if(name.checked) {  // if the input in checked run the line of code below
            tigerNames.push(name.value);  // and use the push method to push the value of the input into the tigerNames array that we defined on line 17
        }
    }

    const applicant = {  // here we are defining the applicant object
        name: name.value,  
        position: position.value, // we are telling the computer what we want the name of each key to be (position) and what the value will be (position.value) NOTE: the position in position.value is defined on line 4, it has nothing to do with the name of the key (the word on the left side)!!
        allergy: peanuts.value,
        likeElephants: circusApp.elephants.value,
        tigerNames: tigerNames
    };
    
    let applicants = [];  //initializing the variable applicants as an empty array so we can use it later
    
    const jsonString = window.localStorage.getItem('applicants'); //getting whatever applicants are in local storage (in JSON format)
    if(jsonString) { // if we got something from local storage, run the following line of code
        applicants = JSON.parse(jsonString); //turning what we got from local storage into javascript format and re-assign applicants to be the value of that
    }

    applicants.push(applicant);  // using the push array method to add the new applicant we get from the current form submission to the array of applicants

    const serialize = JSON.stringify(applicants);  //now that we added our new applicant to our array of previous applicants, we are turning our array into JSON again
    window.localStorage.setItem('applicants', serialize); //now that it's in JSON format, we can save the updated array to localstorage with the key of 'applicants' 
    
    window.location = 'thanks.html'; //redirecting us to a new page
});
