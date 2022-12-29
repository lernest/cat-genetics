// helper function to check array equality
function isEqual(a, b){
    return JSON.stringify(a) === JSON.stringify(b);
}

function stringifyCat({name, sex, phenotype}){
    return `${name} is a ${phenotype.shortFur?'short-haired':'long-haired'} ${phenotype.color}${phenotype.dilute?' dilute':''}${phenotype.tabby?' tabby':''} ${sex=='F'?'girl':'boy'}`
}

/*
    params: a punnet square
*/
function printPunnet({left, right, squares}){    
    let strBuffer = '************************************\n'
    strBuffer += `          ${right[0]}          ${right[1]}\n`
    strBuffer += `    -------------------------\n`
    strBuffer += `  ${left[0]} |     ${squares[0].join('')}    |    ${squares[1].join('')}     |\n`
    strBuffer += `    |           |           |\n`
    strBuffer += `    |-----------|-----------|\n`
    strBuffer += `  ${left[1]} |     ${squares[2].join('')}    |    ${squares[3].join('')}     |\n`
    strBuffer += `    |           |           |\n`
    strBuffer += `    -------------------------\n`
    strBuffer += '************************************\n'
    console.log(strBuffer)
}

module.exports = {printPunnet, isEqual, stringifyCat}