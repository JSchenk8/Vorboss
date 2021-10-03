import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Installations from './Installations'
import Procurement from './Procurement'


export default function Home(props) {
  const team = props.team
  const dataRequired = (team === 'procurement') ? 'Tools' : 'Ledger'
  const [tools, updateTools] = useState([])
  const [ledger, updateLedger] = useState([])
  const referenceObject = {}

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
      <Installations ledger={ledger} references={referenceObject}/>
    </div>
  } else {
    return <div>
      <Procurement tools={tools} references={referenceObject}/>
    </div>
  }


}