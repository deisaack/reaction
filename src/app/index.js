import React from "react";
import {render} from "react-dom";
import Request from "superagent"
import _ from "lodash"

class App extends React.Component {
    constructor () {
        super();
        this.state = {};
    }
    componentWillMount () {
        var url = "http://127.0.0.1:8101/api/bks/disbursment/?format=json";
        Request.get(url).then((response) => {
            this.setState({
                disbursements: response.body
        });
        });
    }

    render() {
        var disbursements = _.map(this.state.disbursements, (disbursements, i) => {
           return <li key={i}>{disbursements.member_no}, {disbursements.timestamp}</li>;
        });
        return (
            <div className="container">
                <ul>{disbursements}</ul>
            </div>
        );
    }
}
 
render(<App/>, window.document.getElementById("app"));
