<template>
    <li class="card"
    v-for="item in store.movies" :key="item.id">
        <h4>{{item.original_title}}</h4>
        <h5>{{item.title}}</h5>
        
        <!-- <img v-if="store.flag.include(item.original_language)"
         class="iconFlag" :src="addFlag(language)" alt="">
        <h6 v-else>{{item.original_language}} </h6> -->

        <img class="iconFlag" :src="addFlag(item.original_language)" alt="">
        

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
            addFlag(language){
                if (language === "it"){
                    return store.flags[0]

                } else if (language === "ja"){
                    return store.flags[1]

                } else if (language === "fr"){
                    return store.flags[2]

                } else if (language === "ru"){
                    return store.flags[3]

                }else if (language === "en"){
                    return store.flags[4]

                } // else return `<h6>{{${item.original_language}}} </h6>`
            }
        }
	}
</script>

<style lang="scss" scoped>
 .iconFlag{
    max-width: 16px;
 }
</style>