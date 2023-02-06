import './trending.css'

const data = [
    {
        category:"Men's Suits for Weddings",
    },
    {
        category:"Men's Cardigans",
    },
    {
        category:"3 Piece Suits",
    },
    {
        category:"Men's Hiking Boots",
    },
    {
        category:"Tuxedos",
    },
    {
        category:"Men's Chelsea Boots",
    },
    {   
    category:"Men's Harrington Jackets",
    },
    {
        category:"Men's Onesies",
    },
    {
        category:"Desert Boots",
    },
    {
        category:"Chukka Boots",
    },
    {
        category:"Men's Chinos",
    },
    {
        category:"Men's Trainer & Invisible socks",
    },
    {
        category:"Men's Denim Jackets",
    },
    {
        category:"Men's Wash Bags",
    },
    {
        category:"Men's Denim Shirts",
    },
    {
        category:"Men's Underwear",
    },
    {
        category:"Waistcoats",
    },
    {
        category:"Men's Designer Watches",
    },
    {
        category:"Men's Ripped Jeans",
    },
    {
        category:"Men's Baseball Caps",
    }
]

const Trending = () => {
  return (
    <section>
        <div className="trending__container">
        <div className="trending__brands">

        </div>
        <h3 className='trending__categories-title'>TOP MENS CATEGORIES</h3>
        <div className="trending__categories">
            
            {data.map(({category})=>{
                return(
                <small className='trending__categories-item'>{category}</small>
            )})
            }

        </div>
        <p>Chilly days ahead – time to layer up. Your one-stop destination for everything men’s fashion, trust ASOS to bring the goods. We’re talking chunky knits, jumpers and cardis in this season’s must-have colour palette, boxy overshirts for a smart-casj vibe, and *the* hottest throw-on jackets and structured coats (think puffers, camel wool dusters and classic trenches, to name a few). Brave the elements in pull-on leather Chelsea boots, rough 'n' ready lace-up worker styles and the perfect low-key sneaks. Finish off your cold-weather 'fits in cosy accessories, with ribbed fisherman beanies, wool-mix scarves and faux-leather gloves as standard. Biting temps playing havoc with your skin? We gotchu. Scroll Face + Body for soothing skincare from top brands like The Ordinary, Bulldog and REN for nourishing products guaranteed to give you back your glow. Winter, we're ready for ya</p>
        </div>
    </section>
  )
}

export default Trending