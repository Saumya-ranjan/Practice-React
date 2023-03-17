import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return ( <><Navbar title ="BuildApp"/>
  <div className="container"><TextForm heading="Enter the Text"/></div>
</>
  );
}

export default App;
