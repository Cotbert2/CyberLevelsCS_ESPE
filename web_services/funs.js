 const getRandomNum = () => {
    //rondon Num between 1 and 1000
    return {
        randomNum :Math.floor(Math.random() * 1000) + 1
    }
}

module.exports = { getRandomNum }