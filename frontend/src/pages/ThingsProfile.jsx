import React from 'react';
import plus from "../icon/plus.svg";
import my from "../icon/my.svg";
import {Link} from "react-router-dom";

export default function ThingsProfile() {
    return (
        <>
            <main className="things-page">
                <section className="relative md:mt-10 block" style={{ height: "50px" }}>
                    <div className="absolute top-0 w-full h-full bg-gradient-to-b bg-gradient-to-b from-purple ...">
                        <div className={"flex w-full mx-5"}>
                            <div className={"sm:w-1/2"}>
                                <h1 className="text-3xl sm:text-4xl font-semibold leading-normal text-gray-900 text-left mt-4">
                                    Сделки
                                </h1>
                            </div>
                            <div className={"sm:w-1/4"}>

                            </div>
                            <div className={"w-1/2 ml-4 text-center sm:w-1/4 place-items-end content-end"}>
                                <button type="button"
                                        className="mt-4 mr-3 rounded-full h-12 w-12 py-2 px-4 bg-transparent hover:bg-purple-secondary-200 focus:ring-purple-secondary focus:ring-offset-purple-secondary
                                text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full">
                                    <img src={plus}/>
                                </button>
                                <Link to="/thingsprofile">
                                    <button type="button"
                                            className="mt-4 content-end rounded-full h-12 w-12 py-2 px-4 bg-transparent hover:bg-purple-secondary-200 focus:ring-purple-secondary focus:ring-offset-purple-secondary
                                  text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full">
                                        <img src={my} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-4 mt-8 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col w-full items-center justify-center">
                            <ul className="w-full">
                                <li className="border-gray-500 flex flex-col mb-10 gap-y-3 ">
                                    <h1 className="text-3xl sm:text-4xl font-semibold leading-normal text-gray-900 text-left mt-4">
                                        Твои предложения
                                    </h1>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
                                        <a href="#" className="w-full block h-full">
                                            <div className="bg-white dark:bg-gray-800 w-full p-3">
                                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-1">
                                                    Хлеб пшеничный
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Очень вкусный. Почти свежий....
                                                </p>
                                                <div className="flex items-center mt-4">
                                                    <a href="#" className="block relative min-w-10 max-w-10">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-full h-10 max-w-sm"/>
                                                    </a>
                                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                                        <p className="text-gray-800 w-max dark:text-white">
                                                            Петр Иванов
                                                        </p>
                                                        <p className="text-gray-400 w-max dark:text-gray-300">
                                                            28 минут назад
                                                        </p>
                                                    </div>
                                                    <div className={'w-full'}></div>
                                                    <div className={"items-end text-3xl"}>
                                                        <div>
                                                            -3
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"text-gray-800 dark:text-white text-sm mt-2"}>
                                                    Корпус Г, этаж 4, комната 420
                                                </div>
                                                <div className="bg-white rounded-lg w-full mt-2 m-auto">
                                                    <div className="w-full h-4 bg-gray-400 rounded-full">
                                                        <div
                                                            className="w-2/5 h-full text-center text-xs text-black bg-purple rounded-full">
                                                            40
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <h1 className="text-3xl sm:text-4xl font-semibold leading-normal text-gray-900 text-left mt-4">
                                        Успешные сделки
                                    </h1>
                                    <div
                                        className="overflow-hidden shadow-lg rounded-lg h-90 w-full cursor-pointer m-auto">
                                        <a href="#" className="w-full block h-full">
                                            <img alt="blog photo" src="https://avatars.mds.yandex.net/get-market-ugc/223176/2a000001795f991d0f96e7ca51fa8711f2ee/1920-1920"
                                                 className="max-h-40 w-full object-cover"/>
                                            <div className="bg-white dark:bg-gray-800 w-full p-3">
                                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-1">
                                                    Кошачий корм
                                                </p>
                                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                                    Дорогой моему сердцу корм. Но кошки у меня нет, поэтому отдам кому-нибудь за хорошую карму :)
                                                </p>
                                                <div className="flex items-center mt-4">
                                                    <a href="#" className="block relative min-w-10 max-w-10">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-full h-10 max-w-sm"/>
                                                    </a>
                                                    <div className="flex flex-col justify-between ml-4 text-sm">
                                                        <p className="text-gray-800 w-max dark:text-white">
                                                            Петр Иванов
                                                        </p>
                                                        <p className="text-gray-400 w-max dark:text-gray-300">
                                                            6 часов назад
                                                        </p>
                                                    </div>
                                                    <div className={'w-full'}></div>
                                                    <div className={"items-end text-3xl"}>
                                                        <div>
                                                            -10
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"text-gray-800 dark:text-white text-sm mt-2"}>
                                                    Корпус Б, этаж 2, комната 231
                                                </div>
                                                <div className="bg-white rounded-lg w-full mt-2 m-auto">
                                                    <div className="w-full h-4 bg-gray-400 rounded-full">
                                                        <div
                                                            className="w-2/5 h-full text-center text-xs text-black bg-purple rounded-full">
                                                            25
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}