<template >

    <h2 @click="show = !show"> {{ post.title }}</h2>
    <div v-if="show">
        <p> {{ extrait }} </p>
        <div class="well">
            <span v-for="tag in post.tags" class="badge bg-primary mx-1" > #{{ tag }}</span>
        </div>
        <div class="my-3">
                <router-link :to="{name: 'show-post', params:{id: post.id }}" class="btn btn-success">
                    Show
                </router-link>

                <button class="btn btn-info mx-1">Edit</button>
                <button @click="deletePost(post.id)" class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script>
import { ref, computed} from 'vue'
import { useRouter } from 'vue-router'
import { db } from './../firebase/config'
export default {
    props: ['post'],
    setup(props) {

        const show = ref(true)
        const error = ref(null);
        const router = useRouter();


        // Methods :
        const deletePost = async (id) => { 
            try {
                 let retVal = confirm("Do you want to delete this post ?");
                 if( retVal == true ){
                    const res =  await  db.collection('posts').doc(id).delete();
                    console.log( res )
                    router.push({name: 'Home'})
                 }
            } catch (er) {
                error.value = er.message;
            }
        }
        
        const extrait = 
                computed( 
                    () => props.post.content.substring(0, 17)+ '...'
                );

        return {
            extrait,
            show,
            error,
            deletePost
        }
    }
}
</script>
<style lang="">
    
</style>