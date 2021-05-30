import React from 'react';
import Header from "../components/Header";
import Cloud from "../components/Cloud";

const axios = require('axios');
let user_id = 2;

class Chat extends React.Component{


    componentDidMount() {

        axios.get('http://192.168.1.152:8080/chat/' + user_id + "/" + 1)
            .then((response) => {
                const response_data = response['data'];

                this.setState({chat: response_data});
                console.log(this.props.chat.map);
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {});
    }


    render() {
        return (
        <div>
            <main className="chat-page bg-gradient-to-b bg-gradient-to-b from-purple">
                <div
                    className="absolute z-0 top-0 w-full h-full bg-gradient-to-b bg-gradient-to-b from-purple ..."
                ></div>
                <div className="relative container mx-auto px-4 z-1 flex flex-col w-full ">

                    <h1 className="text-4xl font-semibold leading-normal text-gray-900 text-center pt-8 mb-8">
                        Chat names
                    </h1>
                    <div className="w-10/12">
                        {this.state && this.state.chat.map((message)=>{
                            <Cloud chat={message}/>
                        })}
                    </div>
                    <div className="fixed bottom-0 w-11/12 mb-8 justify-center">
                        <label className="text-gray-700" htmlFor="name">
                            <textarea
                                className="resize-none appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                id="message" placeholder="Enter message" name="message" rows="2" cols="40">
                            </textarea>
                        </label>
                    </div>
                </div>
            </main>
        </div>
        )};
}

export default Chat;