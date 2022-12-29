/*
    Genotype
    [X,X], [X,x], [x,x]

    
    Punnet Square

         X      x
      |--------------
    X |  XX  |   Xx
      |--------------
    x |  Xx  |   xx
      |--------------


    Cat {
        primaryColor: [B,b,b1],  // Black, chocolate, cinnamom
        orange: [O,o],           // Orange, not orange
        dilute: [D,d],           // Dilute, not dilute
        tabby: [A,a],            // Tabby, not tabby
        furLength: [L,l],        // Short fur, long fur
        sex: [M,F]
    }

    Determining Phenotype
    1. If male, only take the first of the orange alleles. Only females can be tortie / calico
    2. If female, if its a heterozygote on orange trait, it will be tortie or calico. 
        Randomly generate the amount of tortiness

*/

const mum = {
    primaryColor: ['B','b'],     // Black (B), chocolate (b), cinnamom (b1)
    orange: ['O','o'],           // Orange (O), not orange (o)
    dilute: ['D','d'],           // Dilute (D), not dilute (d)
    tabby: ['A','a'],            // Tabby (A), not tabby (a)
    furLength: ['L','l'],        // Short fur (L), long fur (l)
    sex: 'F'
}

const dad = {
    primaryColor: ['B','b'],     // Black (B), chocolate (b), cinnamom (b1)
    orange: ['O','o'],           // Orange (O), not orange (o)
    dilute: ['D','d'],           // Dilute (D), not dilute (d)
    tabby: ['A','a'],            // Tabby (A), not tabby (a)
    furLength: ['L','l'],        // Short fur (L), long fur (l)
    sex: 'M'
}

/*
    params: mum and dad cat objects
    returns: one cat
*/
function generateCat(mum, dad){
    let child = {}
    
    // pick sex of child
    let rand = Math.floor(Math.random()*2)
    child.sex = rand == 0 ?'M':'F'

    child.primaryColor = pickSample(generatePunnet(mum.primaryColor, dad.primaryColor))
    child.orange = pickSample(generatePunnet(mum.orange, dad.orange))
    child.dilute = pickSample(generatePunnet(mum.dilute, dad.dilute))
    child.tabby = pickSample(generatePunnet(mum.tabby, dad.tabby))
    child.furLength = pickSample(generatePunnet(mum.furLength, dad.furLength))

    return child
}


function generateLitter(mum, dad, num){
    if(!num){
        // if no number is passed in, generate random number 2-10
        num = 2 + Math.floor(Math.random()*8)
    }
    let litter = []
    for(let i=0; i<num; i++){
        litter.push(generateCat(mum,dad))
    }
    return litter
}

/*  
    params: pairOne [X,x], pairTwo [X,x]
    returns: punnetSquare {
                left: PairOne,
                right: PairTwo,
                squares: [[X,X],[X,x],[X,x],[x,x]]
            }
*/
function generatePunnet(pairOne, pairTwo){
    let punnetSquare = {}

    // Save left and right parents
    punnetSquare.left = pairOne
    punnetSquare.right = pairTwo

    // Generate square
    punnetSquare.squares = []
    pairOne.forEach(x => {
        // Pair each element with every other element. Sort to keep uppercase first
        pairTwo.forEach(y =>punnetSquare.squares.push([x,y].sort()))
    })

    return punnetSquare
}

/*
    params: a punnet square, but we only need squares[]
    returns: a pair [X,x]
*/
function pickSample({squares}){
    // Generate random number
    let randomNum = Math.floor(Math.random()*squares.length)

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



// console.log('Generating punnet square...')
// let punnet = generatePunnet(['L','l'],['L','l'])
// printPunnet(punnet)
// // console.log(punnet)

// console.log('Picking samples...')
// for(let i=0; i<15; i++){
//     console.log(pickSample(punnet))
// }