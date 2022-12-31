const { generateCat, generateLitter, generatePunnett, generatePhenotype } = require('./genes.js')


describe("generateCat",()=>{
    // Parents with all dominant genes
    const domMum = {
        name: 'Mama',
        sex: 'F',
        genotype:{
                primaryColor: ['B','B'],     // Black (B), chocolate (b), cinnamom (b1)
                orange: ['O','O'],           // Orange (O), not orange (o)
                dilute: ['D','D'],           // Dilute (D), not dilute (d)
                tabby: ['A','A'],            // Tabby (A), not tabby (a)
                white: ['W','W'],            // Not white (W), tuxedo (Ww), white (w)
                furLength: ['L','L'],        // Short fur (L), long fur (l)
        }
    }
    const domDad = {
        name: 'Dad',
        sex: 'M',
        genotype:{
            primaryColor: ['B','B'],     // Black (B), chocolate (b), cinnamom (b1)
            orange: ['O'],           // Orange (O), not orange (o)
            dilute: ['D','D'],           // Dilute (D), not dilute (d)
            tabby: ['A','A'],            // Tabby (A), not tabby (a)
            white: ['W','W'],            // Not white (WW), tuxedo (Ww), white (ww)
            furLength: ['L','L'],        // Short fur (L), long fur (l)
        }
    }
    // Parents with all recessive genes
    const recMum = {
        name: 'Mama',
        sex: 'F',
        genotype:{
                primaryColor: ['b','b'],     // Black (B), chocolate (b), cinnamom (b1)
                orange: ['o','o'],           // Orange (O), not orange (o)
                dilute: ['d','d'],           // Dilute (D), not dilute (d)
                tabby: ['a','a'],            // Tabby (A), not tabby (a)
                white: ['w','w'],            // Not white (W), tuxedo (Ww), white (w)
                furLength: ['l','l'],        // Short fur (L), long fur (l)
        }
    }
    const recDad = {
        name: 'Dad',
        sex: 'M',
        genotype:{
            primaryColor: ['b','b'],     // Black (B), chocolate (b), cinnamom (b1)
            orange: ['o','o'],           // Orange (O), not orange (o)
            dilute: ['d','d'],           // Dilute (D), not dilute (d)
            tabby: ['a','a'],            // Tabby (A), not tabby (a)
            white: ['w','w'],            // Not white (WW), tuxedo (Ww), white (ww)
            furLength: ['l','L'],        // Short fur (L), long fur (l)
        }
    }
    let dominantGeneKittens = generateLitter(domMum,domDad,100)
    let recessiveGeneKittens = generateLitter(recMum,recDad,100)

    test('dominant primaryColor',() => {
        let colors = dominantGeneKittens.map(x => x.genotype.primaryColor.join(''))
        expect(colors.includes('Aa') || colors.includes('aa')).toBeFalsy()
    })
    test('recessive primaryColor',() => {
        let colors = recessiveGeneKittens.map(x => x.genotype.primaryColor.join(''))
        expect(colors.includes('Aa') || colors.includes('AA')).toBeFalsy()
    })
})

describe("generatePunnet",()=>{
    test('AA x AA', () => {
        expect(generatePunnett(['A','A'],['A','A']).squares.join('')).toBe([['A','A'],['A','A'],['A','A'],['A','A']].join(''));
      });
    test('aa x aa', () => {
        expect(generatePunnett(['a','a'],['a','a']).squares.join('')).toBe([['a','a'],['a','a'],['a','a'],['a','a']].join(''));
      });
    test('Aa x Aa', () => {
        expect(generatePunnett(['A','a'],['A','a']).squares.join('')).toBe([['A','A'],['A','a'],['A','a'],['a','a']].join(''));
      });
    test('AA x Aa', () => {
        expect(generatePunnett(['A','A'],['A','a']).squares.join('')).toBe([['a','A'],['A','a'],['A','A'],['A','a']].join(''));
      });
})

describe("generatePhenotype",()=>{
    const cat = {
        sex: 'M',
        genotype:{
            primaryColor: ['B','b'],     // Black (B), chocolate (b), cinnamom (b1)
            orange: ['O','o'],           // Orange (O), not orange (o)
            dilute: ['D','d'],           // Dilute (D), not dilute (d)
            tabby: ['A','a'],            // Tabby (A), not tabby (a)
            white: ['W','w'],            // Not white (W), tuxedo (Ww), white (w)
            furLength: ['L','l'],        // Short fur (L), long fur (l)    
        }
    }
    const expectedPhenotype = {
        color: 'orange and black',
        dilute: false,
        tabby: true,
        white: 1,
        shortFur: true,
    }

    test('color', () => {
        expect(generatePhenotype(cat).color).toBe(expectedPhenotype.color)
      });
    test('dilute', () => {
        expect(generatePhenotype(cat).dilute).toBe(expectedPhenotype.dilute);
      });
    test('tabby', () => {
        expect(generatePhenotype(cat).tabby).toBe(expectedPhenotype.tabby);
      });
    test('white', () => {
        expect(generatePhenotype(cat).white).toBe(expectedPhenotype.white);
      });
    test('shortFur', () => {
        expect(generatePhenotype(cat).shortFur).toBe(expectedPhenotype.shortFur);
      });
})

