import React from 'react'
import { useState } from 'react'

export default function TeamModal() {
  const [team, updateTeam] = useState('')

  function changeTeam(event){
    updateTeam(event.target.value)
  }
  function saveTeam() {
    localStorage.setItem('team', team)
    location.reload()
  }

  if (localStorage.getItem('team')) {
    return <div className="modal">
    </div>
  } else {
    return <div className="modal is-active">
      <div className="modal-background"></div>
      <dic className="modal-content">
        <div className="box">
          <p className="titel">Welcome to Vorboss Tools Microsight</p>
          <p>Please select which team you are from - if you wish to change teams later don't worry, this is possible from the navbar!</p>
          <div className="columns">
            <div className="column is-half has-text-centered">
              <div className="select"><select onChange={changeTeam} value={team}>
                <option aria-label="Procurement" value="procurement">The Procurement Team</option>
                <option aria-label="Installations" value="installations">The Installations Team</option>
              </select></div></div>
            <div className="column is-half has-text-centered">
              <button className="button" onClick={saveTeam}>Continue</button></div>
          </div>
        </div>
      </dic>
    </div>
  }
}