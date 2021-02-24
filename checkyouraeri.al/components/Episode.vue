<template>
  <div>
    <div class="playlist">
      <!-- <div class="playlist__img">
        <img :src="playlist.pictures.extra_large" :alt="playlist.name">
      </div> -->
      <div class="playlist__descr">
        <div class="playlist__info">
          <template v-if="isCurrent">
            <div class="playlist__play-button" v-on:click="play(playlist)" v-if="!isPlayerPlaying">CLICK ME</div>
            <div class="playlist__pause-button" v-on:click="pause()" v-if="isPlayerPlaying"><span
              class="line"></span><span class="line"></span></div>
          </template>
          <template v-else>
            <div class="playlist__play-button" v-on:click="play(playlist)">CLICK ME</div>
          </template>
          <div class="playlist__descr">
            <!-- <div class="playlist__title">{{ playlist.name }}</div> -->
            <div class="playlist__stats">
            </div>
          </div>
        </div>

        <!-- <div class="playlist__tags">
          <div class="tag" v-for="(tag, tagIndex) in playlist.tags" v-bind:key="tagIndex">{{ tag.name }}</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import AppPlayer from '~/components/Mixcloud.vue';
  export default {
    props: ['playlist', 'currentPlaying', 'isPlaying'],
    computed: {
      isCurrent() {
        if (this.currentPlaying) {
          return this.playlist.slug === this.currentPlaying.slug;
        } else {
          return false;
        }
      },
      isPlayerPlaying() {
        return this.$store.getters.getIsPlaying;
      },
      formattedSeconds() {
        return (new Date(this.playlist.audio_length * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];
      }
    },
    methods: {
      play(data) {
        this.$store.dispatch('setPlayerUrl', data);
        this.$store.dispatch('setCurrentPlaying', data);
        this.$store.dispatch('setIsPlaying', true);
      },
      pause() {
        this.$store.dispatch('setIsPlaying', false);
      }
    },
    components: {
      AppPlayer
    }
  }
</script>