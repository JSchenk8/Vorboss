import React from 'react'

export default function Procurement(props) {
  const tools = props.tools




  

  return <section className="hero is-fullheight-with-navbar procurement-image procurement">
    <div className="hero-body">
      <div className="container">
        <div className="columns has-background-white box">
          {tools.map((tool, index) => {
            const orderRequired = (tool.fields['Count (Ledger)'] < tool.fields['Restock Count']) ? true : false
            return <div key={index} className="column">
              <p className="is-size-4-widescreen is-size-5-mobile has-text-info">{tool.fields['Tool Name']}</p>
              <p className="has-text-link">Description:</p><p> {tool.fields['Description']}</p>
              <p className="has-text-link">In Stock:</p><p> {tool.fields['Count (Ledger)']}</p>
              <p className="has-text-link">Restock Count:</p><p> {tool.fields['Restock Count']}</p>
              <button className="button"><a href={tool.fields['Procurement Link']} target='blank' className={orderRequired ? 'has-text-danger' : 'has-text-link'}>Reorder Tool</a></button>
            </div>
          })}
        </div>
      </div>
    </div>
  </section>

}