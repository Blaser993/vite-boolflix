<template>
    <li class="card">

        <div class="wrapper">

          

            <img class="poster" :src="imgUrl(item.poster_path)" alt="">
    
            <article class="info">
                
                        <h3>{{item.title}} {{item.name}}</h3>
                        <h5>Titolo originale: {{item.original_title}} {{item.original_name}}</h5>
                
                        <h6>Lingua: </h6>
                        <img
                        v-if:="addFlag(item.original_language) != null"
                         class="iconFlag" ciao :src="addFlag(item.original_language)" alt="">
                        <h6 v-else>( {{ item.original_language }} )</h6>
                
                        <div>
                            <span v-for="index in voteStar(item.vote_average)" :key="index">
                                <font-awesome-icon icon="fa-solid fa-star"/>
                            </span>
                            <span v-for="index in totalStar(item.vote_average)" :key="index">
                                <font-awesome-icon icon="fa-regular fa-star"/>
                            </span>
                        </div>
    
            </article>
        </div>


        
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
                return Math.round(stars/2)
            },
            totalStar(stars){
                return 5 - Math.round(stars/2)
            }

        },

        }


</script>

<style lang="scss" scoped>

.card{    
    padding: .5rem;
}

.wrapper{
    flex-basis: 0;
    flex-grow: 1;
    position: relative;
    height: fit-content;
}

.poster{
    flex-basis: 0;
    flex-direction: column;
    margin: auto;

    object-fit: contain;
    
}

.info{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;
    padding: .5rem;
    background-color: white;
    color: black;
}

.card:hover .info{
    display: block;
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
