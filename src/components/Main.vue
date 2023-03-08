<template>
    <main>

        <div class="container">
            <ul>
                <Card class="card" v-for="item in store.movies" :key="item.id" :item="item"></Card>
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
    .input{
        width: 90%;
    }


</style>