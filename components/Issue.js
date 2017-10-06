import Categories from "./Categories"
import IssueContent from "./IssueContent"
import Moment from 'react-moment'

export default (props) => {
    return (
        <div className="issue">
            <div className="issue-number">#{props.number}</div>
            <div className="framed">
                <Moment className="issue-date" format='MMMM Do, YYYY' date={props.date}/>
                <Categories names={props.categories.map((cat) => cat.name)}/>
                <IssueContent categories={props.categories}/>
            </div>
        </div>
    )
}