<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <a :href="link" class="float" target="_blank">
            <span class="instagram">
              <span class="fa fa-instagram"></span>
            </span>
        </a>
    </div>
</template>

<script>
export default {
  props: {
      perfil: String
  },
  computed: {
      link: function () {
          return `https://www.instagram.com/${this.perfil}`
      }
  }
}
</script>

<style scoped>
.float{
    position:fixed;
    bottom:40px;
    right:110px;
    z-index:100;
}
.my-float{
    margin-top:16px;
}
.instagram {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 40px;
    color: #fff;
    font-size: 30px;
    line-height: 60px;
    vertical-align: middle;
    background: #d6249f;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
}
</style>