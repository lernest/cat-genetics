<template>
  <div id="app">
    <h1>Generate a kitten</h1>
    <div class="parents">
      <div class="parent mum">
        <h3>Mum</h3>
       <form>
        <!-- <div>
          <label for="mum-name">Name: </label>
          <input id="mum-name" type="text" v-model="mum.name">
        </div> -->
        <div>
          <label for="mum-primary-color">Primary color: </label>
          <select name="primary-color" id="mum-primary-color" v-model="mum.genotype.primaryColor">
            <option value="B,B">[B,B] Black</option>
            <option value="B,b">[B,b] Black</option>
            <option value="B,b1">[B,b1] Black</option>
            <option value="b,b">[b,b] Chocolate</option>
            <option value="b,b1">[b,b1] Chocolate</option>
            <option value="b1,b1">[b1,b1] Cinnamon</option>
          </select>
        </div>

        <div>
          <label for="mum-orange">Orange: </label>
          <select name="orange" id="mum-orange" v-model="mum.genotype.orange">
            <option value="O,O">[O,O] Orange</option>
            <option value="O,o">[O,o] Orange</option>
            <option value="o,o">[o,o] Not orange</option>
          </select>
        </div>
      
        <div>
          <label for="mum-dilute">Dilute: </label>
          <select name="dilute" id="mum-dilute" v-model="mum.genotype.dilute">
            <option value="D,D">[D,D] Not dilute</option>
            <option value="D,d">[D,d] Not dilute</option>
            <option value="d,d">[d,d] Dilute</option>
          </select>
        </div>

        <div>
          <label for="mum-tabby">Tabby: </label>
          <select name="tabby" id="mum-tabby" v-model="mum.genotype.tabby">
            <option value="A,A">[A,A] Tabby</option>
            <option value="A,a">[A,a] Tabby</option>
            <option value="a,a">[a,a] Not tabby</option>
          </select>
        </div>

        <div>
          <label for="mum-white">White: </label>
          <select name="white" id="mum-white" v-model="mum.genotype.white">
            <option value="W,W">[W,W] Not white</option>
            <option value="W,w">[W,w] Not white</option>
            <option value="w,w">[w,w] White</option>
          </select>
        </div>

        <div>
          <label for="mum-fur-length">Fur Length: </label>
          <select name="fur-length" id="mum-fur-length" v-model="mum.genotype.furLength">
            <option value="L,L">[L,L] Short fur</option>
            <option value="L,l">[L,l] Short fur</option>
            <option value="l,l">[l,l] Long fur</option>
          </select>
        </div>
      </form>
      <button class="random-btn" @click="randomizeMum">Randomize</button>
        
      </div>

      <div class="parent dad">
        <h3>Dad</h3>
        <form>
          <!-- <div>
            <label for="dad-name">Name: </label>
            <input id="dad-name" type="text" v-model="dad.name">
          </div> -->
          <div>
            <label for="dad-primary-color">Primary color: </label>
            <select name="primary-color" id="dad-primary-color" v-model="dad.genotype.primaryColor">
              <option value="B,B">[B,B] Black</option>
              <option value="B,b">[B,b] Black</option>
              <option value="B,b1">[B,b1] Black</option>
              <option value="b,b">[b,b] Chocolate</option>
              <option value="b,b1">[b,b1] Chocolate</option>
              <option value="b1,b1">[b1,b1] Cinnamon</option>
            </select>
          </div>
          <div>
            <label for="dad-orange">Orange: </label>
            <select name="orange" id="dad-orange" v-model="dad.genotype.orange">
              <option value="O">[O] Orange</option>
              <option value="o">[o] Not orange</option>
            </select>
          </div>
          <div>
            <label for="dad-dilute">Dilute: </label>
            <select name="dilute" id="dad-dilute" v-model="dad.genotype.dilute">
              <option value="D,D">[D,D] Not dilute</option>
              <option value="D,d">[D,d] Not dilute</option>
              <option value="d,d">[d,d] Dilute</option>
            </select>
          </div>
          <div>
            <label for="dad-tabby">Tabby: </label>
            <select name="tabby" id="dad-tabby" v-model="dad.genotype.tabby">
              <option value="A,A">[A,A] Tabby</option>
              <option value="A,a">[A,a] Tabby</option>
              <option value="a,a">[a,a] Not tabby</option>
            </select>
          </div>
          <div>
            <label for="dad-white">White: </label>
            <select name="white" id="dad-white" v-model="dad.genotype.white">
              <option value="W,W">[W,W] Not white</option>
              <option value="W,w">[W,w] Not white</option>
              <option value="w,w">[w,w] White</option>
            </select>
          </div>
          <div>
            <label for="dad-fur-length">Fur Length: </label>
            <select name="fur-length" id="dad-fur-length" v-model="dad.genotype.furLength">
              <option value="L,L">[L,L] Short fur</option>
              <option value="L,l">[L,l] Short fur</option>
              <option value="l,l">[l,l] Long fur</option>
            </select>
          </div>
        </form>
        <button class="random-btn" @click="randomizeDad">Randomize</button>
      </div>
    </div>
    <div class="buttons">
      <button @click="generateCat">Generate Kitten</button>
    </div>
    <div class="kitten" v-if="kitten.name">
      <h3>Kitten</h3>
      <ul>
        <li>Name: {{ kitten.name }}</li>
        <li>Sex: {{ kitten.sex }}</li>
        <li>Primary color: {{ kitten.genotype.primaryColor }}</li>
        <li>Orange: {{ kitten.genotype.orange }}</li>
        <li>Dilute: {{ kitten.genotype.dilute }}</li>
        <li>Tabby: {{ kitten.genotype.tabby }}</li>
        <li>White: {{ kitten.genotype.white }}</li>
        <li>Fur length: {{ kitten.genotype.furLength }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

// Possible alleles. Used for generating random genotypes.
const alleles = {
  primaryColor:['B','b','b1'],
  orange:['O','o'],
  dilute:['D','d'],
  tabby:['A','a'],
  white:['W','w'],
  furLength:['L','l']
}


import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      mum:{
        name: '',
        sex: 'F',
        genotype:{
          primaryColor: '',     // Black (B), chocolate (b), cinnamom (b1)
          orange: '',           // Orange (O), not orange (o)
          dilute: '',           // Dilute (D), not dilute (d)
          tabby: '',            // Tabby (A), not tabby (a)
          white: '',            // Not white (W), tuxedo (Ww), white (w)
          furLength: '',        // Short fur (L), long fur (l)
        }
      },
      dad:{
        name: '',
        sex: 'M',
        genotype:{
          primaryColor: '',     // Black (B), chocolate (b), cinnamom (b1)
          orange: '',           // Orange (O), not orange (o)
          dilute: '',           // Dilute (D), not dilute (d)
          tabby: '',            // Tabby (A), not tabby (a)
          white: '',            // Not white (W), tuxedo (Ww), white (w)
          furLength: '',        // Short fur (L), long fur (l)
        }
      },
      kitten:{}
      
    }
  },
  methods:{
    randomizeMum(){
      this.mum.name = 'Mum'
      this.mum.genotype = this.generateRandomGenotype('F')
    },
    randomizeDad(){
      this.dad.name = 'Dad'
      this.dad.genotype = this.generateRandomGenotype('M')
    },
    generateRandomGenotype(sex){
      let genotype = {}
      genotype.primaryColor = this.getRandomPair(alleles.primaryColor)
      genotype.orange = this.getRandomPair(alleles.orange)
      genotype.dilute = this.getRandomPair(alleles.dilute)
      genotype.tabby = this.getRandomPair(alleles.tabby)
      genotype.white = this.getRandomPair(alleles.white)
      genotype.furLength = this.getRandomPair(alleles.furLength)

      // Males only have one orange allele
      if(sex=='M'){genotype.orange = genotype.orange[0]}

      return genotype
    },
    getRandomPair(arr){
      // return a random element of an array
      return [arr[Math.floor(Math.random()*arr.length)],arr[Math.floor(Math.random()*arr.length)]].sort().join(',')
    },
    generateCat(){
      let parents = {
        mum: {
          name: this.mum.name.split(','),
          sex: 'F',
          genotype:{
            primaryColor: this.mum.genotype.primaryColor.split(','),    
            orange: this.mum.genotype.orange.split(','),
            dilute: this.mum.genotype.dilute.split(','),
            tabby: this.mum.genotype.tabby.split(','),
            white: this.mum.genotype.white.split(','),
            furLength: this.mum.genotype.furLength.split(','),
          }
        },
        dad: {
          name: this.dad.name.split(','),
          sex: 'M',
          genotype:{
            primaryColor: this.dad.genotype.primaryColor.split(','),    
            orange: this.dad.genotype.orange.split(','),
            dilute: this.dad.genotype.dilute.split(','),
            tabby: this.dad.genotype.tabby.split(','),
            white: this.dad.genotype.white.split(','),
            furLength: this.dad.genotype.furLength.split(','),
          }
        }
      }
      axios.post('http://localhost:3000/cat',parents).then(res => {
        console.log(res.data)
        this.kitten = res.data
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
input{
  padding: 3px;
}
select{
  padding: 3px;
}
button{
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(253, 202, 255)
}
form{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h1,h2,h3,h4{
  text-align: center;
  margin: 0;
  padding: 0
}
.parents{
  display: flex;
  justify-content: center;
  gap: 30px;
  /* text-align: left; */
  line-height: 2.2;
  margin: 10px;
}
.parent{
  border: 1px solid black;
  padding: 10px;
  border-radius: 3px;
}
.mum{
  background-color: rgba(255, 0, 217, 0.3);
}
.dad{
  background-color:rgba(0, 89, 255, 0.3)
}
.kitten{
  border: 1px solid black;
}
.buttons{
  display: flex;
  justify-content: center;
  gap: 10px;
}

.random-btn{
  padding: 3px;
  margin: 0;
}

</style>
