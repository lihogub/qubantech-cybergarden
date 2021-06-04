import React from 'react';
import Header from "./Header";
import itemDialog from "../components/itemDialog";
import icon from "../icon/plus_dialogs.svg";
import SelectFriend from "../components/SelectFriend";

let user_id = 1;

class NewChat extends React.Component {

    render () {
        return (
            <>
                <main className="dialogs-page mt-16">
                    <div
                        className="absolute z-0 top-0 w-full h-full bg-gradient-to-b bg-gradient-to-b from-purple ..."
                    ></div>
                    <div className="relative container mx-auto px-4 z-1 flex flex-col">
                        <div className="w-full">
                            <div
                                className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
                                <div className="px-4 py-8 sm:px-10">
                                    <div className="relative mt-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300">
                                            </div>
                                        </div>

                                        <div className="relative flex justify-center text-sm leading-5">
                                            <span className="px-2 text-gray-500 bg-white">
                                                Добавить чат
                                            </span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="w-full space-y-6">
                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <input type="text" id="search-form-price"
                                                           className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                                           placeholder="Название"/>
                                                </div>
                                            </div>


                                            <div className="w-full">
                                                <div className=" relative ">
                                                    <SelectFriend/>
                                                </div>
                                            </div>
                                            <div>
                                <span className="block w-full rounded-md shadow-sm">
                                    <button type="button"
                                            className="py-2 px-4 bg-purple text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md   rounded-lg ">
                                        Создать
                                    </button>
                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )};
}

export default NewChat;