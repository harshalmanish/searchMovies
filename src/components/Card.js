import React,{useState, useEffect} from "react";
import CardItem from "./CardItem";

const Card = ({movies}) => {
    const [things, setThings] = useState({imdburl:"", genres:[]});

    // useEffect(()=>{
    //     fetch(`https://api.themoviedb.org/3/movie/50839?api_key=21ae4e075ad23b2fddaf0870594cb704`)
    //     .then(response => response.json())
    //     .then(jsonResponse => {
    //         console.log(jsonResponse);
    //         if(jsonResponse.imdb_id===null)
    //         setThings({imdburl:null, genres:jsonResponse.genres})
    //         else
    //         setThings({imdburl:`https://www.imdb.com/title/${jsonResponse.imdb_id}`, genres:jsonResponse.genres});
    // })
    // },[])
    
    const Fetchmoviedata = movie =>{
        const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=21ae4e075ad23b2fddaf0870594cb704`;


        
            fetch(MOVIE_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                console.log(jsonResponse);
                if(jsonResponse.imdb_id===null)
                setThings({imdburl:null, genres:jsonResponse.genres})
                else
                setThings({imdburl:`https://www.imdb.com/title/${jsonResponse.imdb_id}`, genres:jsonResponse.genres});
            })
            .catch(error => {
                setThings({imdburl:null, genres:[]})
            })
        

    }
    
    return movies.map((movie) => {
        return(
            <CardItem Fetchmoviedata={Fetchmoviedata}
                      movie={movie}
                      things={things}/>
        );
    })
}

export default Card;