const name = document.getElementById('name');
const position = document.getElementById('position');
const peanuts = document.getElementById('peanuts');
const tigerNames = document.getElementById('tiger-names');

const jsonString = window.localStorage.getItem('applicants');  //reaching into local storage and getting our applicants by the key 'applicants'

let applicant = null;  //initializing these variables so we can reassign their values and use them later on
let applicants = [];

if(jsonString) { //if we got something from local storage...
    applicants = JSON.parse(jsonString); //then parse it into javascript and reassign that to the applicants variable
}
else { //if we got nothing from local storage....
    window.location = '/';  //redirect us to the home page
}

const searchParam = new URLSearchParams(window.location.search);  // creating an new instance of the URLSearchParams object and passing it the query string (everything after the question mark in the url)
const nameToFind = searchParam.get('name'); // using the get method from the object we created above to get the value of the name property from the query string


if(nameToFind) {  // if there was a name parameter in our query string then run the following code 
    for(let index = 0; index < applicants.length; index++){
        let currentApplicant = applicants[index]; // setting currentApplicant to be what ever applicant is at the current index position in the applicants array
    
        if(currentApplicant.name === nameToFind) {   //checking currentApplicant against the name from the query string & if they match run the code below
            applicant = currentApplicant;    // reassiging the value of applicant
            break; //exit loop once it finds the match, no need to keep looping
        }
    }
}
else { //if there is no name in the query string above, run this code
    applicant = applicants[applicants.length - 1]; //setting applicant to be the one most recently added to the array
}

name.textContent = applicant.name; //LEFT OF EQUAL SIGN: setting text content of name which we defined on line one  
// RIGHT OF EQUAL SIGN: grabbing the value of the name property off of the applicant object (which applicant is defined above)
position.textContent = applicant.position;
peanuts.textContent = applicant.allergy;
tigerNames.textContent = applicant.tigerNames.join(' ');