export const makeTour = (data, pagination) => {
    let datalength
    if(data.length < 3)
            return data
    else {
            if( data.length >= pagination * 3 ) {
                    datalength = pagination * 3
                    let stour = []
                    for(let i = datalength-3; i < datalength; i++)
                            stour.push(data[i])
                    return stour
            }
            else {
                    let pag = pagination * 3
                    datalength = data.length-1 - pag
                    let stour = []
                    for(let i = (pag-3); i < data.length; i++)
                            stour.push(data[i])
                    return stour
            }
    }
}