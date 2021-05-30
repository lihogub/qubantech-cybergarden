import React from 'react';
import Header from "../components/Header";
import Cloud from "../components/Cloud";
import icon from "../icon/three-dots.svg";
import icon2 from "../icon/right-arrow.svg";

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
                        <div className="flex justify-center mb-8">
                            <h1 className="pr-8 text-4xl font-semibold leading-normal text-gray-900 text-center pt-8">
                                Комната 318
                            </h1>
                            <button
                                className="transition ease-in duration-200 uppercase rounded-full focus:outline-none">
                                <img src={icon}
                                     className="w-12 h-12"
                                />
                            </button>
                        </div>
                        <div className="w-10/12">
                            <Cloud icon={'https://uxwing.com/wp-content/themes/uxwing/download/12-people-gesture/user-profile.png'} text={'Привет!'} name={'Иван Иванов'} username={'@ivan1223'}/>
                            <Cloud icon={'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png'} text={'Привеееет!!!'} name={'Мария Мариновна'} username={'@mashka'}/>
                            {/*<Cloud icon={'https://img.icons8.com/ios/452/user-female-circle.png'} text={'Всем привет!!'} name={'Саша Александровна'} username={'@alex777'}/>*/}

                        </div>
                        <div className="fixed flex bottom-0 w-11/12 mb-20 justify-center">
                            <label className="flex text-gray-700 w-10/12 mr-4" htmlFor="name">
                            <textarea
                                className="resize-none appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                id="message" placeholder="Введите сообщение" name="message" rows="2" cols="40">
                            </textarea>
                            </label>
                            <button type="button"
                                    className="flex my-auto mx-auto bg-gray-200 text-white w-2/12 transition ease-in duration-200 font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <img src={icon2}
                                     className="w-10 h-10 ml-3"
                                />
                            </button>
                        </div>

                    </div>
                </main>
            </div>
        )};
}

export default Chat;