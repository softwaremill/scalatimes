import Link from "next/link"

export default (props) => {
  return (
    <div className="issue-toc">
      {
        props.names.map((name, idx) => {
          return <Link href={"#" + name} key={name}><a className="issue-toc__item"><h4>{name.toUpperCase()}</h4></a></Link>
        })
      }
    </div>
  )
}