import React from 'react'
import { useState } from 'react'

export default function Installations(props) {
  const ledger = props.ledger
  const ledgerArray = []
  const references = {
    ['rec85jKOGeoeljtJH']: 'Hammer',
    ['recR9drr061SmTfbd']: 'Screws (1300pc)',
    ['recfIqw5O6afjscVw']: 'Screwdriver',
    ['reckDI7TK3aueI567']: 'Pliers',
    ['recveiaVjmDCBgLQs']: 'Nails (100pc)'
  }
  const available = {
    ['Hammer']: 0,
    ['Screws (1300pc)']: 0,
    ['Screwdriver']: 0,
    ['Pliers']: 0,
    ['Nails (100pc)']: 0
  }
  const assignedToEngineer = {
    ['Hammer']: 0,
    ['Screws (1300pc)']: 0,
    ['Screwdriver']: 0,
    ['Pliers']: 0,
    ['Nails (100pc)']: 0
  }
  const lost = {
    ['Hammer']: 0,
    ['Screws (1300pc)']: 0,
    ['Screwdriver']: 0,
    ['Pliers']: 0,
    ['Nails (100pc)']: 0
  }
  const [lostModal, updateLostModal] = useState(false)
  const [availableModal, updateAvailableModal] = useState(false)
  const [assignedModal, updateAssignedModal] = useState(false)

  ledger.map((item) => {
    const itemObject = {
      ['tool name']: references[item.fields['Tool Type'][0]],
      ['status']: item.fields['Status'],
      ['asset tag']: item.fields['Asset Tag']
    }
    ledgerArray.push(itemObject)
    if (item.fields['Status'] === 'Lost') {
      lost[references[item.fields['Tool Type'][0]]] += 1
    } else if (item.fields['Status'] === 'Available') {
      available[references[item.fields['Tool Type'][0]]] += 1
    } else {
      assignedToEngineer[references[item.fields['Tool Type'][0]]] += 1
    }
  })


  return <section className="hero is-fullheight-with-navbar installation-image home-image procurement">
    <div className="hero-body">
      <div className="container">
        <div className="columns has-background-white box">
          <div className="column has-text-danger">
            <p className="has-text-black is-size-4-widescreen is-size-5-mobile">Lost</p>
            <p>Hammers: {lost['Hammer']}</p>
            <p>Screws (1300pcs): {lost['Screws (1300pc)']}</p>
            <p>Screwdrivers: {lost['Screwdriver']}</p>
            <p>Pliers: {lost['Pliers']}</p>
            <p>Nails (100pc): {lost['Nails (100pc)']}</p>
            <button className="button has-text-danger mt-5" onClick={() => updateLostModal(true)}>Lost Tool Barcodes</button>
          </div>
          <div className="column has-text-info">
            <p className="has-text-black is-size-4-widescreen is-size-5-mobile">Available:</p>
            <p>Hammers: {available['Hammer']}</p>
            <p>Screws (1300pcs): {available['Screws (1300pc)']}</p>
            <p>Screwdrivers: {available['Screwdriver']}</p>
            <p>Pliers: {available['Pliers']}</p>
            <p>Nails (100pc): {available['Nails (100pc)']}</p>
            <button className="button has-text-info mt-5" onClick={() => updateAvailableModal(true)}>Available Tool Barcodes:</button>
          </div>
          <div className="column has-text-warning">
            <p className="has-text-black is-size-4-widescreen is-size-5-mobile">Assigned To Engineer:</p>
            <p>Hammers: {assignedToEngineer['Hammer']}</p>
            <p>Screws (1300pcs): {assignedToEngineer['Screws (1300pc)']}</p>
            <p>Screwdrivers: {assignedToEngineer['Screwdriver']}</p>
            <p>Pliers: {assignedToEngineer['Pliers']}</p>
            <p>Nails (100pc): {assignedToEngineer['Nails (100pc)']}</p>
            <button className="button has-text-warning mt-5" onClick={() => updateAssignedModal(true)}>Assigned Tool Barcodes:</button>
          </div>
        </div>
      </div>
    </div>
    {lostModal && <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          {ledgerArray.map((item, index) => {
            return (item['status'] === 'Lost') ?  <div key={index}>
              <p className="has-text-weight-bold">{item['tool name']}</p><p>{item['asset tag']['text']}</p>
            </div> : ''
          })}
        </div>
        <button className="button" aria-label="close" onClick={() => updateLostModal(false)}>Close</button>
      </div>
      
    </div>}
    {availableModal && <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          {ledgerArray.map((item, index) => {
            return (item['status'] === 'Available') ?  <div key={index}>
              <p className="has-text-weight-bold">{item['tool name']}</p><p>{item['asset tag']['text']}</p>
            </div> : ''
          })}
        </div>
        <button className="button" aria-label="close" onClick={() => updateAvailableModal(false)}>Close</button>
      </div>
      
    </div>}
    {assignedModal && <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          {ledgerArray.map((item, index) => {
            return (item['status'] === 'Assigned to Engineer') ?  <div key={index}>
              <p className="has-text-weight-bold">{item['tool name']}</p><p>{item['asset tag']['text']}</p>
            </div> : ''
          })}
        </div>
        <button className="button" aria-label="close" onClick={() => updateAssignedModal(false)}>Close</button>
      </div>
      
    </div>}
  </section>



}