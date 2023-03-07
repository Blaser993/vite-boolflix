<template>
    <main>
        <div class="container">

            <div class="filter">
                <input class="input" type="text" placeholder="Inserisci il nome di un film o una parola chiave...">
                <button>cerca</button>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";
	export default {
        data(){
            return {
                movies: []
            }
        },
        methods: {
            fetchMovies (){
                axios.get("https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=io")
                console.log("fetched movies")
            }
        },
        created (){
            this.fetchMovies()
        }
	}
</script>

<style lang="scss" scoped> 
    .input{
        width: 90%;
    }
</style>