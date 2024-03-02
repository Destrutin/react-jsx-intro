const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <h1>{username}</h1>
            <b>{name}</b>
            <div>{message}</div>
            <i>{date}</i>
            
        </div>
    )
}