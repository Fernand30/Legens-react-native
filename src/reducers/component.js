const initialState = {
	root: null,
};

export default function componentReducer(state = initialState, action) {
	switch (action.type) {
		case 'set_root':
			state.root = action.root;
			return state;
		default:
			return state;
	}
}
