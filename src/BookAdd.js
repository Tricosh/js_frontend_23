import React from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { todoAdd } from './actions';


class BookAddInner extends React.Component {
	constructor(props){
			super(props);
			
			this.state = {
				name: '',
				author: ''
			}
			
			this.onNameChange = this.onNameChange.bind(this);
			this.onAuthorChange = this.onAuthorChange.bind(this);
			this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
		}
	
	
	onNameChange(e) {
		e.preventDefault();
		
		this.setState({
			name: e.target.value	
		});
		
	}
	
	onAuthorChange(e) {
		e.preventDefault();
		
		this.setState({
		author: e.target.value	
		});
		
	} 
	
	onAddFormSubmit(e) {
		console.log(this.props.onBookAdd);
		e.preventDefault();
		
		fetch('books', {
			method: 'POST',
			body: JSON.stringify({
					name: this.state.name,
					author: this.state.author
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return res.json();
		}).then((data) => {
			this.props.dispatch(todoAdd(data._id, data.name, data.author));
			this.props.history('/');
		});	
	}
	
	
	render() {
		return (		  
		  <div className="card-hover-shadow-2x mb-3 card">
			<div className="card-header-tab card-header">
				<div className="card-header-title font-size-lg font-weight-bold">
					<i className="fa fa-book"></i>&nbsp;Добавить книгу
				</div> 
			</div>
				<form onSubmit={this.onAddFormSubmit}>
				<div className="widget-content">
					<div className="widget-content-wrapper">
					
						<input type="text" value={this.state.name} onChange={this.onNameChange} placeholder="Название" className="form-control" />
						<input type="text" value={this.state.author} onChange={this.onAuthorChange} placeholder="Автор" className="form-control" />
						<input type="submit" value="Добавить" className="btn btn-primary" />
					</div>
				</div>
				</form>
				<div className="d-block text-right card-footer">
					<NavLink to='/' className="btn btn-primary">Вернуться к списку</NavLink>
				</div>
		  </div>
		)
	}  
}

const BookAdd = (props) => {
	return (
		<BookAddInner {...props} history={useNavigate()} />
	)
}

export default connect()(BookAdd);
