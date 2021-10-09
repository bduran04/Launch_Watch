import inquirer from 'inquirer'
const launchpath = 'https://lldev.thespacedevs.com/2.2.0/launch/';
import fetch from 'node-fetch';

//get the results & process them
// map over the array of objects & guarantee whether something is not a broken link
//maybe there is a package that
//want to populates the list of results

//create an if statement indicating that if results.status.name === Launch Successful then useState and provide the results of the 

const questions = [{
    type: 'input',
    name: 'start_date',
    message: 'What is the initial date of the launch(format: YYYY-MM-Do)?'
}, {
    type: 'input',
    name: 'end_date',
    message: 'What is the last date of the launch(format: YYYY-MM-Do)?'
}, {
    type: 'input',
    name: 'location',
    message: 'What is the location of the launch?'
}];

//once the questions are asked, insert the answers in this & fetch the information from the API https://lldev.thespacedevs.com/2.2.0/launch/?window_start__gt=1961-05-05T00%3A00%3A00Z&window_end__gt=1961-05-05T00%3A00%3A00Z&is_crewed=true&search=USA

async function retrieveURLParams(answers) {
    try {
        await fetch(`${launchpath}?window_start__gt=${answers.start_date}T00%3A00%3A00Z&window_end__gt=${answers.end_date}T00%3A00%3A00Z&is_crewed=true&search=${answers.location}`,
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response) => response.json())
            .then(data => console.log(data))

    } catch (error) {
        console.error(error);
    }
}

function processApp() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            retrieveURLParams(answers)
            console.log(answers)
        });
}

processApp();