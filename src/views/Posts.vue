<template >
    <h1>Blog</h1>
    <h3>List Posts :</h3>
    <div class="row">
        <div class="col-md-6" v-for="post in posts"  :key="post.id">
            <OnePost :post="post"  />
        </div>
    </div>
    
</template>
<script>
    import { ref } from 'vue'
    import OnePost from "../components/OnePost"
    import loadPosts from "../composables/posts/getPosts"


export default {
    components:{ 
                OnePost
    },
    setup() {
        // Data :
        const {posts,load, error } = loadPosts();

        // get post:
        load();


        return {
            posts,
            error
        }
    }// setUp
}
</script>
<style lang="">
    
</style>