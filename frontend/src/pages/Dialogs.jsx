import React from 'react';
import Header from "../components/Header";
import DialogPreview from "../components/DialogPreview";
import icon from "../icon/plus_dialogs.svg";
import backendInterface from "./../backendInterface";

class Dialogs extends React.Component {
    componentDidMount() {

        backendInterface.axios_.get(backendInterface.session_url + '/chat/' + backendInterface.client_user_id)
            .then((response) => {
                const response_data = response['data'];
                this.setState({chats: response_data});
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
                            ЧёЧаты
                        </h1>
                        <button
                            className="p-4  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                            <img src={icon}/>
                        </button>
                    </div>

                    <div className="w-full">
                        <div className="border-gray-500  mb-2">
                            {
                                this.state && this.state.chats.map(
                                    (chat) => {
                                        return(<DialogPreview chatID={chat.id}/>);
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )};
}

export default Dialogs;