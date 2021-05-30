import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import FollowButton from "../components/FollowButton.jsx";
import OpenButtonButton from "../components/OpenButton";
import OpenButton from "../components/OpenButton";
import backendInterface from "./../backendInterface";

class Profile extends React.Component {

    componentDidMount() {

        backendInterface.axios_.get(backendInterface.session_url + '/user/' + backendInterface.client_user_id)
            .then((response) => {
                const response_data = response['data'];

                this.setState({profile: response_data});

                console.log(response_data);
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            })
            .then(() => {});

    }

    render() {
        return(
            <>
                <main className="profile-page md:mt-12">
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
                                                    {this.state && this.state.profile['avatar']
                                                    && `<img alt="profil" src="${this.state.profile['avatar']}"
                                                         className="mx-auto object-cover rounded-lg h-28 w-28 md:h-40 md:w-40 -m-10"/>`
                                                    || <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                         className="mx-auto object-cover rounded-lg h-28 w-28 md:h-40 md:w-40 -m-10"/>}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-12 mb-2">
                                        <div className={"justify-center mx-auto w-max flex gap-x-4"}>
                                            <div className={""}>
                                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                                    {this.state && this.state.profile['firstname']} {this.state && this.state.profile['lastname']}
                                                </h3>
                                                <div className="text-sm leading-normal -mt-4 mx-0 mb-0 text-gray-500 font-normal uppercase">
                                                    <i className="fas fa-map-marker-alt mr-2 text-text-base text-gray-500"></i>{" "}
                                                    @{this.state && this.state.profile['username']}
                                                </div>
                                            </div>
                                            <div className={"w-1/6 mt-2"}>
                                                <FollowButton initialState={true} callback={"/s"} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-white rounded-lg w-72 p-4 m-auto">
                                                <div className="w-full h-4 bg-gray-400 rounded-full mt-3">
                                                    <div
                                                        className="w-2/5 h-full text-center text-xs text-black bg-purple rounded-full">
                                                        40
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-sm leading-normal mt-6 mb-2 text-gray-800 font-medium uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-base text-gray-500"></i>{" "}
                                            Специальность: {this.state && this.state.profile['specialization']}
                                        </div>
                                        <div className="text-sm leading-normal -mt-2 mb-4 text-gray-800 font-medium uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-base text-gray-500"></i>{" "}
                                            Дата рождения: {this.state && this.state.profile['birthday'] || 'не указана'}
                                        </div>

                                        <div className="mt-5 border-t border-gray-300 container px-2 py-10 mx-auto">
                                            <div className="flex flex-wrap -m-4 text-center">
                                                <div className="p-4 sm:w-1/3 w-1/2">
                                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                                        {this.state && this.state.profile.floor}
                                                    </h2>
                                                    <p className="leading-relaxed">Этаж</p>
                                                </div>
                                                <div className="p-4 sm:w-1/3 w-1/2">
                                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                                        {this.state && this.state.profile.block}
                                                    </h2>
                                                    <p className="leading-relaxed">Блок</p>
                                                </div>
                                                <div className="p-4 sm:w-1/3 w-full">
                                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                                        {this.state && this.state.profile.room}
                                                    </h2>
                                                    <p className="leading-relaxed">Комната</p>
                                                </div>
                                                <div className="p-4 w-1/2">
                                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                                        {this.state && this.state.profile.room}
                                                    </h2>
                                                    <p className="leading-relaxed">Подписчики</p>
                                                </div>
                                                <div className="p-4 w-1/2">
                                                    <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                                                        {this.state && this.state.profile.room}
                                                    </h2>
                                                    <p className="leading-relaxed">Подписки</p>
                                                </div>

                                            </div>
                                        </div>
                                        <h2 className={"text-center title-font font-medium sm:text-4xl text-3xl text-gray-900 mt-2 mb-5"}> Подписчики</h2>
                                        <div className={"md:grid md:grid-cols-2 md:gap-3"}>
                                            <div
                                                className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                                <div className="flex flex-col w-max h-10 justify-center items-center mr-4">
                                                    <a href="#" className="w-max block relative">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-lg h-10 w-10 md:h-17 md:w-17 -m-2"/>
                                                    </a>
                                                </div>
                                                <div className="pl-1 gap-x-3 md:mr-16 text-xl dark:text-white inline-block leading-none">
                                                    <div className="font-medium text-left">
                                                        First Last nameddddd
                                                    </div>
                                                    <div className="text-xs text-gray-500 leading-relaxed text-left">
                                                        @username
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <OpenButton callback={"/s"}/>
                                        </div>
                                        <h2 className={"text-center title-font font-medium sm:text-4xl text-3xl text-gray-900 mt-8 mb-5"}> Подписки</h2>
                                        <div className={"md:grid md:grid-cols-2 md:gap-3"}>
                                            <div
                                                className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                                                <div className="flex flex-col w-max h-10 justify-center items-center mr-4">
                                                    <a href="#" className="w-max block relative">
                                                        <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                                             className="mx-auto object-cover rounded-lg h-10 w-10 md:h-17 md:w-17 -m-2"/>
                                                    </a>
                                                </div>
                                                <div className="pl-1 gap-x-3 md:mr-16 text-xl dark:text-white inline-block leading-none">
                                                    <div className="font-medium text-left">
                                                        First Last nameddddd
                                                    </div>
                                                    <div className="text-xs text-gray-500 leading-relaxed text-left">
                                                        @username
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <OpenButton callback={"/s"}/>
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
}

export default Profile;