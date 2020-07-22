<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <a :href="link" class="float" target="_blank">
            <span class="instagram">
              <span class="fa fa-facebook"></span>
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
          return `https://www.facebook.com/${this.perfil}`
      }
  }
}
</script>

<style scoped>
.float{
    position:fixed;
    bottom:40px;
    right:180px;
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
    background: #385898;
    background: radial-gradient(circle at 30% 107%, #385898 0%, #385898 5%, #385898 45%,#385898 60%,#385898 95%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
}
</style>