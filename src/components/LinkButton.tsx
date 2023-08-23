import { Link } from "../types/Link"

type Props = {
  link: Link;    
}
const LinkButton = ({link}:Props)=>{
  const hasUrl = link.isUrl;
    return (
      <a href={hasUrl ? link.url : `mailto:${link.email}`} target="_blank">
        <button type="button" className={`link-button ${link.smc}`}>
         {link.displayName}
        </button>
        </a>
    )
}

export default LinkButton;