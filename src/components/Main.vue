<template>
    <main>



        <div>
            <ul>

                <Card  v-for="film in store.movies" :key="film.id" :item="film"></Card>
            </ul>
        </div>
    </main>
</template>

<script>
import store from "../store";
import Card from"./Card.vue"

	export default {
        components:{
            Card
        },
        data(){
            return {
                store,
                movies: [],
                ricerca: ""
            }
        },
                
        }
  
</script>

<style lang="scss" scoped> 
    .input{
        width: 90%;
    }

    .film{
        padding: .5rem;
    }
</style>