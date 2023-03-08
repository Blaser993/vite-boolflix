<template>
  <div>
    <Header @onSearch="fetchData"></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

import store from "./store";
import axios from "axios"

	export default {
    components: {
      Header,
      Main,
      Footer
    },
    data(){
      return{
        store
      }
    },
    methods:{
      fetchData(){
        console.log("fetch data")
        
        this.fetchMovies()
      },
      fetchMovies (){
                const urlmovie = this.store.BASE_URL + '/search/movie';
                axios
                    .get(urlmovie,{
                        params:{
                            api_key:this.store.API_KEY,
                            query: this.store.ricerca,
                            page: 1,
                            language: "it-IT",
                        }
                    })
                    .then((res) => {
                        const results = res.data.results
                        this.store.movies = results
                        console.log(results)
                    }).catch(err => {
                      this.store.movies= []
                    })
                },
            },
    }
	
</script>

<style lang="scss"> 
  @use "./style/general.scss";

</style>
