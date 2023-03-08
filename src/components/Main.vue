<template>
    <main>
        <!-- <div class="container">

            <div class="filter">
                <input class="input" type="text" placeholder="Inserisci il nome di un film o una parola chiave..." 
                v-model="ricerca"
                @keyup.enter="onSearch">
                <button @click="onSearch">cerca</button>
            </div>
        </div> -->


        <div>
            <ul>
                <!-- <li class="film"
                v-for="film in store.movies" :key="film.id">
                    <h4>{{film.original_title}}</h4>
                    <h5>{{film.title}}</h5>
                    <h6>{{film.original_language}}</h6>
                    <span>{{(Math.fround(film.vote_average/2).toFixed())}}</span>
                </li> -->
                <Card  v-for="film in store.movies" :key="film.id" :item="film"></Card>
            </ul>
        </div>
    </main>
</template>

<script>
import store from "../store"
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