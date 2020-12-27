
import './App.css';
import Nav from './Nav';
import './Nav.css';
import Row from './Row';
import requests from './Requests';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
    <Nav/>
    <Banner/>
    <Row 
    isLargeRow
    tittle="NETFLIX ORIGINALS" 
    fetchUrl={requests.fetchNetflixOriginals}
    />
     <Row tittle="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row tittle="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
     <Row tittle="Documentaries" fetchUrl={requests.fetchDocumentaries}/>


     </div>
  );
}

export default App;
