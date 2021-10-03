export const formatRealtimePredictionData = (predArry, startDate) => {
    const date = new Date(startDate)

    return predArry.map(pred => {
        date.setDate(date.getDate() + 1)
        return {
            prediction: pred,
            date: date.toDateString()
        }
    })
}

export const getPredictionApiSymbol = symbol => {
    switch(symbol){
        case 'QABSY': return 'QAS'
        case 'TLSYY': return 'TLS'
        default: return null
    }
}