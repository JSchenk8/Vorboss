import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.png'

// This is a fairly simple navbar, it stays fixed at the top of the page, is transparent grey with the vorboss logo top left
// There is a drop down menu on the top right to let users change team - this changes to a burger menu on mobile

export default function Navbar() {

  const [mobNav, updateMobNav] = useState(false)


  function changeTeam(event) {
    localStorage.setItem('team', event.target.value)
    location.reload()
  }

  return <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation" id="nav-background">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <img src={logo} height="28"></img>
      </a>

      <a onClick={() => updateMobNav(!mobNav)} role="button" className={`navbar-burger ${mobNav ? 'is-active' : ''}`} >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbarBasicExample" className={`navbar-menu ${mobNav ? 'is-active' : ''}`}>
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <div className="navbar-dropdown">
            <hr className="navbar-divider" />
          </div>
        </div>
      </div>
      <div className="navbar-end ">
        <div className={`navbar-item ${mobNav ? 'is-flex is-flex-direction-row' : ''}`}>
          <div className="navbar-item select"><select onChange={changeTeam} defaultValue={'change'}>
            <option value="change">Change Team</option>
            <option aria-label="Procurement" value="procurement">The Procurement Team</option>
            <option aria-label="Installations" value="installations">The Installations Team</option>
          </select></div>
        </div>
      </div>
    </div>
  </nav >
}