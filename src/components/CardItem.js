import React,{useState} from "react";
import Modal from "./Modal";
import Image from "./unavailable-image.jpg";

const CardItem = (props) =>{
	const [showModal, setshowModal] = useState(false);
	const onClick = (e) =>{
		props.Fetchmoviedata(props.movie);
		setshowModal(true);
	}

	const poster = props.movie.poster_path==null ? Image : `https://image.tmdb.org/t/p/w342${props.movie.poster_path}`
    return(
		<>
        
			<div className="mt-3 card card_container bg-dark" style={{width: "17rem"}} onClick={onClick}>
  				<img src={poster} className="card-img-top"/>
  				<div className="card-body">
   					<h5 className="card-title" style={{color:"white"}}>{props.movie.original_title}</h5>
  				</div>
			</div>
			
	    
		<Modal
			movie={props.movie} 
			things={props.things}
			show={showModal}
			onHide={() => setshowModal(false)}
			loading={props.loading}
		></Modal>
		
		</>
    );
}

export default CardItem;