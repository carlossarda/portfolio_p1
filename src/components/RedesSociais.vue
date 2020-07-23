<template>
    <section>
        <Facebook perfil="studiohallarq" />
        <Instagram perfil="studiohallarq" />
        <Whats :telefone="5548996869837" />
    </section>
</template>

<script>
import Whats from "@/components/Whats";
import Instagram from "@/components/Instagram";
import Facebook from "@/components/Facebook";

export default {
    components: {
    Whats,
    Instagram,
    Facebook
  }
}
</script>

<style scoped>

</style>