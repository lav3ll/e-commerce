import React from 'react'
import './header.css'
import HeadingButton from "./HeadingButton";
import SearchResult from "../SearchResult";
import SearchModal from "../SearchModal";
import { RiSearch2Line} from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import {useRef} from 'react';
import Backdrop from '../backdrop/Backdrop';
import Navigation from "../nav/Navigation";
import { useState } from 'react';




const Header = () => {
    const [ModalIsOpen, setModalIsOpen] = useState(false)
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false)
  const inputRef = useRef(null);


  function openSearchModal(){
    setSearchModalIsOpen(true);
  }

  function closeSearchModal(){
    searchModalIsOpen(false);
  }
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '93ed9305c7msh8bee1838f559b6bp1e62efjsnaa270facb818',
      'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
    }
  }

  fetch('https://asos2.p.rapidapi.com/categories/list?country=UK&lang=en-US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


  
    async function getCategories (searchTerm){
  const response = await fetch(`https://asos2.p.rapidapi.com/v2/auto-complete?q=${inputRef.current.value}&store=COM&country=GB&currency=GBP&lang=en-US`, options)
  const data = await response.json();
  showCategories(data.suggestionGroups[0].suggestions)
    }
  
    function showCategories(categories){
      const searchMdl = document.getElementById('searchModal');
    
  
      categories.forEach((category)=>{
        const {searchTerm} = category;
        const searchEl = document.createElement('div');
        searchEl.classList.add('searchResult');
        searchEl.innerHTML = `
        <p>${searchTerm}</p>
        `;
        searchMdl.appendChild(searchEl);
      })
    }
  
    function handleKeyPress(e){
      if(e.key === 'Enter'){
        openSearchModal()
        getCategories(inputRef.current.value)
      }else {
      
    }}
  return (
    <header className="App-header">
        <div id="sexs">
        <HeadingButton text ={'Man'}  />
        <HeadingButton text ={'Woman'} />
        </div>
        <div className="search">
            <input className = 'searchBar' type="text" ref={inputRef} placeholder="Search for items here" onKeyPress={(e) =>handleKeyPress(e)}  />
            {searchModalIsOpen? <SearchModal /> :null}
            
            
        </div>
        <RiSearch2Line className="RiSearch2Line"/>
        <FaHeart className="FaHeart"/>
        <FaShoppingBag className="FaShoppingBag" />
      </header>
  )
}

export default Header