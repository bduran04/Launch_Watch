const inquirer = require('inquirer');
const launchpath = 'https://lldev.thespacedevs.com/2.2.0/launch/';

//make the API call with the start & end date
//use a package to format the data for the dates
//get the results & process them
// map over the array of objects & guarantee whether something is not a broken link
//maybe there is a package that
//want to populates the list of results

//create an if statement indicating that if results.status.name === Launch Successful then useState and provide the results of the 

const questions = [{
    type: 'input',
    name: 'first_date',
    message: 'What is the initial date of the launch?'
}, {
    type: 'input',
    name: 'last_date',
    message: 'What is the last date of the launch?'
}];

//format the date into 2021-10-31T03:00:21Z 
async function formatDate(data) {
   await data.format('MMMM Do YYYY, h:mm:ss a')
}
//once the questions are asked, insert the answers in this & fetch the information from the API https://lldev.thespacedevs.com/2.2.0/launch/?is_crewed=true&window_start=2020-10-31T03:00:21Z&window_end=2021-10-31T03:00:21Z 

async function retrieveURLParams(data) {
    await fetch(`${launchpath}?is_crewed=true&window_start=${first_date}&window_end=${last_date}`)
        .then(function (response) { return response.json() })
}

function processApp() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            formatDate();
            console.log(answers)
        });
}

processApp();


