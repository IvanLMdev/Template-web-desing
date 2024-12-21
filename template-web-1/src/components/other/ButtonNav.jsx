import '../../styles/button-nav.css'

const ButtonNav = ({hraf,text}) => {
  return (
    <li>
    <a href={hraf} className="anchor">
      <button type="button" className="btn-nav">
        <span>{text}</span>
        <svg>
          <rect x="0px" y="0px" fill="none"></rect>
        </svg>
      </button>
    </a>
  </li>
  
  )
}

export default ButtonNav