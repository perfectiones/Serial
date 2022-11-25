import { Routes , Route } from 'react-router-dom';
import './css/null.css'
import './css/bootstrap.min.css';
import MainPage from './components/MainPage';
import Actors from './pages/Actors';
import './scss/actors/ActorsList.scss';



function App() {
  
  return (
      <>

        <Routes>
          <Route path='/' element={ <MainPage /> } />
          <Route path='/Actors' element={ <Actors /> } />
        </Routes>

      </>
      
      

  );
  
}

export default App;



