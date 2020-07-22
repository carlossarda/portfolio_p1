<template>
    <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <a :href="link" class="float" target="_blank">
            <span class="whats">
                <span class="fa fa-whatsapp"></span>
            </span>
        </a>
    </div>
</template>

<script>
export default {
  props: {
      telefone: Number
  },
  computed: {
      link: function () {
          return `https://api.whatsapp.com/send?phone=${this.telefone}`
      }
  }
}
</script>

<style scoped>
.float{
    position:fixed;
    bottom:0.8em;
    right:1em;
    z-index:100;
}

.whats{
    display: inline-block;
    width: 2em;
    height: 2em;
    text-align: center;
    border-radius: 40px;
    color:#FFF;
    font-size: 1.8em;
    line-height: 2em;
    vertical-align: middle;
    background-color:#25d366;
    box-shadow: 2px 2px 3px #999;
}
</style>