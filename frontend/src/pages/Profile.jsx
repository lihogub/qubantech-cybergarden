import React from "react";
import Navbar from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Navigation from "../components/Navigation";

{/*const axios = require('axios');
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
    .then(() => {}); */}

export default function Profile() {
    return (
        <>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                        }}
                    >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl -mt-64 rounded-lg">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={'https://images.unsplash.com/photo-1578496480157-697fc14d2e55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}
                                                className="shadow-xl founded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                                                style={{ maxWidth: "150px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12 mb-2">
                                    <h3 className="text-4xl font-semibold leading-normal mb-0 text-gray-800">
                                        FIRST LAST NAME
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-0 text-gray-500 font-normal uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-base text-gray-500"></i>{" "}
                                        @USERNAME
                                    </div>
                                    <div className="text-sm leading-normal mt-6 mb-2 text-black-500 font-semibold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-base text-gray-500"></i>{" "}
                                        Специальность: матобесссссссссс
                                    </div>
                                    <div className="text-sm leading-normal mt-0 mb-4 text-black-500 font-semibold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-base text-gray-500"></i>{" "}
                                        Дата рождения: 20.01.2000
                                    </div>
                                    <div className="mt-5 border-t border-gray-300 container px-2 py-10 mx-auto">
                                        <div className="flex flex-wrap -m-4 text-center">
                                            <div className="p-4 sm:w-1/3 w-1/2">
                                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2</h2>
                                                <p className="leading-relaxed">Этаж</p>
                                            </div>
                                            <div className="p-4 sm:w-1/3 w-1/2">
                                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4</h2>
                                                <p className="leading-relaxed">Блок</p>
                                            </div>
                                            <div className="p-4 sm:w-1/3 w-full">
                                                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">228</h2>
                                                <p className="leading-relaxed">Комната</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="mb-2 border-t border-gray-300"></div>
                                    <div>
                                        <div className=" grid grid-cols-2 md:w-1/2 mx-auto gap-x-2 md:gap-x-4 overflow-hidden truncate text-right mb-10">
                                            <div>birthdate</div> <div className="text-left">null</div>
                                            <div>block</div> <div className="text-left">3</div>
                                            <div>Специальность: </div > <div className="text-left">Мат.обеспечениеssss </div>
                                            <div>Комната: </div> <div className="text-left">321</div>
                                            <div>Этаж: </div> <div className="text-left">3 </div>
                                        </div>
                                    </div>*/}
                                </div>
                                {/*<div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                An artist of considerable range, Jenna the name taken by
                                                Melbourne-raised, Brooklyn-based Nick Murphy writes,
                                                performs and records all of his own music, giving it a
                                                warm, intimate feel with a solid groove structure. An
                                                artist of considerable range.
                                            </p>
                                            <a
                                                href="#pablo"
                                                className="font-normal text-pink-500"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Show more
                                            </a>
                                        </div>
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}