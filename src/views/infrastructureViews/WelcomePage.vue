<template>
  <div class="carousel-container">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="@/assets/valentinesale.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/feet-boots.jpg"></b-carousel-slide>
      <b-carousel-slide img-src="@/assets/boots.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped lang="scss">
.carousel-container {
  max-width: 60%;
  margin: auto;
}
</style>
