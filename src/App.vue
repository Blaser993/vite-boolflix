<template>
  <div>
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";


	export default {
    components: {
      Header,
      Main,
      Footer
    }
	}
</script>

<style lang="scss"> 
  @use "./style/general.scss";

</style>
