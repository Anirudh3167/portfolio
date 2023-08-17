import { BrowserRouter,Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import Projects from './Projects/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
