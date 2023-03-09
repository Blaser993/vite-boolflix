<template>
    <main>

        <div class="container">
            <h2 class="title">Film</h2>
            <ul class="cards">
                <Card  v-for="item in store.movies" :key="item.id" :item="item"></Card>
            </ul>
            <h2 class="title">Serie tv</h2>
            <ul class="cards">
                <Card  v-for="item in store.tvs" :key="item.id" :item="item"></Card>
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
            }
        },
                
        }
  
</script>

<style lang="scss" scoped> 

main{
   padding:0 2rem; 
}
    .input{
        width: 90%;
    }

    .cards{
        
        display: grid;
        grid-template-columns: repeat(5,1fr);
    }

    .title{
        font-size: 48px;
        padding-top: 2rem;
    }


</style>