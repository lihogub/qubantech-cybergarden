import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import axios from "./../backendInterface";

let user_id = 1;

class Profile extends React.Component {

    componentDidMount() {

        axios.get('http://192.168.1.152:8080/user/' + user_id)
            .then((response) => {
                const response_data = response['data'];

                this.setState({profile: response_data});

                console.log(response_data);
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {});

    }

    render() {
        return(
            <div>
                {this.state && this.state.profile['firstname']}
            </div>
        );
    }
}

export default Profile;