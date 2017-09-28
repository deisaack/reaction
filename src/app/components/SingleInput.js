import React from 'react';

const SingleInput = (props) =>(
	<div className="form-group form-group-sm">
		<label className="col-sm-3 control-label" htmlFor="formGroupInputSmall">{props.title}</label>
		<div className="col-sm-9">
			<input className="form-control"
				   name={props.name} type={props.inputType}
				   id="formGroupInputSmall"
				   value={props.content}
				   onChange={props.controlFunc}
				   placeholder={props.placeholder}
			/>
		</div>
	</div>
);
SingleInput.propTypes = {
	inputType: React.PropTypes.oneOf(['text', 'number']).isRequired,
	title: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired,
	controlFunc: React.PropTypes.func.isRequired,
	content: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number,
	]).isRequired,
	placeholder: React.PropTypes.string,
};

export default SingleInput;