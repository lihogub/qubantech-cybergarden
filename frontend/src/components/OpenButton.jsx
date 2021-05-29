import React from 'react';

let subscribed;

export default class OpenButton extends React.Component{
    render() {
            return (
                <button type="button" onClick={this.props.callback}
                        className="mt-7 py-4 px-6 bg-white hover:bg-white focus:ring-white focus:ring-offset-white text-black w-1/3 md:w-1/4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full">
                    Ещё...
                </button>
            );
    }
}