<template>
    <div >
        <p>Recent episodes</p>
        <episode></episode>

        <!-- <episode v-for="(playlist, index) in playLists" v-bind:key="index"
                       :playlist="playlist" :currentPlaying="currentPlaylist" :isPlaying="getIsPlaying">
        </episode> -->
        <episode
            :playlist="'/checkyouraerial/gloom-2901021/'" :currentPlaying="currentPlaylist" :isPlaying="getIsPlaying">
        </episode>
    </div>
</template>

<script>
export default {
    
}
</script>