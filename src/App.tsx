import './App.css';
import { Home } from './pages/index'
import { NavBar } from './components/index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
