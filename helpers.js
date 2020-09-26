const findMulitpleMin = (arr) => {
    let min = Infinity;
    let minData = [];
    arr.forEach((num, index) => {
        if (num > min) return;
        
        if(num === min) {
            minData.push({value: num, index : index})
        }
    
        if(num < min) {
            min = num;
            minData = [];
            minData.push({value: num, index : index})
        }
    
    })
    return { minData, arr};
}

module.exports.findMulitpleMin = findMulitpleMin;