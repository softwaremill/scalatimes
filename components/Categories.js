import Link from "next/link";

export default (props) => {
    return (
        <div className="issue-categories">
            {props.names.map((name, idx) => <Link href={"#" + name} key={idx}><a className="mx-5">{name.toUpperCase()}</a></Link>)}
        </div>
    )
}