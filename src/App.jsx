import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";
import { ToastContainer } from 'react-toastify';



const App = () => {
  return (
    <div>
      <ToastContainer position='top-center' />
      <ThemeToggle />
      <SearchForm />
      <Gallery />

    </div>
  )
};
export default App;
