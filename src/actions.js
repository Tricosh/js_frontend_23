export const BOOK_ADD = 'BOOK_ADD'
export const BOOK_ADD_ALL = 'BOOK_ADD_ALL'
export const BOOK_DELETE = 'BOOK_DELETE'
export const BOOK_UPDATE_STATE = 'BOOK_UPDATE_STATE'


export function todoAdd(_id, name, author) {
	return { type: BOOK_ADD, _id, name, author };
}

export function bookAddAll(todo_list) {
	return { type: BOOK_ADD_ALL, todo_list };
}

export function bookDelete(_id) {
	return { type: BOOK_DELETE, _id };
}

export function bookUpdateState(_id) {
	return { type: BOOK_UPDATE_STATE, _id };
}