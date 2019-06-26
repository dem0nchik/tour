export const searchWord = word => ({
    type: 'SEARCH_WORD',
    word
})

export const getTours = tour => ({
    type: 'GET_TOURS',
    tour
})

export const filterOption = (duration, price, dateFrom, dateTo) => ({
    type: 'FILTER_OPTION',
    duration,
    price,
    dateFrom,
    dateTo
})

export const userLogin = () => ({
    type: 'USER_LOGIN'
})

export const choosedTour = (id) => ({
    type: 'CHOOSED_TOUR',
    id
})