import { Component, useState } from 'react'

function AnimatedButton({ text, clicked }) {

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

    const style = {
        padding: 5,
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10,
        cursor: 'pointer',
        borderRadius: 5,
        width: 'fit-content'
    }

    if (hover)
        style['boxShadow'] = '#00000066 2px 2px 4px'
    if (click)
        style['boxShadow'] = '#00000066 2px 2px 4px inset'
    if (!hover && !click)
        style['border'] = '1px solid grey'

    return <div
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => { setHover(false); setClick(false) }}
        onMouseDown={() => setClick(true)}
        onMouseUp={() => { clicked(); setClick(false) }}
    >
        {text}
    </div>

}


function MyVideo({ title }) {

    const [likes, setLikes] = useState(0)
    const [disLikes, setDislikes] = useState(0)

    const panelStyle = {
        padding: 10,
        background: 'lightgrey',
        width: 200,
        borderRadius: 5,
        transition: 'all 0.3s ease-in-out'
    }

    const videoStyle = {
        width: 200,
        height: 100,
        borderRadius: 5,
        backgroundColor: '#a83236',
    }

    const likeBar = {
        width: 200 * (likes / (likes + disLikes)),
        background: 'lime',
        height: 5,
        transition: 'all 0.3s ease-in-out'
    }

    let ratio = likes + disLikes > 0
        ? Math.round((likes / (likes + disLikes)) * 100)
        : "No Ratings"

    return (
        <div style={panelStyle}>
            <div style={videoStyle} />
            <h3>{title}</h3>
            {ratio}
            <div style={likeBar}></div>
            <AnimatedButton text="Love Video" clicked={() => setLikes(likes + 1)} />
            <AnimatedButton text="Hate Video" clicked={() => setDislikes(disLikes + 1)} />

        </div>
    )
}

export function AnimatedRatings(props) {
    return (
        <div>
            <MyVideo title="The new mario movie2!" />
        </div>
    )
}