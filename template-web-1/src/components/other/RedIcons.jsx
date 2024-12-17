import { FaFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import '../../styles/red-icons.css'
const RedIcons = ({size}) => {
  return (
    <ul className='icon-red-cont'>
          <i>
            <FaFacebook size={size}/>
          </i>
          <i>
            <FaInstagramSquare size={size} />
          </i>
          <i>
            <FaSquareXTwitter size={size}/>
          </i>
    </ul>
  )
}

export default RedIcons