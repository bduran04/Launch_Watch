import inquirer from 'inquirer';
import fetch from 'node-fetch';
const launchpath = 'https://lldev.thespacedevs.com/2.2.0/launch/';

//map over the results by processing individual result id's & ensure that status.name = launch successful 
//want to display name, window start, window end, description, all vidURLs.url
//want to populates the list of results

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

async function retrieveURLParams(answers) {
    try {
        await fetch(`${launchpath}?window_start__gt=${answers.start_date}T00%3A00%3A00Z&window_end__gt=${answers.end_date}T00%3A00%3A00Z&is_crewed=true&search=${answers.location}`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => response.json())
//refactor this code to ensure that the data is being processed correctly. So far the error that populates is that data.map is not a function. 
            .then((data) => {
                let results = data;

                results.map(result => {
                    return {
                        name: result.name,
                        window_start: result.window_start,
                        window_end: result.window_end,
                        description: result.description,
                        vidURLs: result.vidURLs
                    }
                })
                console.log(results);
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
        });
}

processApp();