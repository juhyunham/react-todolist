import React, {memo} from 'react';

const HabitAddForm = memo((props) => {
	const formRef = React.createRef();
	const inputRef = React.createRef();
	const buttonRef = React.createRef();

	const onSubmit = (event) => {
		event.preventDefault()
		const name = inputRef.current.value;
		name && props.onAdd(name);

		inputRef.current.value = ''  
		formRef.current.reset();
	}

	return (
		<form ref={formRef} className="add-form" onSubmit={onSubmit}>
			<input ref={inputRef} type="text" className="add-input" placeholder="할 일을 입력해 주세요." />
			<button ref={buttonRef} type="button" className="add-button" onClick={onSubmit}>Add</button>
		</form>
	);
});

export default HabitAddForm;	