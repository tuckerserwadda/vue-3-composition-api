<template>
  <div>
    <router-link :to="{name:'Post', params:{id:post.id}}">
      <span>{{post.title}}</span>
        </router-link>
       

  </div>
</template>

<script>
export default {
    props:{
        post:Object
    },
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>