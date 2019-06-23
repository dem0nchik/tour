const initialState = {
     search: ''
}

const search = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_WORD':
                return ( {}, { search: action.word })
        default:
            return state
    }
}

export default search