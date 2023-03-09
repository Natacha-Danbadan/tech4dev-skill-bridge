const createOrderObj = (num) => {
    let orderObject = {}
    for (let i = 1; i <= num; i++) {
        orderObject[i] = i
    }

    return orderObject
}

export default createOrderObj