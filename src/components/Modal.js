import React,{useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "./image-unavailable-icon-260nw-1157415967.webp";
import loadstyle from "../loader.module.css";

const Moodal = (props) =>{
  
  const poster = props.movie.poster_path==null ? Image : `https://image.tmdb.org/t/p/w185${props.movie.poster_path}`;

    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-dark" style={{color:"white"}}>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.movie.original_title}
          {props.movie.release_date==="" || props.movie.release_date===null ? null:(
          <p>Release Date : {props.movie.release_date}</p>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-dark">
      <Container>
        {props.loading ? (
          <div className={loadstyle.loader}></div>
        ) : (
          <Row className="show-grid">
            <Col xs={12} sm={12} md={6} lg={4}>
              <img src={poster} style={{display:"block", margin:"1rem auto"}}></img>
            </Col>
            <Col xs={12} sm={12} md={6} lg={8}>
              <p style={{color:"white"}}>{props.movie.overview}</p>
              <p style={{color:"white"}}> {props.things.genres.length>0? "Genres : " : null }
                {props.things.genres.map((item,index)=>{
                  if(index<props.things.genres.length-1)
                  return(` ${item.name},`);
                  else
                  return(` ${item.name}`);
                })}
              </p>
            </Col>
          </Row>
        ) }
        </Container>
      </Modal.Body>
      <Modal.Footer className="bg-dark">
        {props.loading ? (null) : props.things.imdburl===null ? null : (
        <Button href={props.things.imdburl}>Go to IMDB Page</Button>
        )}
        
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
}

export default Moodal;