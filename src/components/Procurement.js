import axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Procurement() {

  const [tools, updateTools] = useState([])
  const [loaded, updateLoaded] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get('https://api.airtable.com/v0/app5MyMq1VN6a1Zvu/Tools?', { headers: { 'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}` } })
        console.log(data)
        console.log('It worked!')
        updateTools(data.records)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])






  return <div>{loaded && <section className="hero is-fullheight is-danger procurement">
    <div className="hero-body">
      {tools.map((tool, index) => {
        return <div key={index}>
          <p >{tool.id}</p>
        </div>
      })}
      
    </div>
  </section>}</div>
}