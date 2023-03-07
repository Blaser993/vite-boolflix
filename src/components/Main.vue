<template>
    <main>
        <div class="container">

            <div class="filter">
                <input class="input" type="text" placeholder="Inserisci il nome di un film o una parola chiave...">
                <button>cerca</button>
            </div>
        </div>


        <div>
            <ul>
                <li class="film">
                    <h4>Titolo</h4>
                    <h5>titolo originale</h5>
                    <h6>lingua</h6>
                    <span>voto</span>
                </li>
            </ul>
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
                axios
                    .get("https://api.themoviedb.org/3/search/movie",{
                        params:{
                            api_key: 'e99307154c6dfb0b4750f6603256716d',
                            query: "leggenda",
                            page: 1,
                        }})
                    .then((res) => {
                        console.log(res.data.results)
                        this.movies = res.data.results
                    })
                },
                
            }
        },
        created (){
            this.fetchMovies()
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