import React, {useState, useEffect} from "react";
import Input from "./Input";
import Card from "./Card";
import loadstyle from "../loader.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const API_KEY = "21ae4e075ad23b2fddaf0870594cb704";
  const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=man`;

  useEffect(() => {
    setLoading(false);
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if(localStorage.getItem("document"))
        setMovies(JSON.parse(localStorage.getItem("document")).results);
        else
        setMovies(jsonResponse.results);
      })
      .catch(error => {
        setErrorMessage("Please check network connection");
      });
  }, []);

  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchValue}`)
    .then(response => response.json())
    .then(jsonResponse => {
      console.log(jsonResponse);
      if(jsonResponse.errors){
        setLoading(false);
        setErrorMessage("Search criteria not entered");  
      }else if(jsonResponse.results.length===0){
        setLoading(false);
        setErrorMessage("Movie not found");
      }else{
        setLoading(false);
        localStorage.setItem("document", JSON.stringify(jsonResponse));
        setMovies(jsonResponse.results);
      }
    })
    .catch(error => {
      setLoading(false);
      setErrorMessage("No network connection");
    });
  }
  
  // setMovies(JSON.parse(localStorage.getItem("document")));

  return (
    <>
    <Input search = {search}/>
    {loading && !errorMessage ? (
    <div className={loadstyle.loader}></div>
         ) : errorMessage ? (
          <div className="errorMessage" style={{color:"white", textAlign:"center", marginTop:"10rem"}}>
            <h1>Error : {errorMessage} :(</h1>
            </div>
        ) : (
          <div className="row" style={{color: "black"}}>
            <Card movies={movies}/>
          </div>
        )}
    </>
  );
}


export default App;
