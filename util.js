const { activities, preActivity } = require('./activities')

// helper function to check array equality
function isEqual(a, b){
    return JSON.stringify(a) === JSON.stringify(b);
}

function stringifyCat({name, sex, phenotype}){
    let color = ''
    // dilute black is gray
    if(phenotype.dilute && phenotype.color == 'black'){
        color = 'gray'
    }
    else if(phenotype.dilute && phenotype.color == 'white'){
        color = 'white'
    }
    else if(phenotype.dilute){
        color = 'dilute '+phenotype.color
    }
    else{
        color = phenotype.color
    }

    let phenotypeStr = `${name} is a ${phenotype.shortFur?'short-haired':'long-haired'} ${color}${phenotype.tuxedo?' tuxedo':''}${phenotype.tabby?' tabby':''} ${sex=='F'?'girl':'boy'}!`
    let bioStr = writeBio(name,sex)
    
    return `${phenotypeStr} ${bioStr}`
}

function writeBio(name, sex){
    return `${preActivity(sex)} ${activities[Math.floor(Math.random()*activities.length)]}.`
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

module.exports = {printPunnet, isEqual, stringifyCat, writeBio}