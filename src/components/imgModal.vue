<template>
  <modal 
  name="img-modal"
  :width="800"
  :height="600"
  >
    <div class="container">
      <img :src="imgData">
    </div>
  </modal>
</template>
<script>
export default {
    name: 'imgModal',
    props: [
      'imgData'
    ],
    watch: {
      imgData: {
        immediate: true,
        handler (val) {
          this.imgData = val
        }
      }
    },
    data () {
      return {
        imgFaceData: null,
        imgMouseData: null
      }
    },
    methods: {
    },
}
</script>
<style lang="less" scoped>
.container{
  padding: 20px;
  img{
    width: 90%;
    display: block;
    margin: 0 auto;
  }
  .buttonContainer{
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    width: 60%;
    .button{
      width: 100px;
      height: 50px;
      background: #999;
      color: #fff;
      border-radius: 50px;
      line-height: 50px;
      text-align: center;
      margin: 0 20px;
      transition: 0.5s all ease;
      cursor: pointer;
    }
    .button:hover{
      background: #333;
    }
  }
}
</style>