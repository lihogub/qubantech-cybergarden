import React from 'react';
import Header from "../components/Header";

const axios = require('axios');
let temp;

// Make a request for a user with a given ID
axios.get({
    method: 'get',
    url: 'http://192.168.1.152:8080/user/2'
})
    .then((response) => {
        // handle success
        temp = response;
    })
    .catch((error) => {
        console.log(error);
    })
    .then(() => {});

export default ()=>{
    return(<div>
        {temp}
    </div>);
}