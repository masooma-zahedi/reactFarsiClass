import './App.css';
import {nanoid} from 'nanoid';
import { Header } from './component/Header';
import { Main} from './component/Main';
import { Footer } from './component/Footer';
import { ChangeBg } from './component/classes/ChangeBg';

function App() {
  return (
    <>
    <Header/>
    {/* <ChangeBg /> */}
    <Main/>
    <Footer />
    </>
  );
}

export default App;
