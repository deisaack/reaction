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
            productTypeOptions: [],
            branchOptions: [],
            principalAmount: 0
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        fetch('./fake_api.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    memberNo: data.memberNo,
                    accountRefNo: data.accountRefNo,
                    disbursmentDate: data.disbursmentDate,
                    branch: data.branch,
                    memberName: data.memberName,
                    employerNo: data.employerNo,
                    employerName: data.employerName,
                    memberIdNo: data.memberIdNo,
                    productType: data.productType,
                    productTypeOptions: data.productTypeOptions,
                    branchOptions: data.branchOptions,
                    principalAmount: data.principalAmount
                });
            });
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
            productTypeOptions: [],
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

    handleSelect(event) {
        // console.log("Hello World")
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-2">.</div>
                <div className="col-md-7">
                    <h3>Add a disbursement</h3>
                    <form className="form-horizontal" onSubmit={this.handleFormSubmit}>
                        <SingleInput
                            inputType={'text'}
                            title={'Member Number'}
                            name={'memberNo'}
                            controlFunc={this.handleInputChange}
                            content={this.state.memberNo}
                            placeholder={''}
                        />
                        <SingleInput
                            inputType={'text'}
                            title={'Account Ref No:'}
                            name={'accountRefNo'}
                            controlFunc={this.handleInputChange}
                            content={this.state.accountRefNo}
                            placeholder={''}
                        />
                        <SingleInput
                            inputType={'text'}
                            title={'Member Name:'}
                            name={'memberName'}
                            controlFunc={this.handleInputChange}
                            content={this.state.memberName}
                            placeholder={'John Doe'}
                        />
                        <SingleInput
                            inputType={'text'}
                            title={'Employer Number:'}
                            name={'employerNo'}
                            controlFunc={this.handleInputChange}
                            content={this.state.employerNo}
                            placeholder={'Employer Number:'}
                        />
                        <SingleInput
                            inputType={'date'}
                            title={'Disbursement Date:'}
                            name={'disbursmentDate'}
                            controlFunc={this.handleInputChange}
                            content={this.state.disbursmentDate}
                            placeholder={''}
                        />
                        <Select
                            name={'branch'}
                            title={'Branch :'}
                            placeholder={'Choose the branch'}
                            controlFunc={this.handleSelect}
                            options={this.state.branchOptions}
                            selectedOption={this.state.branch}
                        />
                        <SingleInput
                            inputType={'number'}
                            title={'Principal Amount:'}
                            name={'principalAmount'}
                            controlFunc={this.handleInputChange}
                            content={this.state.principalAmount}
                            placeholder={''}
                        />
                        <SingleInput
                            inputType={'number'}
                            title={'Member ID NO::'}
                            name={'memberIdNo'}
                            controlFunc={this.handleInputChange}
                            content={this.state.memberIdNo}
                            placeholder={''}
                        />
                        <SingleInput
                            inputType={'text'}
                            title={'Employer Name:'}
                            name={'employerName'}
                            controlFunc={this.handleInputChange}
                            content={this.state.employerName}
                            placeholder={''}
                        />
                        <Select
                            name={'productType'}
                            title={'Product Type:'}
                            placeholder={'Choose the type of product'}
                            controlFunc={this.handleSelect}
                            options={this.state.productTypeOptions}
                            selectedOption={this.state.productType} />

                        <a href="#" onClick={this.handleClearForm}>Clear Form</a>

                        <input type="submit" className="btn btn-warning pull-right"/>
                    </form>
                </div>
                <div className="col-md-3">.</div>
                </div>
        );
    }
}

export default DisbursementForm;
