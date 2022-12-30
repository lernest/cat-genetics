<template>
  <div id="app">
    <h1>Generate a kitten</h1>
    <div class="parents">
      <div class="parent mum">
        <h3>Mum</h3>
        <div>
          <label for="mum-name">Name: </label>
          <input id="mum-name" type="text" v-model="mum.name">
        </div>

        <div>
          <label for="mum-primary-color">Primary color: </label>
          <select name="primary-color" id="mum-primary-color" v-model="mum.primaryColor">
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
          <select name="orange" id="mum-orange" v-model="mum.orange">
            <option value="O,O">[O,O] Orange</option>
            <option value="O,o">[O,o] Orange</option>
            <option value="o,o">[o,o] Not orange</option>
          </select>
        </div>
      
        <div>
          <label for="mum-dilute">Dilute: </label>
          <select name="dilute" id="mum-dilute" v-model="mum.dilute">
            <option value="D,D">[D,D] Not dilute</option>
            <option value="D,d">[D,d] Not dilute</option>
            <option value="d,d">[d,d] Dilute</option>
          </select>
        </div>

        <div>
          <label for="mum-tabby">Tabby: </label>
          <select name="tabby" id="mum-tabby" v-model="mum.tabby">
            <option value="A,A">[A,A] Tabby</option>
            <option value="A,a">[A,a] Tabby</option>
            <option value="a,a">[a,a] Not tabby</option>
          </select>
        </div>

        <div>
          <label for="mum-white">White: </label>
          <select name="white" id="mum-white" v-model="mum.white">
            <option value="W,W">[W,W] Not white</option>
            <option value="W,w">[W,w] Not white</option>
            <option value="w,w">[w,w] White</option>
          </select>
        </div>

        <div>
          <label for="mum-fur-length">Fur Length: </label>
          <select name="fur-length" id="mum-fur-length" v-model="mum.furLength">
            <option value="L,L">[L,L] Short fur</option>
            <option value="L,l">[L,l] Short fur</option>
            <option value="l,l">[l,l] Long fur</option>
          </select>
        </div>
      </div>

      <div class="parent dad">
        <h3>Dad</h3>
        <div>
          <label for="dad-name">Name: </label>
          <input id="dad-name" type="text" v-model="dad.name">
        </div>

        <div>
          <label for="dad-primary-color">Primary color: </label>
          <select name="primary-color" id="dad-primary-color" v-model="dad.primaryColor">
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
          <select name="orange" id="dad-orange" v-model="dad.orange">
            <option value="O,O">[O,O] Orange</option>
            <option value="O,o">[O,o] Orange</option>
            <option value="o,o">[o,o] Not orange</option>
          </select>
        </div>
      
        <div>
          <label for="dad-dilute">Dilute: </label>
          <select name="dilute" id="dad-dilute" v-model="dad.dilute">
            <option value="D,D">[D,D] Not dilute</option>
            <option value="D,d">[D,d] Not dilute</option>
            <option value="d,d">[d,d] Dilute</option>
          </select>
        </div>

        <div>
          <label for="dad-tabby">Tabby: </label>
          <select name="tabby" id="dad-tabby" v-model="dad.tabby">
            <option value="A,A">[A,A] Tabby</option>
            <option value="A,a">[A,a] Tabby</option>
            <option value="a,a">[a,a] Not tabby</option>
          </select>
        </div>
      <div>
        <label for="dad-white">White: </label>
        <select name="white" id="dad-white" v-model="dad.white">
          <option value="W,W">[W,W] Not white</option>
          <option value="W,w">[W,w] Not white</option>
          <option value="w,w">[w,w] White</option>
        </select>
      </div>

      <div>
        <label for="dad-fur-length">Fur Length: </label>
        <select name="fur-length" id="dad-fur-length" v-model="dad.furLength">
          <option value="L,L">[L,L] Short fur</option>
          <option value="L,l">[L,l] Short fur</option>
          <option value="l,l">[l,l] Long fur</option>
        </select>
      </div>
    </div>
    </div>
    <button @click="generateCat">Generate</button>
    <div class="kitten" v-if="kitten.name">
      <h3>Kitten</h3>
      <ul>
        <li>Name: {{ kitten.name }}</li>
        <li>Sex: {{ kitten.sex }}</li>
        <li>Primary color: {{ kitten.primaryColor }}</li>
        <li>Orange: {{ kitten.orange }}</li>
        <li>Dilute: {{ kitten.dilute }}</li>
        <li>Tabby: {{ kitten.tabby }}</li>
        <li>White: {{ kitten.white }}</li>
        <li>Fur length: {{ kitten.furLength }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data(){
    return{
      mum:{
        name: '',
        primaryColor: '',     // Black (B), chocolate (b), cinnamom (b1)
        orange: '',           // Orange (O), not orange (o)
        dilute: '',           // Dilute (D), not dilute (d)
        tabby: '',            // Tabby (A), not tabby (a)
        white: '',            // Not white (W), tuxedo (Ww), white (w)
        furLength: '',        // Short fur (L), long fur (l)
        sex: 'F',
      },
      dad:{
        name: '',
        primaryColor: '',     // Black (B), chocolate (b), cinnamom (b1)
        orange: '',           // Orange (O), not orange (o)
        dilute: '',           // Dilute (D), not dilute (d)
        tabby: '',            // Tabby (A), not tabby (a)
        white: '',            // Not white (W), tuxedo (Ww), white (w)
        furLength: '',        // Short fur (L), long fur (l)
        sex: 'M',
      },
      kitten:{}
      
    }
  },
  methods:{
    generateCat(){
      let parents = {
        mum: {
          name: this.mum.name.split(','),
          primaryColor: this.mum.primaryColor.split(','),    
          orange: this.mum.orange.split(','),
          dilute: this.mum.dilute.split(','),
          tabby: this.mum.tabby.split(','),
          white: this.mum.white.split(','),
          furLength: this.mum.furLength.split(','),
          sex: 'F'
        },
        dad: {
          name: this.dad.name.split(','),
          primaryColor: this.dad.primaryColor.split(','),    
          orange: this.dad.orange.split(','),
          dilute: this.dad.dilute.split(','),
          tabby: this.dad.tabby.split(','),
          white: this.dad.white.split(','),
          furLength: this.dad.furLength.split(','),
          sex: 'F'
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h3{
  text-align: center;
  margin: 0;
}
.parents{
  display: flex;
  justify-content: center;
  gap: 30px;
  text-align: left;
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
button{
  padding: 10px;
  border-radius: 5px;
  background-color: rgb(253, 202, 255)
}
input{
  padding: 3px;
}
select{
  padding: 3px;
}
</style>
