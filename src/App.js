// import './App.css';
import { MovieFilterProvider } from './contexts/MovieFilterContext';
import MovieSerachPage from './pages/MovieSearchPage';

function App() {
  return (
    <MovieFilterProvider>
      <MovieSerachPage />
    </MovieFilterProvider>
  );
}

export default App;
