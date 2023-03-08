import {reactive} from "vue";

const store = reactive({

    
    movies: [],
    tvs: [],
    ricerca:"",
    flags:[
        "",
        "https://flagcdn.com/16x12/it.png",
        "https://flagcdn.com/16x12/jp.png",
        "https://flagcdn.com/16x12/fr.png",
        "https://flagcdn.com/16x12/ru.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1920px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
        
        
    ],

    // configurazione
    API_KEY: 'e99307154c6dfb0b4750f6603256716d',
    BASE_URL: "https://api.themoviedb.org/3",
})

export default store