<template>
  <modal name="result-modal">
    <img v-if="type=='warn'" src="@/assets/warn.svg" class="icon">
    <img v-if="type=='normal'" src="@/assets/normal.svg" class="icon">
    <img v-if="type=='poten'" src="@/assets/poten.svg" class="icon">
  </modal>
</template>
<script>
export default {
    name: 'resultModal',
    props: [
      'type'
    ]
}
</script>
<style lang="less" scoped>
.icon{
  display: block;
  width: 100px;
  margin: 20px auto;
}
</style>