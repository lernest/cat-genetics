// this file is only used for manual testing

const { generateCat, generateLitter } = require('./genes.js')
// const { stringifyCat, writeBio } = require('./util.js')


const mum = {
    name: 'Mama',
    sex: 'F',
    genotype:{
            primaryColor: ['B','b'],     // Black (B), chocolate (b), cinnamom (b1)
            orange: ['O','o'],           // Orange (O), not orange (o)
            dilute: ['D','d'],           // Dilute (D), not dilute (d)
            tabby: ['A','a'],            // Tabby (A), not tabby (a)
            white: ['W','w'],            // Not white (W), tuxedo (Ww), white (w)
            furLength: ['L','l'],        // Short fur (L), long fur (l)
    }
}

const dad = {
    name: 'Dad',
    sex: 'M',
    genotype:{
        primaryColor: ['B','b'],     // Black (B), chocolate (b), cinnamom (b1)
        orange: ['O','o'],           // Orange (O), not orange (o)
        dilute: ['D','d'],           // Dilute (D), not dilute (d)
        tabby: ['A','a'],            // Tabby (A), not tabby (a)
        white: ['W','w'],            // Not white (WW), tuxedo (Ww), white (ww)
        furLength: ['L','l'],        // Short fur (L), long fur (l)
    }
}

let kitten = generateCat(mum,dad)
console.log(kitten)

// let kittens = generateLitter(mum,dad,20)
// console.log(`Proud Mama has given birth to a litter of ${kittens.length} kittens!`)
// kittens.forEach((x,i) => console.log(`${i+1}. ${x.bio}`))

