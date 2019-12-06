<template>
  <div class="background">
   <div class="content">
    <div class="tag">
      <div class="title">
        <img class="logo" src="@/assets/logo.png">
        <div>观音监控平台</div>
      </div>
      <span>开始识别</span>
      <span>演示视频</span>
      <span>联系我们</span>
    </div>
    <block ref="block"></block>
    <div class="exTitle">
    演示范例
    </div>
    <div class="example">
      <div class="item" @click="changeType('normal')">
        <video src="@/assets/normal.mp4" autoplay loop muted></video>
        <div class="cover">
          <img v-if="!(type == 'normal')" src="@/assets/play.svg">
          <img v-if="(type == 'normal')" src="@/assets/pause.svg">
        </div>
        <div class="word">正常检测无敏感词</div>
      </div>
      <div class="item" @click="changeType('warn')">
        <video src="@/assets/warn.mp4" autoplay loop muted></video>
        <div class="cover">
          <img v-if="!(type == 'warn')" src="@/assets/play.svg">
          <img v-if="(type == 'warn')" src="@/assets/pause.svg">
        </div>
        <div class="word">险情发现预警</div>
      </div>
      <div class="item" @click="changeType('poten')">
        <video src="@/assets/poten.mp4" autoplay loop muted></video>
        <div class="cover">
          <img v-if="!(type == 'poten')" src="@/assets/play.svg">
          <img v-if="(type == 'poten')" src="@/assets/pause.svg">
        </div>
        <div class="word">呼救信息预警</div>
      </div>
    </div>
   </div>
  </div>
</template>
<script>
import block from './block.vue'
export default {
  name: 'index',
  data () {
    return {
      type: 'normal'
    }
  },
  components: {
    block
  },
  methods: {
    changeType (type) {
      this.type = type
      this.$refs.block.changeType(type)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.background{
  background: rgb(242,242,242);
  width: 100%;
  height: 100%;
  padding: 55px 40px;
  box-sizing: border-box;
  .content{
    background: #fff;
    width: 100%;
    height:100%;
    overflow: hidden;
    .tag{
      padding: 10px 0 35px 150px;
      .logo{
        width: 80px;

      }
      .title{
        font-size: 22px;
        font-weight: 600;
        color: #000;
        display: inline-block;
        margin-right: 35px;
      }
      span{
        display: inline-block;
        margin-right: 35px;
        color: #999;
        font-size: 14px;
      }
    }
    .exTitle{
      margin: 30px 0 30px 150px;
      font-size: 18px;
      font-weight: 600;
    }
    .example{
      margin-left: 150px;
      display: flex;
      .item{
        width: 220px;
        margin-right: 120px;
        position: relative;
        video{
          width: 100%;
          height: 150px;
        }
        .cover{
          position: absolute;
          width: 100%;
          height: 150px;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.2);
          line-height: 150px;
          text-align: center;
          cursor: pointer;
          img{
            width: 50px;
            height: 50px;
            vertical-align: middle;
          }
        }
        .word{
          margin: 20px 0;
          font-size: 15px;
          color: #333;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
