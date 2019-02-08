const jsonString = window.localStorage.getItem('applicants'); //reaching in to local storage and getting all the applicants that are saved there
let applicants = [];  // creating a new variable globally so we can use it later


if(jsonString) { //if there were applicants in the local storage, run this code
    applicants = JSON.parse(jsonString);  // reassign applicants to be the parsed version of what we got from local storage
}

const tbody = document.getElementById('applicants'); // grabbing the element in the html with the id of 'applicants' so we can use it later

for(let index = 0; index < applicants.length; index++) { //looping through our array of applicants to create a table row for each one
    let applicant = applicants[index]; // applicant gets re-assigned every time we run the loop
  
    const tr = document.createElement('tr');  //creating a table row
    tbody.appendChild(tr); //appending the table row to the table body

    const tdName = document.createElement('td');  //creating a <td> element
    const link = document.createElement('a'); //creating a link element: <a></a>
    tdName.appendChild(link); //appending that link element to our name cell (tdName)
    link.textContent = applicant.name; //adding text content to our link element
    link.href = 'applicant-detail.html?name=' + encodeURIComponent(applicant.name); 
    //above we are setting the href attribute on our link to the applicant-detail.html page  
    // AND  we are adding a query string with a key of 'name' and a value of the applicants name 
    // AND we are encoding the name to escape invalid characters
    tr.appendChild(tdName);  //appending our <td> element to our table row

    const tdPosition = document.createElement('td');
    tdPosition.textContent = applicant.position;
    tr.appendChild(tdPosition);

    const tdAllergy = document.createElement('td');
    tdAllergy.textContent = applicant.allergy;
    tr.appendChild(tdAllergy);

    const tdTigerNames = document.createElement('td');
    tdTigerNames.textContent = applicant.tigerNames.join(', ');
    tr.appendChild(tdTigerNames);


}