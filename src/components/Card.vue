<template>
    <li class="card">

        <img :src="imgUrl(item.backdrop_path)" alt="">

        <h3>{{item.title}} {{item.name}}</h3>
        <h5>Titolo originale: {{item.original_title}} {{item.original_name}}</h5>

        <h6>Lingua: </h6>
        <img
        v-if:="addFlag(item.original_language) != null"
         class="iconFlag" ciao :src="addFlag(item.original_language)" alt="">
        <h6 v-else>( {{ item.original_language }} )</h6>

         <!-- <h4>{{(Math.fround(item.vote_average/2).toFixed())}}</h4>
        <font-awesome-icon icon="fa-solid fa-star" /> -->

        <h4 v-for="index in voteStar(item.vote_average)" :key="index">
            <font-awesome-icon icon="fa-solid fa-star"/>
        </h4>
        
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
            },
            imgUrl(url){
               if (url === null){
                url = '/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
               }
                return 'https://image.tmdb.org/t/p/' + 'w342' + url
            },
            voteStar(stars){   
               
                console.log(Math.fround(stars/2).toFixed())
                    return Math.round(stars/2)
                }
            

        },

   
    

        }


</script>

<style lang="scss" scoped>

.card{
        padding: .5rem;
    }
 .iconFlag{
    max-width: 16px;
    display: inline-block;
   
 }

 h6{
    display: inline-block;
    margin-right: .25rem;
 }
</style>
