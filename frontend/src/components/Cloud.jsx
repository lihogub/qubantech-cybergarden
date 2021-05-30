import React from 'react';
import axios from "./../backendInterface";


let user_id = 2;

let avatar;
class Cloud extends React.Component {

    componentDidMount() {
        let avatar = this.props.chat.avatar;

    }

    render() {
        console.log(this.props);
        return (
            <div className="bg-white dark:bg-gray-800 w-auto shadow-lg mx-auto rounded-xl px-3 pt-3 pb-3 mb-2">
                <p className="text-gray-600 dark:text-white">
                    Hello! Writing testing message...
                </p>
                <div className="flex items-center mt-4">
                    <a href="#" className="block relative">
                        {this.props && avatar
                        && `<img alt="profil" src="${avatar}"
                                                         className="mx-auto object-cover rounded-lg h-12 w-12 md:h-17 md:w-17 -m-7"/>`
                        || <img alt="profil" src="https://i.redd.it/v0caqchbtn741.jpg"
                                className="mx-auto object-cover rounded-lg h-12 w-12 md:h-17 md:w-17 -m-7"/>}
                    </a>
                    <div className="flex flex-col ml-2 justify-between">
                        <span className="text-sm font-semibold leading-normal text-gray-900">
                            {this.state && this.state.profile['firstname']} {this.state && this.state.profile['lastname']}
                        </span>
                        <span className="text-xs leading-normal text-gray-500 font-normal uppercase">
                            <i className="fas fa-map-marker-alt text-text-base text-gray-500"></i>{" "}
                            @{this.state && this.state.profile['username']}
                        </span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Cloud;