import './App.css';
import {Routes, Route} from 'react-router-dom';
import { PageOne } from './pages/PageOne';
import { PageTwo } from './pages/PageTwo';
import { PageThree } from './pages/PageThree';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/page-one" element={<PageOne/>} />
        <Route path="/page-two" element={<PageTwo/>} />
        <Route path="/page-three" element={<PageThree/>} />
      </Routes>

    </div>
  );
}

export default App;
