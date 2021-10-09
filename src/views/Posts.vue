<template lang="">
    <h1>Blog</h1>
    <h3>List Posts :</h3>
    <div v-for="post in posts"  :key="post.id">
        <OnePost :post="post"  />
    </div>
</template>
<script>
    import { ref } from 'vue'
    import OnePost from "../components/OnePost"
    import { db } from "../firebase/config"

export default {
    components:{ 
                OnePost
    },
    setup() {
        // Data :
        const posts = ref([]);

        const load = async () => {
            const res = await db.collection('posts').get();
            posts.value = res.docs.map( doc =>{
                        return  { ...doc.data(), id: doc.id }
            })
            
        }

        load();

        return {
            posts
        }
    }// setUp
}
</script>
<style lang="">
    
</style>