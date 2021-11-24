<template>
    <div v-if="posts">
  
       <div>
           <PostCard v-for="(post, index) in posts.slice(0, 10)" :key="index" :post='post'/>
        </div>
  

    </div>
    <h1>my posts</h1>
</template>

<script>
import usePost from "../composables/usePost"
import PostCard from "../components/PostCard.vue"

export default {
    name:"Posts",
    components:{PostCard},
    setup () {
        const {posts, fetchAllPosts} = usePost()
        // call the fetch all to fill the posts
        fetchAllPosts()

        return {posts, fetchAllPosts}
    }
}
</script>

<style lang="scss" scoped>

</style>