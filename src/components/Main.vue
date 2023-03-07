<template>
    <main>
        <div class="container">

            <div class="filter">
                <input class="input" type="text" placeholder="Inserisci il nome di un film o una parola chiave..." 
                v-model="ricerca"
                @keyup.enter="onClick">
                <button @click="onClick">cerca</button>
            </div>
        </div>


        <div>
            <ul>
                <li class="film"
                v-for="(film, i) in movies">
                    <h4>{{movies[i].original_title}}</h4>
                    <h5>{{movies[i].title}}</h5>
                    <h6>{{movies[i].original_language}}</h6>
                    <span>{{(Math.fround(movies[i].vote_average/2).toFixed())}}</span>
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
                movies: [],
                ricerca: ""
            }
        },
        methods: {
            onClick(){
               
                this.fetchMovies()
                console.log( this.ricerca, this.query)
            },
            fetchMovies (){
                const ricerca = this.ricerca

                axios
                    .get("https://api.themoviedb.org/3/search/movie",{
                        params:{
                            api_key: 'e99307154c6dfb0b4750f6603256716d',
                            query: ricerca,
                            page: 1,
                        }
                    })
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