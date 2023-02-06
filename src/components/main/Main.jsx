import './main.css'
import IMG1 from '../../assets/main-img1.webp'
import IMG2 from '../../assets/main-img2.webp'
import IMG3 from '../../assets/main-img3.webp'
import IMG4 from '../../assets/main-img4.webp'
import IMG5 from '../../assets/main-img5.webp'
import IMG6 from '../../assets/main-img6.webp'


const data = [
  {
    title:'Styles under £15',
    image:IMG1,
  },
  {
  title:'Coats and Jackets',
  image:IMG2,
},
{
  title:'Hoodies & Sweats',
  image:IMG3,
},
{
  title:'SNEAKS & MORE',
  image:IMG4,
},
{
  title:'T-Shirts',
  image:IMG5,
},
{
  title:'Tailoring',
  image:IMG6,
}
];
const Main = () => {
  return (
    <div className="main__container">
    <div id="banner">
        <label id="women">WOMEN</label>
        <div id="bannerTxt">New here? Get 15% off with code HiFriend</div>
        <label id="men">MEN</label>
      </div>
      <div id="sub-banner">FINAL REDUCTIONS! UP TO 80% OFF ALREADY</div>

    
    <div className="main__body">
    {data.map(({title,image})=>{
      return(
      <article>
      <div className="main__image">
        <img src={image} alt="cap" />
      </div>
      <div className="main__product-title">{title}</div>
    </article>)
    })}
    </div>

    </div>
  )
}

export default Main