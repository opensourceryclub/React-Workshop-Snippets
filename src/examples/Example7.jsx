/**
 * Example 7
 * 
 * More Components
 */
import { Component } from 'react'

/**
 * Displays a video component that allows adjustment of a video
 */
export class MyVideo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            color: '#a83236',
            likes: 0,
            dislikes: 0,
            favorite: false
        }
    }

    like = () => {

        this.setState({ likes: this.state.likes += 1 })

    }

    dislike = () => {

        this.setState({ dislikes: this.state.dislikes += 1 })

    }

    render() {

        let style = {
            width: 200,
            height: 100,
            borderRadius: 10,
            backgroundColor: this.state.color
        }

        let likeCount = this.state.likes
        let dislikeCount = this.state.dislikes
        let ratio = likeCount + dislikeCount > 0
            ? Math.round((likeCount / (likeCount + dislikeCount)) * 100)
            : 0

        return (
            <div style={{ padding: 10 }}>
                <div style={style} />

                <h1>{this.props.title}</h1>
                <p>Likes: {this.state.likes}</p>
                <p>Dislikes: {this.state.dislikes}</p>
                {ratio > 0
                    ? <p>Ratio: {ratio} % liked</p>
                    : <p>Ratio: No Ratings</p>
                }

                <div onClick={this.like} role="button"> Like! </div>
                <div onClick={this.dislike} role="button"> Hate! </div>

            </div>
        )
    }

}


export function VideoRatings(props) {
    return (
        <div>
            <MyVideo title="The new mario movie!" />
        </div>
    )
}