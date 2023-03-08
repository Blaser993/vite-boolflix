<template>
    <li class="card"
    v-for="item in store.movies" :key="item.id">
        <h4>{{item.original_title}}</h4>
        <h5>{{item.title}}</h5>
        <h6>{{item.original_language}}</h6>
        <span>{{(Math.fround(item.vote_average/2).toFixed())}}</span>
    </li>
</template>

<script>
import store from "../store"
	export default {
        props: {
            item:{
                type: Object,
                required: true
            }
        },
        data(){
            return{
                store
            }
        }
	}
</script>

<style lang="scss" scoped>

</style>