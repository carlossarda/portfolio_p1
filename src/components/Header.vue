<template>
        <img :src="header">
</template>

<script>
export default {
    data: () => {
        return {
            header: require('../assets/logo-sem-fundo-preto.png')
        }
    }
}
</script>

<style scoped>
    img {
        height: 20vh;
        width: 100%;
    }

    @media screen and (min-width: 720px){
        img {
            height: 20vh;
            width: 35vw;
        }
    }
</style>