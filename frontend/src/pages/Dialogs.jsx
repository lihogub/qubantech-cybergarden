import React from 'react';
import Header from "../components/Header";
import itemDialog from "../components/itemDialog";
import icon from "../icon/plus_dialogs.svg";
import backendInterface from "./../backendInterface";

class Dialogs extends React.Component {
    componentDidMount() {

        backendInterface.axios_.get('http://192.168.1.152:8080/chat/' + backendInterface.user_id)
            .then((response) => {
                const response_data = response['data'];

                this.setState({chat: response_data});
                console.log(this.props.chat);
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {});
    }

    render () {
    return (
        <>
            <main className="dialogs-page">
                <div className="absolute z-0 top-0 w-full h-full bg-gradient-to-b bg-gradient-to-b from-purple ..."></div>
                <div className="relative container mx-auto px-4 z-1 flex flex-col">
                    <div className="flex justify-center mb-8">
                        <div className="pt-1 text-center w-14 w-14 text-4xl font-semibold rounded-full border-2 border-gray-900 focus:outline-none border-red text-red">
                            9
                        </div>
                        <h1 className="pl-4 text-4xl font-semibold leading-normal text-gray-900 text-center">
                            Messages
                        </h1>
                        <button
                            className="p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                            <img src={icon}/>
                        </button>
                    </div>

                    <div className="w-full">
                        <div className="border-gray-500  mb-2">
                            <div
                                className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                    <a href="#" className="block relative">
                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                             className="mx-auto object-cover rounded-lg h-10 w-10 md:h-17 md:w-17 -m-2"/>
                                    </a>
                                </div>

                                <div className="flex-1 pl-1 md:mr-16">
                                    <div className="font-medium dark:text-gray-200">
                                        Общий
                                    </div>
                                    <div className="text-gray-400 dark:text-white  text-sm">
                                        Этаж 1
                                    </div>
                                </div>
                                <div className="text-gray-600 dark:text-gray-200 text-xs justify-end">
                                    6:00 AM
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    )};
}

export default Dialogs;