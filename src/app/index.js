import React from "react";
import {render} from "react-dom";
import Request from "superagent"
import _ from "lodash"
import Textarea from "./components/Textarea"
import Reservation from "./components/Reservation"
import Select from "./components/Select"
import FormContainer from './containers/FormContainer';


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
        var disbursements = _.map(this.state.disbursements, (disbursement, i) => {
            return <tr key={i}>
                <td>{disbursement.member_no}</td>
                <td>{disbursement.account_ref_no}</td>
                <td>{disbursement.disbursment_date}</td>
                <td>{disbursement.branch}</td>
                <td>{disbursement.member_name}</td>
                <td>{disbursement.employer_no}</td>
                <td>{disbursement.employer_name}</td>
                <td>{disbursement.member_id_no}</td>
                <td>{disbursement.product_type}</td>
                <td>{disbursement.principal_amount}</td>
            </tr>;
        });
        return (
            <div className="container">
                <h3>Disbursment Report</h3>
                <table className="table table-bordered table-hover table-sm table-responsive">
                    <thead className="thead-inverse">
                    <tr>
                        <th>Member No:</th>
                        <th>Account No</th>
                        <th>Disbursement Date</th>
                        <th>Branch</th>
                        <th>Agent Name</th>
                        <th>Member Name</th>
                        <th>Employee No</th>
                        <th>Employee Name</th>
                        <th>Member Id No</th>
                        <th>Product Type</th>
                    </tr>
                   {disbursements}
                    </thead>
                </table>
                <hr/>
                <FormContainer/>
            </div>
        );
    }
}
render(<App/>, window.document.getElementById("app"));
