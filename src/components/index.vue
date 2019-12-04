<template>
  <div class="background">
   <div class="content">
    <div class="tag">
      <span class="title">唇语识别平台</span>
      <span>开始识别</span>
      <span>演示视频</span>
      <span>联系我们</span>
    </div>
    <block></block>
    <div class="exTitle">
    演示范例
    </div>
    <div class="example">
      <div class="item">
        <img src="@/assets/ex1.jpg">
        <div class="cover">
          <img src="@/assets/play.svg">
        </div>
        <div class="word">自然动态环境下的唇语识别效果测试</div>
      </div>
      <div class="item">
        <img src="@/assets/ex1.jpg">
        <div class="cover">
          <img src="@/assets/play.svg">
        </div>
        <div class="word">自然动态环境下的唇语识别效果测试</div>
      </div>
      <div class="item">
        <img src="@/assets/ex1.jpg">
        <div class="cover">
          <img src="@/assets/play.svg">
        </div>
        <div class="word">自然动态环境下的唇语识别效果测试</div>
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
      
    }
  },
  components: {
    block
  }
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
      padding: 35px 0 35px 150px;
      .title{
        font-size: 22px;
        font-weight: 600;
        color: #000;
      }
      span{
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
        img{
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
