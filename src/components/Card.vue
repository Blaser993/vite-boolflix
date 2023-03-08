<template>
    <li class="card"
    v-for="item in store.movies" :key="item.id">
        <h4>{{item.original_title}}</h4>
        <h5>{{item.title}}</h5>
        <h6>{{item.original_language}} 
            <img :src="addFlag(item.original_language)" alt="">
        </h6>
        <span>{{(Math.fround(item.vote_average/2).toFixed())}}</span>
    </li>
</template>

<script>
import store from "../store"
	export default {
        props: {
            item:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                store
            }
        },
        methods:{
            addFlag(original_language){
                if (original_language === "it"){
                    this.original_language = store.flags[0]

                } else if (this.original_language === "ja"){
                    this.original_language = store.flags[1]

                } else if (original_language === "fr"){
                    this.original_language = store.flags[2]

                } else if (original_language === "ru"){
                    this.original_language = store.flags[3]

                } else this.original_language = original_language
            }
        }
	}
</script>

<style lang="scss" scoped>

</style>