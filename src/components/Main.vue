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
                    <h4>{{movies[0].original_title}}</h4>
                    <h5>{{movies[0].title}}</h5>
                    <h6>{{movies[0].original_language}}</h6>
                    <span>{{movies[0].vote_average.toFixed(0)/2}}</span>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import axios from "axios"

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
            },
            created(){
                this.fetchMovies()
            }
                
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