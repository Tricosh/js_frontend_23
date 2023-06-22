import {combineReducers} from 'redux';

import {BOOK_ADD, BOOK_ADD_ALL, BOOK_DELETE, BOOK_UPDATE_STATE} from './actions';


function todo(state = [], action) {
	switch (action.type) {
		case BOOK_ADD:
		return [
			...state, 
			{
				_id: action._id, 
				name: action.name,
				author: action.author,
				done: false
			}
		]
		case BOOK_ADD_ALL:
			return [
				...action.todo_list
			]
		case BOOK_DELETE:
			return state.filter(function(book) {
				  return book._id !== action._id;
			  })
		case BOOK_UPDATE_STATE:
			return state.map(function(book) {
				  if (book._id === action._id) {
					  return {...book, done: !book.done}
				  }
				  return book 
			  })
		default: 
		  return state
	}
}

export default combineReducers({
	books: todo
})