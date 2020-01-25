import React, {useState} from "react";
import {Form, FormControl, Button} from "react-bootstrap";

const Input = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearchInputChanges = (e) => {
      setSearchValue(e.target.value);
    }
  
    const resetInputField = () => {
      setSearchValue("")
    }
  
    const callSearchFunction = (e) => {
      e.preventDefault();
      props.search(searchValue);
      resetInputField();
    }
    return(
        <div id="searchDiv" className="bg-dark">
            <h1 style={{textAlign:"center", marginBottom:"20px"}}>Search for any movie</h1>
            <div className="input-group mb-3" style={{width:"100%"}}>
                  <Form inline style={{width:"100%"}} onSubmit={callSearchFunction}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearchInputChanges} style={{width:"100%"}}/>
                </Form>
            </div>
	    </div>
    );
};

export default Input;
