import React from 'react';
import axios from "./../backendInterface";

let user_id = 2;

class itemDialog extends React.Component {

    render() {
        return (
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
        );
    }
}

export default itemDialog;