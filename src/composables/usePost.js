  /*
  *we are going to use this file to  write functions 
  we need to work on post
  like fetching posts, post 
   * */
  import {ref} from 'vue'
  
  const usepost = ()=>{
      const posts = ref([])
      const post = ref({})
      const baseUrl = "https://jsonplaceholder.typicode.com"
      // fetch all the posts 
      const fetchAllPosts = async()=>{
          const response = await fetch(`${baseUrl}/posts`)
          posts.value = await response.json()
      }
      const fetchOnePost = async(id)=>{
          const response = await fetch(`${baseUrl}/posts/${id}`)
          post.value = await response.json()
      }
      return { posts, fetchAllPosts, post, fetchOnePost}

}
export default usepost