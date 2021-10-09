# Launch_Watch

I love to watch rocket launches. You're going to help me find some content.

Given a launch location and a date range, your job is to use the open
Launch Library API documented at
[https://lldev.thespacedevs.com/2.2.0/swagger](https://lldev.thespacedevs.com/2.2.0/swagger)
to search for launches.

Launch Library kindly accumulates the information for us, but it does not
guarantee the lifetime of links, so we need to make sure we're not looking at
broken links when you refer the results to me.

Build me a CLI tool that returns the crewed, successful launch with the most
videos from the following search criteria: (HINT: you must use detailed mode)

* launch location
* start date
* end date

Bonus Points: Also create a [NEXT.js](https://nextjs.org/) application with a
form containing inputs for search parameters, that displays a list of launch
results with playable videos.

Requirements: You may use any node libraries to complete this task. The only
requirement is that I be able to `npm install` against your source and run `npm start`.
Please submit your source as a compressed folder (tar/zip/gz/bzip2) named like
`{{YourNameHere}}-{{NodeVersion}}.zip` (JohnSmith-14.18.0.zip).

This task is also not completely pass/fail. If you have trouble finishing during the
time allotted, just submit what you have achieved thus far.

Additionally, please complete as much as you can in the style you would write
production code in. Name variables clearly if that is something you value, or write tests
if that is something you would do in a professional setting. Do whatever you would do as
if this was given to you as something that would have to be run in production and
maintained by others who are not you.