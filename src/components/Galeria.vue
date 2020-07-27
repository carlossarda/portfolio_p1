<template>
    <section>
        <div class="descricao">
            <p>{{slide.titulo}}</p>
            <p>{{slide.mensagem}}</p>
        </div>
        <div class="imagens">
            <img @click="toogleModal(i)" class="imagem" v-for="(image,i) in slide.imagens" :src="image.endereco" v-bind:key="i" />
        </div>
        <Modal v-if="showModal" @close="toogleModal">
            <img slot="body" class="imagem-modal" :src="slide.imagens[index].endereco">
        </Modal>
    </section>
</template>

<script>
import Modal from './Modal';

export default {
    props: {
        slide: Object
    },
    components: {
        Modal
    },
    data: () => {
        return {
            showModal: false,
            index: 0
        }
    },
    methods: {
        toogleModal(i = 0) {
            this.index = i;
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.descricao {
    text-align: center;
}

.imagem-modal {
    width: 80vw;
    
}

.descricao p {
    padding: 5px;
    font-family: 'Nexa';
    font-size: 1.5em;
}

.imagens{
    margin: 25px;
}

.imagem{
    border-radius: 5px;
}

img{
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 720px){
    .imagens{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 25px;
    }

    .imagem-modal {
        height: 95vh;
    }

    .imagem{
        margin: 10px;
    }

    img{
        width: 350px;
        height: 230px;
    }
}
    
</style>