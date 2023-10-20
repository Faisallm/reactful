import React from 'react'

const Header = () => {
  // a seperate css code block
  const HeaderStyle = {
    backgroundColor: 'medium brown',
    color: '#fff'
  }
  return (
    <header style={HeaderStyle}>
        <h1>Groceries List</h1>
    </header>
  )
}

export default Header;