import { Link } from "../types/Link";
import LinkButton from "./LinkButton";

const LinksContainer  = ()=>{
    const links:Link[] = [
        {
            url: 'https://www.youtube.com/@iamabhirupdatta/featured',
            displayName: 'Youtube channel',
            smc:'yt',
            isUrl: true,
        },
        {
            url: 'https://twitter.com/iamabhirupdatta',
            displayName: 'Twitter',
            smc:'tw',
            isUrl: true,
        },
        {
            url: 'https://www.linkedin.com/in/abhirup-datta-a27036216/',
            displayName: 'Linkedin',
            smc:'lk',
            isUrl: true,
        },
        {
            email: 'abhidatta146@gmail.com',
            displayName:'Contact',
            smc:'email',
            isUrl: false,
        },
    ]
   return (
    <section className="link-container">
        {
            links.map((link)=> <LinkButton key={link.smc} link={link}/>)
        }
    </section>
   )
}

export default LinksContainer;