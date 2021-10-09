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
}];

//once the questions are asked, insert the answers in this & fetch the information from the API https://lldev.thespacedevs.com/2.2.0/launch/?is_crewed=true&window_start=2020-10-31T03:00:21Z&window_end=2021-10-31T03:00:21Z 

async function retrieveURLParams(answers) {
    try {
        await fetch(`${launchpath}?is_crewed=true&window_start=${answers.start_date}T00:00:00.000Z&window_end=${answers.end_date}T00:00:00.000Z`, 
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
              }
        }).then((response) => {
            console.log(response)
        })

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