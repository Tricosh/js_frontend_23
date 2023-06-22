import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import InStock from './InStock';

class BookList extends React.Component {
  
	render() {
	  return (		  
		  <div className="card-hover-shadow-2x mb-3 card">
			<div className="card-header-tab card-header">
				<div className="card-header-title font-size-lg font-weight-bold">
					<i className="fa fa-book"></i>&nbsp;Список книг библиотеки
				</div> 
			</div>
			<div className="card-header-tab card-header">
				<div className="ps-content">
					<span className="list-header-title">Название</span>
					<span className="list-header-title-2">Автор</span>
					<span className="list-header-title">Наличие</span>
				</div>
				
			</div>
			<div className="scroll-area-sm">
			  <perfect-scrollbar className="ps-show-limits">
				<div style={{position: "static"}} className="ps ps--active-y">
				  <div className="ps-content">
						<ul className=" list-group list-group-flush">
						{
							this.props.books.map((book) => {
								return (
									<InStock book={book} key={book._id} />
								)
							})
						}
						</ul>
				  </div>
				</div>
			  </perfect-scrollbar>
			</div>
				<div className="d-block text-right card-footer">
					<NavLink to='/add' className="btn btn-primary">Добавить книгу</NavLink>
				</div>
		  </div>
	    );
	}  
}

function mapStateToProps(state) {
	return {
		books: [...state.books]
	}
}

export default connect(mapStateToProps)(BookList);
