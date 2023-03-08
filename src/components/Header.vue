<template>
    <header>
        <div class="container">
            <div>
                BOOLFIX
            </div>

            <div class="filter">
                <input class="input" type="text" placeholder="Inserisci il nome di un film o una parola chiave..." 
                v-model="store.ricerca"
                @keyup.enter="$emit('onSearch')">
                <button @click="$emit('onSearch')">cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
import store from "../store";
	export default {
        data(){
            return{
                store,
                
            }
        },
	}
</script>

<style lang="scss" scoped> //senza scoped in App.vue

</style>