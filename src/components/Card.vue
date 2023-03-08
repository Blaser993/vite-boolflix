<template>
    <li class="card"
    v-for="item in store.tvs" :key="item.id">
        <h4>{{item.original_title}} {{item.original_name}}</h4>
        <h5>{{item.title}} {{item.title}}</h5>
        <img
        v-if:="addFlag(item.original_language) != null"
         class="iconFlag" ciao :src="addFlag(item.original_language)" alt="">
        <h6 v-else>{{ item.original_language }}</h6>
        <span>{{(Math.fround(item.vote_average/2).toFixed())}}</span>
    </li>
</template>

<script>
import store from "../store"
	export default {
        props: {
            item:{
                type: Object,
                required: true,

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
                    return store.flags[1]

                } else if (language === "ja"){
                    return store.flags[2]

                } else if (language === "fr"){
                    return store.flags[3]

                } else if (language === "ru"){
                    return store.flags[4]

                } else if (language === "en"){
                    return store.flags[5]

                }  else return null
            }
        }
	}
</script>

<style lang="scss" scoped>

.card{
        padding: .5rem;
    }
 .iconFlag{
    max-width: 16px;
 }
</style>