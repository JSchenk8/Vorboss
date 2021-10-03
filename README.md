

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


  I've hard coded in the tools in the ledger... obviously this isn't ideal, and if I wanted to spend a bit more time on it I'd fetch the 'Tools' data and create a data pool of IDs against names. 