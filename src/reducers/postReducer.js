var initialState = {
	edit_form: false
}

const postReducer = (state = initialState, action) => {
	switch(action.type) {
		// case 'ADD_POST':
		// 	return state.concat([action.data]);
		// case 'DELETE_POST':
		// 	return state.filter((post)=>post.id !== action.id);
		// case 'EDIT_POST':
		// 	return state.map((post) => post.id === action.id ? {...post, editing:!post.eiditing} : post);
		// case 'UPDATE':
		// 	return state.map((post) => {
		// 		if(post.id === action.id) {
		// 			return {
		// 				...post,
		// 				title:action.data.newTitle,
		// 				message:action.data.newMessage,
		// 				editing: !post.editing
		// 			}
		// 		}else {
		// 			return post;
		// 		}
		// 	})
		case 'EDIT_POST':
			return {...state, edit_form: !state.edit_form};
		default:
			return state;
	}
}

export default postReducer;