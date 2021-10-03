Hi Aaron, 

Please find enclosed my technical test - a react app to display for procurement and installation teams the tool status' and ledgers, built using the Airtable API. 

I wanted to keep things fairly simple, and just show you how I write React.

## To run the app: 

To run the app please run the following commands:

npm install
npm run serve

This will open it on localhost:8000. 
It is a single page app with only one URL, localhost:8000/

## Choices

I chose to separate the two teams, using a modal and local storage. This way, when somebody opens the microsight for the first time they have the choice to say which team they're working in. However, I gave them the choice to change team in the navbar so that they don't have to manually clear local storage.

In order to speed the process, I used the Bulma framework for styling - although I hold no particular flame to it, I am simply very familiar with it and I find for displaying data in responsive columns it is particularly useful. 

This also led me to use SCSS so that I could change the default options from the bulma framework. 

I also chose to use the API as a RESTful api using axios fetch requests. 

Using the API docs, I had a quick go to create an Airtable object/base, as below:

```
  const Airtable = require('airtable')
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_API_BASE)
    const tools = []
    useEffect(() => {
      async function getRecords() {
        base('Tools').select({
          view: 'Grid view'
        }).eachPage(function page(records, fetchNextPage) {
          records.forEach(function(record) {
            console.log('Retrieved', record.get('Tool Name'))
            console.log(records)
            tools.push(record)
          })
          fetchNextPage()
        }, function done(err) {
          if (err) { 
            console.error(err)
          }
        })
        
      }
      getRecords()
      
    }, []) 
  ```

  However, I couldn't get it to do exactly what I wanted and didn't want to go too far down the rabbit-hole of teaching myself Airtable the incorrect way. 

  As such, I reverted to simply using a fetch request to get JSON out of the table. This meant I didn't spend too much time learning a new tech, but instead could dedicate the time to showing you my react skills. 

  I put my API key and the base name in a .env file, so if you are sharing this on Github you will have to enter your own keys. But if from a zipped file then they should be present.

  Finally, I chose to show as little data as possible per page, hopefully focusing on what the user needs. Obviously this could change, and would need updating.

## Assumptions 

I have done a little bit of responsive coding, but have made the assumption that the user will be viewing it on desktop. 

The biggest assumption I have made is that the tools and the fields stay the same in the airtable - and as such, have hard coded the tool names into the installations page. 

I briefly toyed with the idea of doing an additional fetch request to the Tools part of the airtable and using it to build a reference table between IDs and Tool names, but at this stage I felt I was taking too long on the task, and perhaps missing the point of simply building a rapid react prototype. 

## Future Improvements

The first improvement I would make is to take the hard coding out, and dynamically create all of my data inside the app. This way anybody can alter the airtable and the react app won't break. 

Ideally I would make it more mobile friendly, so warehouse users can look for lost/available tools from a handheld device. 

Error handling is currently done in the console of the browser - I would ideally improve this to give more accurate error handling and the potential for a ticket to be raised if a user generates an error. 

Finally, some proper design and a more thought out UX would be nice, but form follows function.