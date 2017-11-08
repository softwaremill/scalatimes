import Link from "next/link"

export default (props) => {
  return (
    <div className="issue-toc">
      {
        props.names.map((name, idx) => {
          return <a href={"#" + name} key={name} className="issue-toc__item"><h4>{name.toUpperCase()}</h4></a>
        })
      }
    </div>
  )
}