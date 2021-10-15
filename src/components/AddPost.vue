<template >

    <div class="row">
        <div class="col-md-6 mx-auto">
            <form @submit.prevent="persistPost(post)">
                <div class="form-group">
                    <label for="Title">Title</label>
                    <input v-model="post.title" type="text"  id="Title" placeholder="Title" class="form-control">
                </div>
                <div class="form-group">
                    <label for="Content">Content</label>
                    <textarea v-model="post.content" id="Content" rows="3"  placeholder="Content" class="form-control"></textarea>
                </div>
                    <button type="submit" class="btn btn-primary btn-block">Add</button>
            </form> 
        </div>
    </div>   
    {{ post }}
</template>
<script>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { db } from './../firebase/config'

export default {
    setup() {
        const post = reactive({
            title: '',
            content: '',
            tags: ['javaScript']
        });
        const error = ref(null)

        const router = useRouter();

        // Methods :
        const persistPost = async (post) => {
            try {
                 const res  = await db.collection('posts').add( post );
                 router.push({name: 'Home'})
            } catch (er) {
                error.value  = er.message
            }
        }
        
     
        return{
            post,
            persistPost
        }
    }
    
}
</script>
<style lang="">
    
</style>