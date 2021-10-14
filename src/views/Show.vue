<template>

    <div v-if="error" class="alert alert-danger my-3" role="alert">
    <strong>{{ error }}</strong>
    </div>

    <div v-else>
        <div v-if="post">
            <h1> {{ post.title}}</h1>

            <p class="lead"> {{post.content}}</p>

            <div class="my-3">
                    <span v-for="(tag, index) in post.tags" class="badge bg-info mx-2" :key="index">
                        #{{ tag}}
                    </span>
            </div>
        </div>
        <div v-else class="text-center">Loading ...</div>
    </div>
   


</template>
<script>
import {useRoute} from 'vue-router'
import loadPost  from '../composables/posts/getOnePost'


export default {

    setup(props) {
        const route = useRoute()

        const id = route.params.id;
        const { load, post, error} = loadPost();

        load( id );

        return{
            post,
            error
        }
    }

}
</script>
<style lang="">
    
</style>