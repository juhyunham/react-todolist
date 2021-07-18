import React, { useEffect, useState, useRef, useCallback } from 'react';

const SimpleHabit = (props) => {
	const [count, setCount ] = useState(0)
	const spanRef = useRef()

	const handleIncrement = useCallback(() => {
		setCount(count + 1)
	})

	useEffect(() => {
		console.log(`${count}`);
	}, [])

	return (
		<li className="habit">
			<span ref={ spanRef } className="habit-name">Reading</span>
			<span className="habit-counter">{count}</span>
			<button className="habit-button habit-increase" onClick={handleIncrement}>
			+
			</button>
		</li>
		)
}

export default SimpleHabit;