import React from 'react';
import './App.css';
import { Header } from './components/1header';
import { Foto } from './components/2foto';
import { About} from './components/3about';
import { Xp } from './components/4xp';
import { Estu } from './components/5estudos';
// import { Skills } from './components/7skills';
import { Projetos } from './components/6projetos';
import { Contato } from './components/9contato';



function App() {
  return (
   <>
      <Header />
      <Foto />
      <About />
      <Xp />
      <Estu /> 
        {/* <Skills />  */}
      <Projetos />
      <Contato />
   </>
  );
}

export default App;
