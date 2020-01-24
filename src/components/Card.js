import React,{useState, useEffect} from "react";
import CardItem from "./CardItem";
import { Col } from "react-bootstrap";

const Card = ({movies}) => {
    const [things, setThings] = useState({imdburl:"", genres:[]});
    const [loading, setLoading] = useState(true);
    
    const Fetchmoviedata = movie =>{
        setLoading(true);
        const MOVIE_URL = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=21ae4e075ad23b2fddaf0870594cb704`;


            fetch(MOVIE_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                setLoading(false);
                console.log(jsonResponse);
                if(jsonResponse.imdb_id===null || jsonResponse.imdb_id==="")
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
            <Col xs={12} sm={12} md={6} lg={4} xl={3}>
            <CardItem Fetchmoviedata={Fetchmoviedata}
                      movie={movie}
                      things={things}
                      loading={loading}/>
            </Col>
        );
    })
}

export default Card;