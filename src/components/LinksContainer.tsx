import { Link } from "../types/Link";
import LinkButton from "./LinkButton";

const LinksContainer  = ()=>{
    const links:Link[] = [
        {
            url: 'https://www.youtube.com/@iamabhirupdatta/featured',
            displayName: 'Youtube channel',
            smc:'yt'
        },
        {
            url: 'https://twitter.com/iamabhirupdatta',
            displayName: 'Twitter',
            smc:'tw'
        },
        {
            url: 'https://www.linkedin.com/in/abhirup-datta-a27036216/',
            displayName: 'Linkedin',
            smc:'lk',
        },
    ]
   return (
    <section className="link-container">
        {
            links.map((link)=> <LinkButton key={link.url} link={link}/>)
        }
    </section>
   )
}

export default LinksContainer;