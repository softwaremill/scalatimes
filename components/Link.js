export default (props) => {
    return (
        <div className="link">
            <div><a href={props.url}><span className="link-title">{props.title}</span></a></div>
            <div className="link-desc">{props.description}</div>
            <div className="link-author">~{props.author}{props.handle !== '' && "(@"+props.handle+")"}</div>
        </div>
    )
}