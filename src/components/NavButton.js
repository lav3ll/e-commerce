import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";
const NavButton = ({text}) => {

const [modalIsOpen, setModalIsOpen] = useState(false)
//navigation[0].children[4].children[0].children[0].children

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '93ed9305c7msh8bee1838f559b6bp1e62efjsnaa270facb818',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
};


async function getNavCategories(){
  const response = await fetch('https://asos2.p.rapidapi.com/categories/list?country=UK&lang=en-US', options)
  const data = await response.json()
  showNavCategories(data.navigation[0].children[4].children[0].children[0].children)

}

function showNavCategories(salesCat){
  const modalEl = document.getElementById('modal');
  for(let x =0; x<salesCat.length;x++){
    
    

    const title = salesCat[x].content['title'] ;
  const navCatEl = document.createElement('div');
  navCatEl.classList.add('modalData')
  navCatEl.innerHTML=`${title}`;
  modalEl.appendChild(navCatEl);



}
}


function openModal (){
  setTimeout(() => {
    if(text === 'Sale'){
      getNavCategories()
     
    }
    setModalIsOpen(true);
  }, 300)
  
}

function closeModal (){
  console.log('out')
    setModalIsOpen(false);
}

  return (
  <>
  {modalIsOpen? <Modal  onMouseOut={closeModal}/>  : null}
  {modalIsOpen? <Backdrop onClick={closeModal} onMouseOver={closeModal}/>: null}
  <button className="nav-btn" onMouseOver={openModal} >{text}</button>
    

    
</>
    
  )
}

export default NavButton