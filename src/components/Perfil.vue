<template>
    <div class="perfil">
        <img class="foto-perfil" :src="foto">
        <div class="descricao-perfil"> 
            <p>Francini Sardá</p>
            <hr class="separador">
            <p>Arquiteta e Urbanista</p>
        </div>
    </div>
</template>

<script>
export default {
    data : () => {
        return {
            foto: require('@/assets/arquiteta.jpg')
        }
    }
}
</script>

<style scoped>
.descricao-perfil {
    font-family: 'Raleway';
    font-size: 1.2em;
    font-weight: bold;
}
.descricao-perfil p {
    padding: 3px;
}
.separador {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #CCC, transparent);
}
.perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
}

.foto-perfil {
    border-radius: 360px;
    width: 150px;
    height: auto;
}

@media screen and (min-width: 720px){
    .foto-perfil {
        width: 15vw;
    }
    .descricao-perfil {
        margin: 2em;
    }
}
</style>