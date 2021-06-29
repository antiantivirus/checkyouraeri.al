<template>
  <transition name="fade" appear v-if="checkingTheAerial">
  <div class="loading-container bg-indigo-400 fixed h-screen w-screen z-50">
    <h1 ref="loadingText"></h1>
  </div>
  </transition>
</template>

<script>

export default ({
  data(){
    return {
      checkingTheAerial: true
    }
  },
  methods:{
    printLetterByLetter(){

    }
  },
  mounted() {
    setTimeout(() => this.checkingTheAerial = false, 3000);

    let i = 0;
    const message = 'checking the aerial'
    console.log(this.$refs.loadingText)
    var interval = setInterval(() => {
        this.$refs.loadingText.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, 100);
  }
})
</script>

<style>
  .loading-container {
    z-index: 99999;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>