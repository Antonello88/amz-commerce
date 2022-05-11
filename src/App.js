import { useState } from 'react';
import './App.css';
import { Header } from "./components/header"
import { Sidebar } from "./components/sidebar"
import { Wrapper } from "./components/wrapper"


function App() {
    
  const [category, setCategory] = useState("");

  const catSelection = (value) => {
        console.log(value);
        setCategory(value);

  };




  return (
    <main> 
      <Header />

      <div className='flex'>
      <Sidebar catSelection={catSelection}/>
      <Wrapper category={category}/>
      </div>
  
    </main>
  );
}

export default App;
