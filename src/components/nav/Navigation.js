import React from 'react'
import NavButton from "./NavButton";
import './navigation.css'

const Navigation = () => {
  return (
    <div className="navBar">
        <NavButton text = {'Sale'} onMouseOver />
        <NavButton text = {'New in'}/>
        <NavButton text = {'Clothing'} />
        <NavButton text = {'Dresses'} />
        <NavButton text = {'Shoes'} />
        <NavButton text = {'Gifting'} />
        <NavButton text = {'Sportsware'} />
        <NavButton text = {'Accessories'} />
        <NavButton text = {'Winter'} />
        <NavButton text = {'Topshop'} />
        <NavButton text = {'Face & Body'} />
        <NavButton text = {'Brands'} />
        <NavButton text = {'Outlet'} />
        <NavButton text = {'Marketplace'} />
      </div>
  )
}

export default Navigation