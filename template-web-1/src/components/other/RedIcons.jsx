import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import '../../styles/red-icons.css'
const RedIcons = ({size}) => {
  return (
    <ul className='icon-red-cont'>
          <i>
            <FaFacebookSquare size={size}/>
          </i>
          <i>
            <FaInstagramSquare size={size} />
          </i>
          <i>
            <FaSquareXTwitter size={size}/>
          </i>
          <i>
            <FaSquareWhatsapp size={size}/>
          </i>
    </ul>
  )
}

export default RedIcons