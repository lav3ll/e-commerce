const Backdrop = ({onClick, onMouseOver,onMouseOut}) => {

  return (
    <div className= "backdrop" onClick={onClick} onMouseOver={onMouseOver}></div>
  )
}

export default Backdrop