import LinkButton from "./LinkButton";

const LinksContainer  = ()=>{
    const links = [
        {
            url: 'https://www.youtube.com/@iamabhirupdatta/featured',
            displayName: 'Youtube channel'
        },
        {
            url: 'https://twitter.com/iamabhirupdatta',
            displayName: 'Twitter'
        },
        {
            url: 'https://www.linkedin.com/in/abhirup-datta-a27036216/',
            displayName: 'Linkedin'
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