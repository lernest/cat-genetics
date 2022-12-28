/*
    Allele
    [X,X], [X,x], [x,x]

    
    Punnet Square

         X      x
      |--------------
    X |  XX  |   Xx
      |--------------
    x |  Xx  |   xx
      |--------------

*/


/*  
    params: alleleOne [X,x], alleleTwo [X,x]
    returns: punnetSquare {
                left: alleleOne,
                right: alleleTwo,
                squares: [[X,X],[X,x],[X,x],[x,x]]
            }
*/
function generatePunnet(alleleOne, alleleTwo){
    let punnetSquare = {}

    // Save left and right parents
    punnetSquare.left = alleleOne
    punnetSquare.right = alleleTwo

    // Generate square
    punnetSquare.squares = []
    alleleOne.forEach(x => {
        // Pair each element with every other element. Sort to keep uppercase first
        alleleTwo.forEach(y =>punnetSquare.squares.push([x,y].sort()))
    })

    return punnetSquare
}

/*
    params: a punnet square, but we only need squares[]
    returns: an allele [X,x]
*/
function pickSample({squares}){
    // Generate random number 0-3
    let randomNum = Math.floor(Math.random()*4)

    return squares[randomNum]
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

// function printUnlimited({left, right, squares}){
//     // print top row
//     let strBuffer = '    '
//     right.forEach(x => {
//         strBuffer += `      ${x}      `
//     })
//     strBuffer += '\n    '

//     // print line
//     right.forEach(x => strBuffer += '-------------')
//     strBuffer += '\n    '

//     // left.forEach(x => {
//     //     strBuffer += `${x} |`
//     //     right.forEach
//     // })
//     console.log(strBuffer)
    
// }



console.log('Generating punnet square...')
let punnet = generatePunnet(['A','a'],['A','a'])
printPunnet(punnet)

console.log('Picking samples...')
for(let i=0; i<15; i++){
    console.log(pickSample(punnet))
}