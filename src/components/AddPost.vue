<template >

    <div class="row">
        <div class="col-md-6 mx-auto">
            <form @submit.prevent="addPost">
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
import { reactive }from 'vue'
export default {
    setup() {
        const post = reactive({
            title: '',
            content: '',
            tags: ['javaScript']
        });
        
     
        return{
            post
        }
    }
    
}
</script>
<style lang="">
    
</style>