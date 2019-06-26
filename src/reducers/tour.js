const initialState = {
     search: '',
     tour: [],
     filteredTour: [],
     isLogin: false,
     chooseTour: undefined
}

const tour = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_WORD':
                return ( {...state, search: action.word,
                     filteredTour: state.tour.filter(item => item.title.toLowerCase().includes(action.word.toLowerCase().trim())  )})
        case 'GET_TOURS':
                return ( { ...state, tour: action.tour, filteredTour: action.tour})
        case 'FILTER_OPTION':
                return ( { ...state,
                                filteredTour: state.tour.filter(item => {
                                    if(item.price > action.price)
                                        return true
                                    else
                                        return false
                                })
                        })
        case 'USER_LOGIN':
                return ( {...state, isLogin: true})
        case 'CHOOSED_TOUR':
                return ( {...state, chooseTour: action.id})
        default:
            return state
    }
}

export default tour