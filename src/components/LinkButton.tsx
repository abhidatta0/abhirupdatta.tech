import { Link } from "../types/Link"

type Props = {
  link: Link;    
}
const LinkButton = ({link}:Props)=>{
    return (
        <button type="button" className="link-button">
         {link.displayName}
        </button>
    )
}

export default LinkButton;