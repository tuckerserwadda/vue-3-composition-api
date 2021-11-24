
/<template>

  <div>
    <div><router-link to="/posts">Posts</router-link></div>
    <div><router-view></router-view></div>
    <div>Watch: {{totalItemsWatch}}</div>
    <div>WatchEffect: {{totalItemsWatchEffect}}</div>
    <h1>{{name}} </h1>
    <div>
      <label for="currencySymbol">currencySymbol</label>
     <select id="currencySymbol" v-model="currencySymbol">
       <option value="$">Dolla($)</option>
       <option value="shs">Shillings(shs)</option>
     </select>
    </div>
    <button @click="placeOrder">order</button>
    <!-- we receive the emited add to cart event using @ -->
    <YammyMeal  v-for="(meal, index) in meals" 
    :key="index" 
    :name="meal.name" 
    :price="meal.price" 
    @addToCart="addItemToCart"/>
  </div>

</template>

<script >
import YammyMeal from "./components/YammyMeal.vue"

/**
 * to have reactive primitive variables(data) for example name, we need to import the the
 * ref function 
 * to make objects and arrays reactive we need to use the reactive function .
 * we are going to create an array of meals to demonstrate 
 * using the watch function we can keep an eye on the reactive data
 * and excute a function whenever that data changes 
 * the watchEffect function works as the watch whoever we dont have access to the old value
 * and we dont need to specify what to watch 
 *  ***********
 * to apass items through nexted components we use 
 * provide and  inject where the parent provides the data and injected in the children . the
 * *********
 * the life cycle hooks that is onmounted are just imported 
 * 
 */
import { ref, reactive, watch, watchEffect, provide, onMounted } from 'vue'
export default{
  components:{YammyMeal},
  setup() {
    const name = ref("Tucker"); // primitive data
    const cart = reactive([])
    const totalItemsWatch = ref(0)
    const totalItemsWatchEffect = ref(0)
    const currencySymbol = ref("$")
    const meals  = reactive([
      {name:"Humberg ", price: 30},
      {name:"Burger ", price: 10}
    ]) // an array and object 
    const price = 10
    // the watch function, takes two arguments, the value to watch and the function to excute
    // the function takes two arguments, the new value and the old value 
    // we are going to watch out cart as we add items to it find the number of items we have 
    // we can watch multiple items
   watch(()=>[...cart], (newValue, oldValue)=>totalItemsWatch.value = newValue.length)
   // the watcheffect function(no need to specify the value to watch ) 
   watchEffect(()=>totalItemsWatchEffect.value= cart.length)
   // we are going to provide the currency sysmbol to the price component 
   // it takes 2 arguments, the variable to be injecte and the value of the variable
   provide("currencySymbol", currencySymbol)
   
    const placeOrder = ()=>{alert("your order has been placed")}
    const addItemToCart = (item)=>{cart.push(item)}
    //calling on mounted life cycle hook
    onMounted(()=>{console.log(name.value)})
    return{name, placeOrder, price, addItemToCart, meals, cart, 
    totalItemsWatch, totalItemsWatchEffect, currencySymbol}
    
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
</style>
