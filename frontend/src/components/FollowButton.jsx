import React from 'react';
import check from '../icon/check.svg';
import plus from '../icon/plus.svg';

let subscribed;

export default class FollowButton extends React.Component{
    componentDidMount() {
        let subscribed = this.props.initialState;
    }
    render() {
        subscribed = this.props.initialState;
        if (subscribed) {
            return (
                <button type="button" onClick={this.props.callback}
                        className="rounded-full py-1 px-3 h-12 w-12 bg-gray-200 hover:bg-purple-secondary focus:ring-purple-secondary focus:ring-offset-purple-secondary
            text-gray-500 w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full">
                    <img src={check} onClick={this.props.callback}/>
                </button>
            );
        }
        else{
            return (
                <button type="button" onClick={this.props.callback}
                        className="rounded-full h-12 w-12 py-2 px-4 bg-gray-500 hover:bg-gray focus:ring-purple-secondary focus:ring-offset-purple-secondary
            text-white w-full transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-full">
                    <img src={plus} onClick={this.props.callback}/>
                </button>
            );
        }
    }
}