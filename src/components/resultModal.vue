<template>
  <modal name="result-modal">
    <img v-if="type=='warn'" src="@/assets/warn.svg" class="icon">
    <img v-if="type=='normal'" src="@/assets/normal.svg" class="icon">
    <img v-if="type=='poten'" src="@/assets/poten.svg" class="icon">
    <div class="word">
      <div v-if="type == 'normal'">
        未发现敏感词
      </div>
      <div v-if="type == 'warn'">
        <div>发现敏感词</div>
        <div class="warn">炸弹</div>
      </div>
      <div v-if="type == 'poten'">
        <div>发现求救信号</div>
        <div class="warn">救命</div>
      </div>
    </div>
  </modal>
</template>
<script>
export default {
    name: 'resultModal',
    props: [
      'type'
    ],
    watch: {
      type: {
        immediate: true,
        handler (val) {
          this.type = val
        }
      }
    },
}
</script>
<style lang="less" scoped>
.icon{
  display: block;
  width: 100px;
  margin: 20px auto;
}
.word {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  div{
    margin: 20px;
  }
  .warn{
    color: red;
    font-size: 22px;
  }
}
</style>