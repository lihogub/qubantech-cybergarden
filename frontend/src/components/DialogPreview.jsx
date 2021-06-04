import React from 'react';
import icon from "../icon/plus_dialogs.svg";
import backendInterface from "./../backendInterface";
import {Link} from "react-router-dom";
import Moment from 'react-moment';

class DialogPreview extends React.Component{

    componentDidMount(){

        backendInterface.axios_.get(backendInterface.session_url + '/chat/'
            + backendInterface.client_user_id + '/'
            + this.props.chatID)
            .then((response) => {
                const response_data = response['data'];

                this.setState({currentChat: response_data});
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {});
    }

    render(){
        return (
            <Link to={"/chat"}>
            {/*<Link to={"/dialogs/" + this.props.chatID}>*/}
                <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4 my-2">
                    <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                        <a href="#" className="block relative">
                            <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                 className="mx-auto object-cover rounded-lg h-10 w-10 md:h-17 md:w-17 -m-2"/>
                        </a>
                    </div>

                    <div className="flex-1 pl-1 md:mr-16">
                        <div className="font-medium dark:text-gray-200">
                            {this.state && this.state.currentChat[this.state.currentChat.length - 1].author}
                        </div>
                        <div className="text-gray-400 dark:text-white  text-sm">
                            {this.state && this.state.currentChat[this.state.currentChat.length - 1].text}
                        </div>
                    </div>
                    <div className="text-gray-600 dark:text-gray-200 text-xs justify-end">
                        <Moment toNow>
                            {this.state && this.state.currentChat[this.state.currentChat.length - 1].timestamp}
                        </Moment>
                    </div>
                    <button className="w-12 text-right flex justify-end">
                        <svg width="12" fill="currentColor" height="12"
                             className="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500"
                             viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                            </path>
                        </svg>
                    </button>
                </div>
            </Link>
        );
    }
}

export default DialogPreview;