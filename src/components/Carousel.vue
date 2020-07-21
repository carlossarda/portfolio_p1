<template>
  <carousel-3d :height="250" :width="400" @after-slide-change="onAfterSlideChange" @before-slide-change="onBeforeSlideChange" @last-slide="onLastSlide">
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
    onBeforeSlideChange(index) {
      console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index)
    },
    onLastSlide(index) {
      console.log('@onLastSlide Callback Triggered', 'Slide Index ' + index)
    }
  },
  data() {
    return {
      
    }
  },
  props: {
    slides : Array
  }
};
</script>

<style lang="scss" scoped>
.carousel-3d-container {
  
  .carousel-3d-slide {
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>