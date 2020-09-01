import React from "react";
import {useHistory} from "react-router-dom";

function redirect(props){
    const history = useHistory();
    history.push(props.path);
    return(<div></div>)
}

export default redirect;