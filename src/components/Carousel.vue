<template>
  <carousel-3d
    :height= "250"
    :width= "400"
    :autoplay= autoplay
    :autoplay-timeout= "15000"
    :display= 3
    :controlsVisible="true"
    @after-slide-change="onAfterSlideChange"
    @last-slide="onLastSlide"
  >
    <slide v-for="(slide, i) in slides" :key="i" :index="i">
      <img :src="slide.mainImg"/>
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide
  },
  methods: {
    onAfterSlideChange(index) {
      this.$emit('alterarSite',index);
    },
    onLastSlide() {
      this.autoplay = false
    }
  },
  data() {
    return {
      autoplay: true
    }
  },
  props: {
    slides : Array
  }
};
</script>

<style scoped>
.carousel-3d-container {
  width: 100%;
}
.carousel-3d-slide {
  border-radius: 10px;
}
.carousel-3d-slide  img {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 720px){
  .carousel-3d-container {
    width: 65vw;
  }
}

</style>