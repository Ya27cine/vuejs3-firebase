import { ref } from 'vue'
import { db } from "../../firebase/config"

const loadPost = () => {

    const post = ref( null );
    const error = ref(null);

    const load = async (id) => {
        try{
            const res = await db.collection('posts').doc(id).get();

            if(! res.exists )  throw Error('this post does not exist !')
            
            post.value =  { ...res.data(), id };
            
        }catch(err){
            error.value = err.message;
        }
    }
    return {
        load,
        post,
        error
    }
}

export default loadPost;

    