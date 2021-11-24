<template>
    <div>
        <h1>{{post.title}}</h1>

    </div>
</template>

<script>
import usepost from '../composables/usePost'
// because setup has no access to this then we need to use the 
// the vue router composable(useRoute) has to be imported 
import {useRoute} from "vue-router"

export default {
    name:"Post",
    setup () {
        const route = useRoute()
        const {post, fetchOnePost} = usepost()
        // get the id of from the router
        fetchOnePost(route.params.id)

        return {post}
    }
}
</script>

<style lang="scss" scoped>

</style>