<template>
    <header>
    
        <nav>

            <figure>

                <img src="/img/boolflix-logo.png" alt="logo">
            </figure>
            
    
            <div class="filter">
                <input  type="textarea" placeholder="Inserisci il nome di un film" 
                v-model="store.ricerca"
                @keyup.enter="$emit('onSearch')">
                <button @click="$emit('onSearch')">cerca</button>
            </div>
        </nav>
            
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

<style lang="scss" scoped> 

header{
    background-color: black;
    padding: 2rem;
    position:sticky;
    top: 0;
    width: 100%;
    z-index: 999;

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 270px;
        }

        .filter{
            display: flex;
            
            input, button{
                line-height: 36px;
                font-size: 22px; 
                border:none;
                margin: 1rem;
                padding: 0 1rem;
            }

            button{   
                background-color: #DC1A28;
                color:rgb(239, 237, 237);
                text-transform: uppercase;
                font-size: 18px;
                font-weight: 700;
                text-align: center;
                
            }

            input{
                width: 100%;
                border-radius: 8px;
            }
        }

    }
}



</style>