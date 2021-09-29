/**
 * Example 8
 * 
 * Hooks
 */
import { Component, useState } from 'react'

/**
 * Displays a video component that allows adjustment of a video
 */

let randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

function MyVideo({ title }) {

    const [likes, setLikes] = useState(0)
    const [disLikes, setDislikes] = useState(0)

    const style = {
        width: 200,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#a83236',
    }

    let ratio = likes + disLikes > 0
        ? Math.round((likes / (likes + disLikes)) * 100)
        : "No Ratings"

    return (
        <div style={{ padding: 10 }}>
            <div style={style} />

            <h1>{title}</h1>
            <p>Likes: {likes}</p>
            <p>Dislikes: {disLikes}</p>
            <p>Ratio: {ratio} % liked</p>

            <div onClick={() => setLikes(likes + 1)}> Like! </div>
            <div onClick={() => setDislikes(disLikes + 1)}> Hate! </div>

        </div>
    )
}

export function VideoRatings(props) {
    return (
        <div>
            <MyVideo title="The new mario movie!" />
        </div>
    )
}