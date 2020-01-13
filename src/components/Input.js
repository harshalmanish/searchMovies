import React, {useState} from "react";

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
            <div className="input-group mb-3">
                  {/* <from> */}
                  <input value={searchValue} 
                    type="text" 
                    className="form-control"
                    placeholder="Search" 
                    aria-label="Username" 
                    onChange={handleSearchInputChanges}   
                    onSubmit={callSearchFunction}               
                    aria-describedby="basic-addon1" id="movieInput"/>
                    <input type="button" value="Search" className="btn btn-primary" onClick={callSearchFunction}></input>
                  {/* </from> */}
            </div>
	    </div>
    );
};

export default Input;
