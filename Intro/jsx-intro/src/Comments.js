import React from 'react'

const Card = (props) => {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <Comment key={props.comment.name} name={props.comment.name} time={props.comment.time} comment={props.comment.comment} image={props.comment.image} />
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button">Approve</div>
                        <div className="ui basic red button">Decline</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


/// Deconstruct all the props passed in, other read as
/// const Comment = (props) => {}
const Comment = ({ name, time, comment, image }) => {
    return (
        <div className='comment'>
            <a href="/" className="ui avatar image medium">
                <img src={image} alt="Profile" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {name}
                </a>
                <div className="metadata">
                    <span className="date">{time}</span>
                    <div className="rating">
                        <i className="star icon"></i>
                        {Math.floor(Math.random() * 100) + 1} Faves
                    </div>
                </div>
                <div className="text">{comment}</div>
            </div>
        </div>
    )
}

const Comments = () => {
    const comments = [
        { name: 'Alex', time: 'Today at 5:00', comment: 'Great blog post!', image: 'https://via.placeholder.com/100' },
        { name: 'Sam', time: 'Today at 6:29', comment: 'Informative. Thanks', image: 'https://via.placeholder.com/100' },
        { name: 'Jane', time: 'Today at 9:01', comment: 'Looks great', image: 'https://via.placeholder.com/100' }
    ]

    return (
        <div className="ui container comments">
            {comments.map(comment =>
                <Card key={comment.name} comment={comment} />
            )}
        </div>
    )
}

export default Comments;