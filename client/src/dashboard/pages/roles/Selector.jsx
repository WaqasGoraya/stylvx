import React from "react";
import Select, { components } from "react-select";
import SearchIcon from "./search.svg";
import "./Selector.css";

const customStyles = {
	clearIndicator: base => ({
		...base,
		cursor: "pointer",
		padding: "0 8px"
	}),
	control: base => ({
		...base,
		height: "inherit"
	}),
	dropdownIndicator: (base, state) => ({
		...base,
		cursor: "pointer",
		padding: "0 8px",
		transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)"
	}),
	option: (base, state) => ({
		...base,
		cursor: "pointer",
		backgroundColor: "transparent",
		color: state.isSelected ? "#2684FF" : "black",
		"&:hover": {
			backgroundColor: "white",
			color: "#2684FF"
		}
	}),
	container: base => ({
		...base,
		height: "inherit"
	}),
	valueContainer: base => ({
		...base,
		height: "calc(100% - 4px)",
		fontSize: "12px",
		paddingLeft: 28
	}),
	input: base => ({
		...base,
		position: "absolute",
		margin: "unset",
		padding: "unset",
		left: "28px",
		right: "2px",
		"& > div": {
			width: "100%"
		},
		"& input": {
			maxWidth: "100%"
		}
	}),
	placeholder: base => ({
		...base,
		display: "contents"
	})
};

const Option = props => (
	<components.Option {...props}>
		<div className="MultiSelectDropDown-option-holder">
			<div className="MultiSelectDropDown-checkbox-container">
				<div
					className={`MultiSelectDropDown-checkbox ${
						props.isSelected ? "--selected" : "--unselected"
					}`}
				/>
				<input
					type="checkbox"
					className="MultiSelectDropDown-checkbox-input"
					checked={props.isSelected}
					onChange={() => null}
				/>
			</div>
			<div className="MultiSelectDropDown-option-text">{props.label}</div>
		</div>
	</components.Option>
);

// const ValueContainer = ({ children, ...props }) => (
// 	<components.ValueContainer {...props}>
// 		{!!children && (
// 			{/* <img
// 				className="MultiSelectDropDown-search-img"
// 				src={SearchIcon}
// 				alt=""
// 			/> */}
// 		)}
// 		{children}
// 	</components.ValueContainer>
// );

const MultiValue = ({ selectProps, data }) => {
	const index = selectProps.value.findIndex(
		selected => selected.value === data.value
	);
	const isLastSelected = index === selectProps.value.length - 1;
	if (isLastSelected && !selectProps.inputValue) {
		return (
			<div className="MultiSelectDropDown-selected-value">
				{selectProps.value.map(e => e.label).join(", ")}
			</div>
		);
	}
	return null;
};

const MultiSelectDropDown = ({ options }) => (
	<div className="MultiSelectDropDown-holder">
		<Select
			isMulti
			closeMenuOnSelect={false}
			blurInputOnSelect={false}
			isClearable={false}
			hideSelectedOptions={false}
			placeholder="Select Permissions"
			styles={customStyles}
			components={{ Option, MultiValue }}
			options={options}
		/>
	</div>
);

export default MultiSelectDropDown;
