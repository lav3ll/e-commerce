import './main2.css'
import IMG1 from '../../assets/main2-image1.jpg'
import IMG2 from '../../assets/main2-image2.jpg'
import IMG3 from '../../assets/main2-image3.jpg'
import IMG4 from '../../assets/main2-image4.jpg'

const main2 = () => {
  return (
    <section className='main2__container'>
        <div className="main2__image">
            <img src={IMG1} alt="#" />
            <div className="main2__text">
                <h3>OUTWEAR</h3>
                <small>Keep it under wraps</small>
            </div>
        </div>
        <div className="main2__image">
            <img src={IMG2} alt="#" />
            <div className="main2__text">
                <h3>FRED PERRY</h3>
                <small>Just dropped</small>
            </div>
        </div>
        <div className="main2__image">
            <img src={IMG3} alt="#" />
            <div className="main2__text">
                <h3>TOP MAN</h3>
                <small>Top fits</small>
            </div>
        </div>
        <div className="main2__image">
            <img src={IMG4} alt="#" />
            <div className="main2__text">
                <h3>V-DAY GOALS</h3>
                <small>Gifts they'll love</small>
            </div>
        </div>
    </section>
  )
}

export default main2