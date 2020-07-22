<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <a :href="link" class="float" target="_blank">
            <span class="facebook">
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
    bottom:0.8em;
    right:9em;
    z-index:100;
}

.facebook {
    display: inline-block;
    width: 2em;
    height: 2em;
    text-align: center;
    border-radius: 40px;
    color: #fff;
    font-size: 1.8em;
    line-height: 2em;
    vertical-align: middle;
    background: #385898;
    background: radial-gradient(circle at 30% 107%, #385898 0%, #385898 5%, #385898 45%,#385898 60%,#385898 95%);
    box-shadow: 0px 3px 10px rgba(0,0,0,.25);
}
</style>