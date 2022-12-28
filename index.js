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

    return punnetSquare.squares
}

// function printPunnet(square){
//     let strBuffer = ''
//     square.forEach(x => {
//         strBuffer += 
//     })
// }

console.log(generatePunnet(['X','x'],['X','x']))