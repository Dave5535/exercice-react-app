import React, { Component } from 'react'
import './header.css'

export default class HeaderClass extends Component {
  render() {
    return (
      <div>
        <nav className='navbar'>
<div className='logo'><h1>Logo</h1></div>
<ul className='items'>
  <div>Menu</div>
  <div>item 1</div>
  <div>item 2</div>
  <div>item 3</div>
</ul>

        </nav>
        </div>
    )
  }
}
