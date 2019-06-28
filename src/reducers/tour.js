import { makeTour } from '../utilits/utilits.js'

const initialState = {
     search: '',
     tour: [],
     filteredTour: [],
     isLogin: false,
     chooseTour: undefined,
     favorite: [],
     pagination: 1,
     tourPagination: []

}

const tour = (state = initialState, action) => {
    switch(action.type) {
        case 'SEARCH_WORD':
                const lTour = state.tour.filter(item => item.title.toLowerCase().includes(action.word.toLowerCase().trim()))
                return ( {...state, pagination: 1, search: action.word,
                     filteredTour: lTour, tourPagination: makeTour(lTour, state.pagination)
                        
                        })
        case 'GET_TOURS':
                return ( { ...state, tour: action.tour,
                          filteredTour: action.tour,
                          tourPagination: makeTour(action.tour, state.pagination)
                        })
        case 'FILTER_OPTION':
                const isDate = (dateTour) => {
                        let dateFrom = Date.parse(action.dateFrom)
                        let dateTo = Date.parse(action.dateTo)
                        let date = false
                        for(let i = dateFrom; i < dateTo; i += 24*3600*1000) {
                                if(new Date(i).toISOString().substr(0,10) === dateTour)
                                        date = true
                        }
                        return date
                }
                
                const fTour = state.tour.filter(item => {
                        if(item.price > action.price && isDate(item.date.strdate))
                                return true
                        else
                                return false
                })
                return ( { ...state,
                                filteredTour: fTour,
                                pagination: 1,
                                tourPagination: makeTour(fTour, state.pagination)
                        })
        case 'USER_LOGIN':
                return ( {...state, isLogin: true})
        case 'CHOOSED_TOUR':
                return ( {...state, chooseTour: action.id})
        case 'ADD_FAVORITE':
                let fav = state.favorite
                fav.push(action.id)
                return ( {...state, favorite: fav})
        case 'PAGINATION':
                        let pag = state.tourPagination
                        const cpag = pag.concat(makeTour(state.filteredTour, state.pagination+1))
                return ( {...state, pagination: ++state.pagination, 
                        tourPagination: cpag})
        default:
            return state
    }
}

export default tour