import Pagination from './components/Pagination';
import NavBar from './components/NavBar';
import Cards from './components/Cards'
import Selectors from './components/Selectors';

function App() {
  return (
      <div >
        <NavBar />
        <Selectors/>
        <Cards/>
        <Pagination />
      </div>
  );
}

export default App;
