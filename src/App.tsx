import './App.css'
import MyPhoto from './assets/my-photo.jpeg';
import LinksContainer from './components/LinksContainer';

function App() {

  return (
    <main  className='main-content'>
      <img src={MyPhoto}  className='my-img' alt="Photo of Me"/>
      <LinksContainer />
    </main>
  )
}

export default App
