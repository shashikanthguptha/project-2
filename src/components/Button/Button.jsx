import "./Button.css"


const Button = (props) => {
  const {isOutline, icon, text} = props;
  let btnclassname=isOutline?"outline-btn":"primary-btn"
  return (
    <button className={btnclassname}>{icon} {text}</button>
  )
}

export default Button