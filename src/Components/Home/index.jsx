import React from 'react'
import { Link } from 'react-router-dom'

export function Home () {
  const links = getAvailableLinks()
  return (
    <div className="FlexDirectionCol">
      {
        links.map((element) => <Link to={element.to}>{element.label}</Link>)
      }
    </div>
  )
}

function getAvailableLinks () {
  return [
    {
      to: '/',
      label: 'Home'
    }, {
      to: '/leaflet',
      label: 'Map'
    }
  ]
}
