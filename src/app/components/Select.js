import React from 'react';

const Select = (props) => (
	<div className="form-group form-group-sm">
		<label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">{props.title}:</label>
        <div className="col-sm-9">
            <select
                name={props.name}
                value={props.selectedOption}
                onChange={props.controlFunc}
                className="form-select form-control"
                id="formGroupInputSmall">
                <option value="">{props.placeholder}</option>
                {props.options.map(opt => {
                    return (
                        <option
                            key={opt}
                            value={opt}>{opt}</option>
                    );
                })}
            </select>
        </div>
	</div>
);

Select.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOption: React.PropTypes.string,
	controlFunc: React.PropTypes.func.isRequired,
	placeholder: React.PropTypes.string
};

export default Select;