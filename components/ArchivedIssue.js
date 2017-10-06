export default (props) => {
    String.prototype.trunc = String.prototype.trunc ||
        function (n) {
            return (this.length > n) ? this.substr(0, n - 1).trim() + '...' : this;
        };

    return (
        <div className="archived-issue">
            <h3>#{props.number}</h3>
            <p>#{props.summary.trunc(180)}</p>
        </div>
    )
}