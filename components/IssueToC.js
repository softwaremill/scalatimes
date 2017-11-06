import Link from "next/link"

export default (props) => {
  return (
    <div className="issue-toc">
      {
        props.names.map((name, idx) => {
          return <Link href={"#" + name} key={name}><a className="issue-toc__item"><h3>{name.toUpperCase()}</h3></a></Link>
        })
      }
    </div>
  )
}