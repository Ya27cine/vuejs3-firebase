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
                <button class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script>
import { ref, computed} from 'vue'
export default {
    props: ['post'],
    setup(props) {

        const show = ref(true)
        
        const extrait = 
                computed( 
                    () => props.post.content.substring(0, 17)+ '...'
                );

        return {
            extrait,
            show
        }
    }
}
</script>
<style lang="">
    
</style>