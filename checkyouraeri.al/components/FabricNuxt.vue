<template>
  <!-- canvas -->
  <div class="d-none d-lg-block">
    <client-only>
    <fabric-canvas :height="editCanvasHeight" :width="editCanvasWidth" ref='canvas'>
      <fabric-circle :id="2"></fabric-circle>
    </fabric-canvas>
  </client-only>
  </div>
</template>

<script>


export default {

    data() {
        return {
            pageHeight: 1200,
            pageWidth: 2000,
            padding: 50,
            scale: 1,
            h1: 40,
            h2: 30,
            h3: 25,
            h4: 20,
            h5: 18,
            padding: 50,
            centerX: this.windowWidth / 2,
            centerY: this.windowHeight / 2
        }
    },
    methods: {
        editCanvasHeight(){
            return this.pageHeight;
        },
        editCanvasWidth(){
            return this.pageWidth;
        }
    }

};
</script>

<style>
</style>