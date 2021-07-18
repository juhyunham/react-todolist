import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div className="navbar">
				<span className="navbar-name">ToDoList</span>
				<span className="navbar-count">{this.props.totalCount}</span>
			</div>
		);
	}
}

export default Navbar;	