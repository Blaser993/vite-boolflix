import {reactive} from "vue";

const store = reactive({
    movies: [],
    tv: [],
    ricerca:"",
    flags:[
        "https://flagcdn.com/16x12/it.png",
        "https://flagcdn.com/16x12/jp.png",
        "https://flagcdn.com/16x12/fr.png",
        "https://flagcdn.com/16x12/ru.png",
        
    ],

    // configurazione
    API_KEY: 'e99307154c6dfb0b4750f6603256716d',
    BASE_URL: "https://api.themoviedb.org/3",
})

export default store