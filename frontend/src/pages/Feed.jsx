import React from 'react';
import Header from "../components/Header";
import Post from "./../components/Post";
import backendInterface from "./../backendInterface";

class Feed extends React.Component{

    componentDidMount() {

        backendInterface.axios_.get(
            backendInterface.session_url + '/post/' + backendInterface.client_user_id + '/' + 'feed'
        )
            .then((response) => {
                const response_data = response['data'];

                this.setState({feed: response_data});

                console.log(response_data);
                console.log(this.state);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render(){
        return(
            <div className='container md:mt-12 mb-10 mx-auto px-4'>
                {this.state && this.state.feed.map((element)=>{
                    return(
                        <Post
                            firstname={element.firstname}
                            lastname={element.lastname}
                            username={element.author}
                            title={element.title}
                            avatar={element.avatar || "https://i.redd.it/v0caqchbtn741.jpg"}
                            timestamp={''}
                            text={element.description}
                            images={element.images}
                            likes={element.likes}
                            comments={element.comments}
                        />
                    );
                })}
            </div>
        );
    }

}

export default Feed;