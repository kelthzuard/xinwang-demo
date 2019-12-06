<template>
    <div :class="{'blockGone': recording, 'block': true}">
        <div class="desc">
            <div v-if="video">录像中...</div>
            <div v-if="imgSq" style="display: flex;align-items: center">
                <div>处理图像序列中...</div>
                <div class="button" @click="hideImg">
                    生成结果
                </div>
            </div>
        </div>
        <div :class="{'wordsGone': recording, 'words': true}">
            <div class="big">唇语识别</div>
            <div class="small">点击运行</div>
            <div class="button" @click="startRecord">
                <img src="@/assets/play.svg">
            </div>
        </div>
        <div :class="{'videoActivate': video, 'video': true}" id="videoContainer">
            <video v-if="type == 'normal'" v-show="video" id="video" src="@/assets/normal.mp4" control="controls" width="500px" height="260px" @ended="showImglist"></video>
            <video v-if="type == 'warn'" v-show="video" id="video" src="@/assets/warn.mp4" control="controls" width="500px" height="260px" @ended="showImglist"></video>
            <video v-if="type == 'poten'" v-show="video" id="video" src="@/assets/poten.mp4" control="controls" width="500px" height="260px" @ended="showImglist"></video>
        </div>
        <div class="imgList" ref="imgList">
            <div v-for="(item,index) in imgList" :key="index" class="item" @click="showImgModal(index)" @mouseover="imgHover(index)" @mouseout="imgOut(index)">
                <img :src="item">
            </div>
        </div>
        <div class="loading" v-show="loading">
            <div class="loadEffect" >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <div class="loadingWord">结果生成中</div>
        </div>
        <div style="display: none">
            <canvas id='canvas' width='400' height='300'></canvas>
        </div>
        <result-modal :type="modalType"></result-modal>
        <img-modal :imgData="imgData"></img-modal>
    </div>
</template>
<script>
import resultModal from "./resultModal.vue"
import imgModal from "./imgModal.vue"
export default {
    name: 'block',
    components: {
        resultModal,
        imgModal
    },
    data() {
        return {
            recording: false,
            video: false,
            imgList: [],
            strem: null,
            interval: null,
            imgSq: false,
            loading: false,
            modalType: 'normal',
            normalList: [],
            imgData: null,
            warnList: [],
            potenList: [],
            type: 'normal'
        }
    },
    mounted() {
        this.initData ('normal')
        // this.changeData(this.normalList)
        this.imgList = this.normalList
        this.videoUrl = 'normal'
    },
    methods: {
        initData (type) {
            for (let i = 1; i < 8; i ++) {
                this.normalList.push(require('@/assets/normal/'+ i +'.png'))
                this.warnList.push(require('@/assets/warn/'+ i + '.png'))
                this.potenList.push(require('@/assets/poten/'+ i + '.png'))
            }
        },
        changeType (type) {
            switch (type){
                case 'normal': this.imgList = this.normalList;break;
                case 'warn': this.imgList = this.warnList;break;
                case 'poten': this.imgList = this.potenList;break;
            }
            this.type = type;
            this.modalType = type
        },
        changeData (arr) {
            for (let i = 0; i < arr.length; i ++) {
                this.$set(this.imgList, i, arr[i])
            }
        },
        showImgModal (index) {
            this.$modal.show('img-modal')
            this.imgData = this.normalList[index]
        },
        imgHover (index) {
            var node = this.$refs.imgList.childNodes[index]
            node.style.transform = 'scale(1.2)'
        },
        imgOut (index) {
            var node = this.$refs.imgList.childNodes[index]
            node.style.transform = 'scale(1)'
        },
        startRecord () {
            const self = this
            this.recording = true
            setTimeout (()=>{
                self.video = true
                self.openCamera ()
            }, 150)
        },
        openCamera () {
            const self = this
            var video = document.getElementById('video')
            video.play()
        },
        showImglist () {
            this.video = false
            this.imgSq = true
            var imgList = this.$refs.imgList
            for (let i = 0; i < imgList.childNodes.length; i ++) {
                setTimeout (function(){
                    var node = imgList.childNodes[i]
                    node.style.left = (i+1)*125 + '%'
                    node.style.opacity = 1
                }, 1500)
            }
        },
        hideImg () {
            const self = this
            var imgList = this.$refs.imgList
            for (let i = 0; i < imgList.childNodes.length; i ++) {
                setTimeout (function(){
                    var node = imgList.childNodes[i]
                    node.style.left = (i+1)*1810 + 'px'
                    node.style.opacity = 0
                    if (i == (imgList.childNodes.length - 1)) {
                        self.imgSq = false
                        self.showLoading ()
                    }
                }, 1000)
            }
        },
        showLoading () {
            setTimeout (()=>{
                this.loading = true
                this.showResult ()
            }, 1000)
        },
        showResult () {
            setTimeout (()=>{
                this.$modal.show('result-modal')
                this.recording = false
                this.loading = false
            }, 1500)
        }
    }
}
</script>
<style lang="less" scoped>
.blockGone{
    margin-left: 0 !important;
    border-radius: 0 !important;
}
.wordsGone{
    transform: translate(-500px, -50%) !important;
    opacity: 0;
}
.videoActivate{
    height: 260px !important;
}
.imgList{
    position: absolute;
    top: 50%;
    left: -150px;
    width: 11%;
    height: 100px;
    transform: translateY(-50%);
    .item{
        transition: 1s all ease,0.3s transform ease;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.block{
    width: 100%;
    height: 300px;
    background: rgb(92, 136, 197);
    margin-left: 150px; 
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    transition: 1s all ease;
    .desc{
        position:absolute;
        top: 30px;
        left: 80px;
        font-size: 20px;
        .button{
            width: 70px;
            height: 30px;
            background: #999;
            color: #fff;
            border-radius: 30px;
            line-height: 30px;
            text-align: center;
            margin: 0 20px;
            transition: 0.5s all ease;
            cursor: pointer;
            font-size: 14px;
        }
        .button:hover{
            background: #333;
        }
    }
    .video{
        width: 500px;
        height:0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #f5f5f5;
        transition: 0.5s all ease;
        overflow: hidden;
    }
    .words{
        position: absolute;
        top: 50%;
        left: 150px;
        transform: translateY(-50%);
        transition: 1s all ease;
        div{
            margin: 20px 0;
        }
        .big{
            font-size: 38px;
            color: #fff;
            font-weight: 600;
            letter-spacing: 4px;
        }
        .small{
            font-size: 20px;
            color: #fff;
            font-weight: 400;
            letter-spacing: 10px;
        }
        .button{
            width: 120px;
            height: 50px;
            background: rgb(47, 47, 47);
            border-radius: 50px;
            margin-left: 20px;
            line-height: 50px;
            text-align: center;
            color: #fff;
            margin-top: 40px;
            cursor: pointer;
            img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
            }
        }
    }
    .loading{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        .loadingWord{
            margin-top: 20px;
            text-align: center;
        }
    }
    .loadEffect{
        width: 100px;
        height: 100px;
        position: relative;
    }
    .loadEffect span{
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #666;
        position: absolute;
        -webkit-animation: load 1.04s ease infinite;
    }
    @-webkit-keyframes load{
        0%{
            opacity: 1;
        }
        100%{
            opacity: 0.2;
        }
    }
    .loadEffect span:nth-child(1){
        left: 0;
        top: 50%;
        margin-top:-8px;
        -webkit-animation-delay:0.13s;
    }
    .loadEffect span:nth-child(2){
        left: 14px;
        top: 14px;
        -webkit-animation-delay:0.26s;
    }
    .loadEffect span:nth-child(3){
        left: 50%;
        top: 0;
        margin-left: -8px;
        -webkit-animation-delay:0.39s;
    }
    .loadEffect span:nth-child(4){
        top: 14px;
        right:14px;
        -webkit-animation-delay:0.52s;
    }
    .loadEffect span:nth-child(5){
        right: 0;
        top: 50%;
        margin-top:-8px;
        -webkit-animation-delay:0.65s;
    }
    .loadEffect span:nth-child(6){
        right: 14px;
        bottom:14px;
        -webkit-animation-delay:0.78s;
    }
    .loadEffect span:nth-child(7){
        bottom: 0;
        left: 50%;
        margin-left: -8px;
        -webkit-animation-delay:0.91s;
    }
    .loadEffect span:nth-child(8){
        bottom: 14px;
        left: 14px;
        -webkit-animation-delay:1.04s;
    }

}
</style>