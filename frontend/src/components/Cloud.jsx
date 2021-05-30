import React from 'react';
import axios from "./../backendInterface";


let user_id = 2;

let avatar;
class Cloud extends React.Component {



    render() {
        console.log(this.props);
        return (
            <>
                <div className="bg-white dark:bg-gray-800 w-auto shadow-lg mx-auto rounded-xl px-3 pt-3 pb-3 mb-2">
                    <div className="flex items-center mt-2 mb-6">
                        <a href="#" className="block relative">
                            {this.props && avatar
                            && `<img alt="profil" src="${avatar}"
                                                         className="mx-auto object-cover rounded-lg h-12 w-12 md:h-17 md:w-17 -m-7"/>`
                            || <img alt="profil" src={this.props.icon}
                                    className="mx-auto object-cover rounded-lg h-12 w-12 md:h-17 md:w-17 -m-7"/>}
                        </a>
                        <div className="flex flex-col ml-2 justify-between">
                        <span className="text-sm font-semibold leading-normal text-gray-900">
                            {this.state && this.state.profile['firstname']} {this.state && this.state.profile['lastname']}
                            {this.props.name}
                        </span>
                            <span className="text-xs leading-normal text-gray-500 font-normal uppercase">
                            <i className="fas fa-map-marker-alt text-text-base text-gray-500"></i>{" "}
                                {this.state && this.state.profile['username']} {this.props.username}
                        </span>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-gray-600 dark:text-white">
                            {this.props.text}
                        </p>
                    </div>
                </div>
            </>
        );
    }
}

export default Cloud;