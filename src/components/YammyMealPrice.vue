<template>
    <div>
        <h1>{{ToDolla}}</h1>

    </div>
</template>

<script>
/**
 * we are using inject to pass the dollar sign simbol from the 
 * app. vue to this component. 
 */
import {inject, computed} from "vue"
export default{
    props:{
        price:Number
    },
    setup(props) {
const currencySysmbol = inject('currencySymbol')
const ToDolla = computed(()=>`${currencySysmbol.value}${props.price.toFixed(2)}`)
return{ToDolla}  
}

}
</script>

<style >

</style>