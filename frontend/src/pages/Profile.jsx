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

export default function Profile() {
    return (
        <>
            <main className="profile-page">
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-gradient-to-b bg-gradient-to-b from-purple ..."
                    >
                    </div>

                </section>
                <section className="relative py-4 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-96">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <a href="#" className="block relative">
                                                <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                     className="mx-auto object-cover rounded-lg h-28 w-28 md:h-40 md:w-40 -m-10"/>
                                            </a>
                                        </div>
                                    </div>
        {temp}
                                </div>
                                <div className="text-center mt-12  mb-2">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-black-secondary mb-2">
                                        Ivan Ivanov
                                    </h3>
                                    <div className="text-sm leading-normal -mt-4 mb-0 text-gray-500 font-normal uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-text-base text-gray-400"></i>{" "}
                                        @USERNAME
                                    </div>
                                    <div className="text-sm leading-normal mt-6 mb-2 text-gray-800 font-medium uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-base "></i>{" "}
                                        Специальность: <span className="text-gray-700">матобес</span>
                                    </div>
                                    <div className="text-sm leading-normal -mt-2 mb-4 text-gray-800 font-medium uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-base"></i>{" "}
                                        Дата рождения: <span className="text-gray-700">20.01.2000</span>
                                    </div>
                                    <div className="mt-5 border-t border-gray-300 container px-2 py-10 mx-auto">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            <div className="p-4 sm:w-1/3 w-1/2">
                                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-black-secondary">2</h2>
                                                <p className="leading-relaxed">Этаж</p>
                                            </div>
                                            <div className="p-4 sm:w-1/3 w-1/2">
                                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-black-secondary">4</h2>
                                                <p className="leading-relaxed">Блок</p>
                                            </div>
                                            <div className="p-4 sm:w-1/3 w-full">
                                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-black-secondary">228</h2>
                                                <p className="leading-relaxed">Комната</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}