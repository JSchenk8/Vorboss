import React from 'react'

export default function Installation(props) {
  const ledger = props.ledger

  ledger.map((item, index) => {

  })
  // I hard coded the tools here - what I could do of course is all this data manipulation from two fetches. Where I fetch the id or asset tag of a tool and cross reference it with the tools table
  // to get the tool name. Then input this. This would give a dynamically changing table if you add or remove tools.
  const data = [{
    tool: 'Hammer',
    quantity: 0,
    lost: 0,
    assignedtoEngineer: 0,
    assetTag: ''

  },
  {
    tool: 'Nails (100pc)', 
    quantity: 0,
    lost: 0,
    assignedtoEngineer: 0,
    assetTag: ''
  },
  {
    tool: 'Pliers', 
    quantity: 0,
    lost: 0,
    assignedtoEngineer: 0,
    assetTag: ''
  },
  {
    tool: 'Screwdriver', 
    quantity: 0,
    lost: 0,
    assignedtoEngineer: 0,
    assetTag: ''
  },
  {
    tool: 'Screws 1300pc', 
    quantity: 0,
    lost: 0,
    assignedtoEngineer: 0,
    assetTag: ''
  }
  ]

  return <section className="hero is-fullheight-with-navbar home-image procurement">
    <div className="hero-body">
      <div className="container">
        <div className="columns has-background-white box">
          {ledger.map((tool, index) => {
            const orderRequired = (tool.fields['Count (Ledger)'] < tool.fields['Restock Count']) ? true : false
            return <div key={index} className="column">
              <p className="is-size-4-widescreen is-size-5-mobile has-text-primary">{tool.fields['Tool Name']}</p>
              <p className="has-text-link">Description:</p><p> {tool.fields['Description']}</p>
              <p className="has-text-link">In Stock:</p><p> {tool.fields['Count (Ledger)']}</p>
              <p className="has-text-link">Restock Count:</p><p> {tool.fields['Restock Count']}</p>
              <a href={tool.fields['Procurement Link']} target='blank' className={orderRequired ? 'has-text-danger' : 'has-text-link'}>Reorder Tool</a>
            </div>
          })}
        </div>
      </div>
    </div>
  </section>

}