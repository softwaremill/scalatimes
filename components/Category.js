import Link from "./Link"

export default (props) => {
    return (
        <div className="issue-category">
            <h3 className="category-title" id={props.name}>{props.name.toUpperCase()}</h3>
            {props.links.map((link) => <Link key={link.id} title={link.title} description={link.description} author={link.author}
                                             handle={link.twitterHandle} url={link.url}/>)}
        </div>
    )
}