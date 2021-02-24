<template>
  <div v-show="!homePage" ref="archive" class="w-2/5	absolute h-full top-0 right-0 bg-indigo-400 z-500 m-10">
  <div> 
        <nuxt-link to="/crew">Crew</nuxt-link>
        <nuxt-link to="/shows">Shows</nuxt-link>
        <nuxt-link to="/episodes">Episodes</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/">Over and out</nuxt-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
    computed: {
      homePage() {
        if(this.$route.path == "/" ) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>