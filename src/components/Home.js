import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Installations from './Installations'
import Procurement from './Procurement'

// This is the home page, and holds the rendering for each team. 
// As this loads first, I used it as an opportunity to avoid multiple fetch requests or potential infinite rerender loops. 
// As such, the appropriate data for the team is pulled from the API and passed to the correct team component. 
// Erros in getting the data from the API are logged in the console.

export default function Home(props) {
  const team = props.team
  const dataRequired = (team === 'procurement') ? 'Tools' : 'Ledger'
  const [tools, updateTools] = useState([])
  const [ledger, updateLedger] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`https://api.airtable.com/v0/app5MyMq1VN6a1Zvu/${dataRequired}?`, { headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}` } })
        if (team === 'procurement') {
          updateTools(data.records)

        } else {
          updateLedger(data.records)

        }
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  if (team === 'installations') {
    return <div>
      <Installations ledger={ledger} />
    </div>
  } else {
    return <div>
      <Procurement tools={tools} />
    </div>
  }


}