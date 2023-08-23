import './App.css'
import MyPhoto from './assets/my-photo.jpeg';
import LinksContainer from './components/LinksContainer';

function App() {

  return (
    <main  className='main-content'>
      <h1 className='name'>Abhirup Datta</h1>
      <img src={MyPhoto}  className='my-img' alt="Photo of Me"/>
      <p className='about'>
        Web and Mobile app developer specifically in React-Native.
        <br />
        Previously worked at <a href="https://letstransport.in/" className='lt-link'>Letstransport</a>
      </p>
      <LinksContainer />
    </main>
  )
}

export default App
