import React, {Component} from 'react';
import CheckboxOrRadioGroup from '../components/CheckboxOrRadioGroup';
import SingleInput from '../components/SingleInput';
import TextArea from '../components/TextArea';
import Select from '../components/Select';

class DisbursementForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberNo: '',
            accountRefNo: '',
            disbursmentDate: '',
            branch: '',
            memberName: '',
            employerNo: '',
            employerName: '',
            memberIdNo: 0,
            productType: '',
            principalAmount: 0
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            memberNo: '',
            accountRefNo: '',
            disbursmentDate: '',
            branch: '',
            memberName: '',
            employerNo: '',
            employerName: '',
            memberIdNo: 0,
            productType: '',
            principalAmount: 0
        });
    }
    handleFormSubmit(e) {
        e.preventDefault();

        const formPayload = {
            memberNo: this.state.memberNo,
            accountRefNo: this.state.accountRefNo,
            disbursmentDate: this.state.disbursmentDate,
            branch: this.state.branch,
            memberName: this.state.memberName,
            employerNo: this.state.employerNo,
            employerName: this.state.employerName,
            memberIdNo: this.state.memberIdNo,
            productType: this.state.productType,
            principalAmount: this.state.principalAmount
        };

        console.log('Send this in a POST request:', formPayload);
        this.handleClearForm(e);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <h3>Add a disbursement</h3>
                    <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Member No:</label>
                            <div className="col-sm-9">
                                <input name="memberNo" onChange={this.handleInputChange} className="form-control" type="text" id="formGroupInputSmall" placeholder="Member Number" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Account Ref No:</label>
                            <div className="col-sm-9">
                                <input name="accountRefNo" onChange={this.handleInputChange} className="form-control" type="text" id="formGroupInputSmall" placeholder="Reference Number" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Member Name:</label>
                            <div className="col-sm-9">
                                <input name="memberName" onChange={this.handleInputChange} className="form-control" type="text" id="formGroupInputSmall" placeholder="Member Name" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Employer No:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type="text" id="formGroupInputSmall" placeholder="Employer Number" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Disbursement Date:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type="date" id="formGroupInputSmall" placeholder="Disbursement Date" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Branch:</label>
                            <div className="col-sm-9">
                                <select value={this.state.branch} className="form-control" type="text" id="formGroupInputSmall">
                                    <option>Kikuyu</option>
                                    <option>Juja</option>
                                    <option>Thika</option>
                                    <option>Eldoret</option>
                                    <option>Mombasa</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Principal Amount:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type="number" id="formGroupInputSmall" placeholder="Principal ammount" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Employer Name:</label>
                            <div className="col-sm-9">
                                <input className="form-control" type="text" id="formGroupInputSmall" placeholder="Employer Name" />
                            </div>
                        </div>
                        <div className="form-group form-group-sm">
                            <label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">Product Type:</label>
                            <div className="col-sm-9">
                                <select value={this.state.productType} className="form-control" type="text" id="formGroupInputSmall">
                                    <option>Asset</option>
                                    <option >Liability</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <a href="#">Clear Form</a>
                        <input type="submit" className="btn btn-warning pull-right"/>
                    </form>
                </div>
                <div className="col-md-3"></div>
                </div>
        );
    }
}

export default DisbursementForm;
