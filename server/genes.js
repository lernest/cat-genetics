/*
    Genotype
    [X,X], [X,x], [x,x]

    
    Punnett Square

         X      x
      |--------------
    X |  XX  |   Xx
      |--------------
    x |  Xx  |   xx
      |--------------


    Cat {
        name: string,
        sex: [M,F],
        genotype:{
            primaryColor: [B,b,b1],  // Black, chocolate, cinnamom
            orange: [O,o],           // Orange, not orange
            dilute: [D,d],           // Dilute, not dilute
            tabby: [A,a],            // Tabby, not tabby
            white: [W,w],            // Not white, white
            furLength: [L,l],        // Short fur, long fur
        }
        phenotype:{
            color: string,
            dilute: bool,
            tabby: bool,
            tortie: range(0,3),
            white: [none, tuxedo, white],
            shortFur: bool,
        },
        bio: string
    }

    Determining Phenotype
    1. If male, only take the first of the orange alleles. Only females can be tortie / calico
    2. If female, if its a heterozygote on orange trait, it will be tortie or calico. 
        Randomly generate the amount of tortiness
    3. Orange cats will present as tabby even if they don't carry the gene

*/

const names = require('./names.js')
const { printPunnett, isEqual, stringifyCat } = require('./util.js')

/*
    params: mum and dad cat objects
    returns: one cat
*/
function generateCat(mum, dad){
    let child = {genotype:{}}

    child.name = names[Math.floor(Math.random()*names.length)]
    
    // pick sex of child
    let rand = Math.floor(Math.random()*2)
    child.sex = rand == 0 ?'M':'F'

    child.genotype.primaryColor = pickSample(generatePunnett(mum.genotype.primaryColor, dad.genotype.primaryColor))
    child.genotype.orange = pickSample(generatePunnett(mum.genotype.orange, dad.genotype.orange))
    child.genotype.dilute = pickSample(generatePunnett(mum.genotype.dilute, dad.genotype.dilute))
    child.genotype.tabby = pickSample(generatePunnett(mum.genotype.tabby, dad.genotype.tabby))
    child.genotype.white = pickSample(generatePunnett(mum.genotype.white, dad.genotype.white))
    child.genotype.furLength = pickSample(generatePunnett(mum.genotype.furLength, dad.genotype.furLength))

    // Male only carries one allele for orange
    if(child.sex == 'M'){
        child.genotype.orange = [child.genotype.orange[0]]
    }

    child.phenotype = generatePhenotype(child)

    child.bio = stringifyCat(child)

    return child
}

function generatePhenotype({genotype, sex}){
    const { primaryColor, orange, dilute, tabby, white, furLength } = genotype
    let phenotype = {}

    // Tabby
    phenotype.tabby = isEqual(tabby,['a','a']) ? false : true // this will be overwritten if cat is orange


    // Color
    // [O, O] or [O] => all orange
    if(!orange.includes('o')){
        phenotype.color = 'orange'
        // If its all orange, must be a tabby
        phenotype.tabby = true
    }
    
    // [o,o] or [o] => just primary color
    else if(!orange.includes('O')){
        if(primaryColor.includes('B')){phenotype.color = 'black'}
        else if(primaryColor.includes('b')){phenotype.color = 'chocolate'}
        else{phenotype.color = 'cinnamon'}
    }
    // [O,o] => F tortie
    else{
        if(sex == 'F'){
            if(orange[0] != orange[1]){
                // tortie/calico on a scale of 0-3
                phenotype.tortie = Math.floor(Math.random()*4)
            }
        }
        if(primaryColor.includes('B')){phenotype.color = 'orange and black'}
        else if(primaryColor.includes('b')){phenotype.color = 'orange and chocolate'}
        else{phenotype.color = 'orange and cinnamon'}
    }

    // White / Tuxedo / Black
    if(isEqual(white,['w','w'])){
        phenotype.white = 2
        phenotype.color = 'white'
    }
    else if (isEqual(white,['W','w'])){
        phenotype.white = 1
        phenotype.tuxedo = true
    }
    else {
        phenotype.white = 0
    }

    // Dilute
    phenotype.dilute = isEqual(dilute,['d','d']) ? true : false

    // Fur length
    phenotype.shortFur = isEqual(furLength,['l','l']) ? false : true

    return phenotype
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
    returns: punnettSquare {
                left: PairOne,
                right: PairTwo,
                squares: [[X,X],[X,x],[X,x],[x,x]]
            }
*/
function generatePunnett(pairOne, pairTwo){
    let punnettSquare = {}

    // Save left and right parents
    punnettSquare.left = pairOne
    punnettSquare.right = pairTwo

    // Generate square
    punnettSquare.squares = []
    pairOne.forEach(x => {
        // Pair each element with every other element. Sort to keep uppercase first
        pairTwo.forEach(y =>punnettSquare.squares.push([x,y].sort()))
    })

    return punnettSquare
}

/*
    params: a punnett square, but we only need squares[]
    returns: a pair [X,x]
*/
function pickSample({squares}){
    // Generate random number
    let randomNum = Math.floor(Math.random()*squares.length)

    return squares[randomNum]
}

module.exports = {generateCat, generateLitter}