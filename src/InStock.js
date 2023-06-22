import React from 'react';
import { connect } from 'react-redux';

import { bookDelete, bookUpdateState } from './actions';

class InStock extends React.Component {
	constructor(props) {
			super(props);
			
			this.onStatusClick = this.onStatusClick.bind(this);
			this.onDeleteClick = this.onDeleteClick.bind(this);
		}
	
	
	onStatusClick(e) {
		e.preventDefault();
		
		fetch(`books/${this.props.book._id}`, {
		method: 'PATCH',
		
			body: JSON.stringify({
					done: !this.props.book.done
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			if (res.status === 200) {
				console.log('Updated');
					this.props.dispatch(bookUpdateState(this.props.book._id));
			}
			else {
				console.log('Not updated');
			}
		});		
	}
	
	onDeleteClick(e) {
		e.preventDefault();
		
		fetch(`books/${this.props.book._id}`, {
		method: 'DELETE'
		}).then((res) => {
			if (res.status === 200) {
				console.log('Deleted');
				this.props.dispatch(bookDelete(this.props.book._id));
			}
			else {
				console.log('Not deleted');
			}
		});	
	}
	
	
	render() {
		return (
                  <li className="list-group-item">
                   <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-heading">{this.props.book.name}</div>
                    	<div className="widget-heading">{this.props.book.author}</div>
						{this.props.book.done ? <div className="todo-indicator">Выдана</div> : <div className="todo-indicator">В наличии</div>}
                 
						<div className="widget-content-right">
							<button className="border-0 btn-transition btn btn-outline-success" onClick={this.onStatusClick}>
									<i className="fa fa-check"></i>
							</button>
							<button className="border-0 btn-transition btn btn-outline-danger" onClick={this.onDeleteClick}>
									<i className="fa fa-times"></i>
							</button>
                        </div>
                      </div>
                    </div>
                  </li>
			)
	}  
}

export default connect()(InStock);
