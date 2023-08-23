import { Link } from "../types/Link"

type Props = {
  link: Link;    
}
const LinkButton = ({link}:Props)=>{
    return (
      <a href={link.url} target="_blank">
        <button type="button" className={`link-button ${link.displayName}`}>
         {link.displayName}
        </button>
        </a>
    )
}

export default LinkButton;