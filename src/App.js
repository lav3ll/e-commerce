import React, {useState} from "react";
import HeadingButton from "./components/HeadingButton";
import NavButton from "./components/NavButton";
import SearchResult from "./components/SearchResult";
import SearchModal from "./components/SearchModal";
import { RiSearch2Line} from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import {useRef} from 'react';
import Backdrop from "./components/Backdrop";

function App() {
  
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
    <div className="App">
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
      <div id="banner">
        <label id="women">WOMEN</label>
        <div id="bannerTxt">New here? Get 15% off with code HiFriend</div>
        <label id="men">MEN</label>
      </div>
      <div id="sub-banner">RANDOM INFORMATION</div>
      

    </div>
  );
}

export default App;
