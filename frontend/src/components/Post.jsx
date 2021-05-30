import React from 'react';
import Header from "../components/Header";
import axios from "./../backendInterface";
import session_url from "./../backendInterface"
import Moment from 'react-moment';

class Post extends React.Component{

    componentDidMount() {

    }

    render(){
        return(
            <div>
                <div className="overflow-hidden shadow-lg rounded-lg h-90 md:w-8/12 cursor-pointer m-auto my-2">
                    <a href="#" className="w-full block h-full">
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                {this.props.title}
                            </p>
                            <div className='flex items-center my-4'>
                                <a href="#" className="block relative">
                                    <img alt="profil" src={this.props.avatar}
                                         className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        {this.props.firstname + " " + this.props.lastname}
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        <Moment toNow>
                                            {this.props.timestamp}
                                        </Moment>
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                {this.props.text}
                            </p>
                            <div className="flex justify-between m-4">
                                {this.props.images.map((imageLink) => {
                                    if(imageLink) return(
                                        <img className="object-contain h-48 w-full" src={imageLink}/>
                                    )
                                })}
                            </div>
                            <div className="flex items-center mt-4">
                                <button
                                    className="my-auto
                                    transition duration-300 ease-in-out
                                    transform hover:scale-[1.1]
                                    transform active:scale-[0.9]
                                    fill-current text-grey-secondary hover:text-grey-dark">
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd"
                                            fill-rule="evenodd">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex justify-between m-4">
                                {this.props.comments && this.props.comments.map((comment) => {
                                    return(
                                        <div>
                                            {console.log(comment)}
                                            {comment.text}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }

}

export default Post;