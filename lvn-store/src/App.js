import './App.css';
import Header from './header';
import Banner from "./banner";
import Products from './pro';
function App() {
  return (
    <div className="App">
      <div className='pre-header'>
        <div className='container'>
        </div>
      </div>
      <Banner />
      <Header />
      <Products/>
    </div>
  );
}

export default App;
