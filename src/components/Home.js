import React from 'react'
import Installations from './Installations'
import Procurement from './Procurement'


export default function Home(props) {
  const team = props.team
  

  if (team === 'installations') {
    return <div>
      <Installations />
    </div>
  } else {
    return <div>
      <Procurement />
    </div>
  }


}