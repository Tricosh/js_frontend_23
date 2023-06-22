import React from 'react';
import { Provider, connect } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import BookList from './BookList';
import BookAdd from './BookAdd';
import { bookAddAll } from './actions';

class App extends React.Component { 
  componentDidMount() {
		fetch('books').then(function(res) {
			return res.json();
			}).then((data) => {
				this.props.dispatch(bookAddAll(data));
		});
	}
  
	render() {
	  return (
			<div className="row d-flex justify-content-center container">
				<div className="col-md-8">
					<Provider store={this.props.store}>
						<Router>
							<Routes>
								<Route path="/" element={<BookList />} />
								<Route path="/add" element={<BookAdd />} />
							</Routes>
						</Router>
					</Provider>
				</div>
			</div>	
	    );
	}  
}

export default connect()(App);
