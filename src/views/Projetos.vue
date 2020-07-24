<template>
    <div class="projetos">
        <Carousel :slides="slides" @alterarSite="alterarSite" :autoplay=false />
        <transition name="fade" mode="out-in">
            <Galeria :slide="slides[index] "/>
        </transition>
    </div>
</template>

<script>
import Carousel from '../components/Carousel';
import Galeria from '../components/Galeria';

export default {
    components: {
        Carousel,
        Galeria
    },
    data() {
        return {
            index:0
        };
    },
    props: {
        slides: {
            type: Array,
            required: true
        }
    },
    methods: {
    alterarSite(index){
      this.index = index;
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .75s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>