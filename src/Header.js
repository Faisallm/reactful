import React from 'react'

const Header = ({ title }) => {
  
  return (
    <header >
        <h1>{title}</h1>
    </header>
  )
}


// default props value assuming they were not provided
// when the prop was called
Header.defaultProps = {
  title: "Default title",
}

export default Header;