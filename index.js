/*
    Allele
    [X,X], [X,x], [x,x]

    
    Punnet Square

         X      x
    X |--------------
      |  XX  |   Xx
      |--------------
    x |  Xx  |   xx
      |--------------

*/

// params: alleleOne [X,x], alleleTwo [X,x]
// returns: punnetSquare [[X,X],[X,x],[X,x],[x,x]]
function generatePunnet(alleleOne, alleleTwo){
    let punnetSquare = {}

    // Save left and right parents
    punnetSquare.left = alleleOne
    punnetSquare.right = alleleTwo

    punnetSquare.squares = []
    alleleOne.forEach(x => {
        alleleTwo.forEach(y =>punnetSquare.squares.push([x,y]))
    })

    return punnetSquare
}

function printPunnet({left, right, squares}){
    // Always print uppercase first
    squares = squares.map(x=>x.sort())
    
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

printPunnet(generatePunnet(['X','x'],['X','x']))