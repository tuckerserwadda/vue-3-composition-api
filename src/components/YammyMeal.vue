<template>
    <div>
        <div>
        <strong>{{name}} </strong>
           <span> 
               <YammyMealPrice :price="price"/>
                <button @click="addToCart">Add to cart</button>
           </span>
           
        </div>

    </div>
</template>

<script setup>
/**
 * the computed property, we are going to convert the price to dollar
 * using the watch function we can keep an eye on the reactive data
 * and excute a function whenever that data changes 
 * 
 * **********
 * we can use the setup attribute inside the script tag
 * that way we will not need the return, export default and naming components 
 * we will need to definw the props and the emit
 * NOTE***
 * the setup attribute is usefull when single page libraries like vite are used
 */
import YammyMealPrice from './YammyMealPrice.vue'
const props = defineProps({
        name: String,
        price:Number

})
    const addToCart =()=>emit("addToCart", props.name)

    /**
     * the setup takes two parameters, props and context
     * the context gives access to the component attr, slots and emit function 
     * emit is used to emit an event or a value from a child component to the parent
     * so now we are going to emit the addTocart event and the name  to the app.vue
     * 
     */
    const emit = defineEmits(['addToCart'])

</script>

<style lang="scss" scoped>

</style>