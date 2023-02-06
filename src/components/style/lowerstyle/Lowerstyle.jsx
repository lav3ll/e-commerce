import './lowerstyle.css'
import IMG1 from '../../../assets/lowerstyle-image1.jpg'
import IMG2 from '../../../assets/lowerstyle-image2.jpg'


const data =[
    {
        image:IMG1,
        text:'NEUTRAL DRIP',
        subText:'low-key steez',

    },
    {
        image:IMG2,
        text:'NIKE JORDAN',
        subText:'goat style',
    }
];
const lowerstyle = () => {
  return (
    <section className="lowerstyle__container">
        
        {data.map(({image,text,subText})=>{
            return(
            <div className="lowerstyle__content">
                    <div className="lowerstyle__image">
                    <img src={image} alt="#" />
            </div>
            <h2>{text}</h2>
            <small>{subText}</small>
            <div className="lowerstyle__btn">
                SHOP NOW
            </div>
        </div>
            )
        })}
    </section>
  )
}

export default lowerstyle