<!--
 * @Descripttion: 
 * @Author: penglu
 * @Date: 2020-08-06 10:14:54
-->
<template lang="pug">
	div 
		div.title 上传图片 for 安卓
		.imageUpload
			van-uploader(
				accept="image/gif, image/jpeg ,image/png, image/jpg"
				class="image-upload-uploader" 
				:file-list="fileList"
				:before-read="beforeRead"
				:after-read="afterRead" 
				@delete="deleteImage"
				:disabled="true"
				ref="vanUpload"
			)
			div.almUpload(:style="{ left: leftPx , bottom: bottomPx }"  @click.prevent.stop="aaa")
				i(class="iconfont iconpaizhao")
			
</template>

<script>
import { Uploader, Toast } from "vant";
import { imageUpload } from "../../api/loanlnspection";
export default {
  components: {
    "van-uploader": Uploader,
    Toast
  },
  data () {
    return {
      fileList: [
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg'
        },
        {
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1489090922,933946444&fm=26&gp=0.jpg',
          name: 'a'
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3669707182,1525465329&fm=26&gp=0.jpg',
          name: 'b'
        },
        {
          url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607837365,422709026&fm=26&gp=0.jpg",
          name: 'c'
        },
        {
          url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3669707182,1525465329&fm=26&gp=0.jpg',
          name: 'd'
        },
        // {
        // 	url:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607837365,422709026&fm=26&gp=0.jpg",
        // 	name:'bq3'
        // },
      ],
      images: [],
      uploadVisible: true,
      imageHas: false,
      leftPx: '0px',
      bottomPx: '0px'
    };
  },
  created () {

  },
  mounted () {
    this.uploadPos()


    // this.fileList.map(item2 => {
    // 	if(item2.name){
    // 		debugger;
    // 		this.uploadImage(item2,item2.url)
    // 	}
    // })

  },
  methods: {
    // 上传框的位置
    uploadPos () {
      if (this.fileList.length > 1) {
        // 屏幕宽度
        const allWidth = document.documentElement.clientWidth
        const fileLength = this.fileList.length - 1
        var leftPx = this.$refs.vanUpload._vnode.children[0].children[fileLength].elm.offsetLeft + 68
        const tag = allWidth - leftPx
        console.log(allWidth)
        console.log(leftPx)
        console.log(tag)
        if (tag < 68) {
          this.leftPx = '0px'
          this.bottomPx = '-68px'

        } else {
          this.leftPx = leftPx + 'px'
          this.bottomPx = '0px'
        }

      }
    },
    afterDelete (file, event) { },
    beforeRead (file) {
      console.log('beforeRead' + file)
    },
    afterRead (file) {
      console.log('afterRead' + file)
    },
    deleteImage (file, event) {
      const newFileList = this.fileList
      newFileList.splice(event.index, 1);
      this.uploadPos()
    },
    aaa () {
      const fileList = [
        {
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1489090922,933946444&fm=26&gp=0.jpg',
          name: 'bq1'
        },
        // {
        //   url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3669707182,1525465329&fm=26&gp=0.jpg',
        //   name: 'bq2'
        // },
        // {
        //   url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607837365,422709026&fm=26&gp=0.jpg",
        //   name: 'bq3'
        // },
        // {
        //   url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3669707182,1525465329&fm=26&gp=0.jpg',
        //   name: 'bq2'
        // },
        // {
        //   url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607837365,422709026&fm=26&gp=0.jpg",
        //   name: 'bq3'
        // },
      ]

      this.baseCallback(fileList)
    },
    // 将url转换为base64
    getBase64 (url) {
      return new Promise((resolve, reject) => {
        var Img = new Image()
        var dataURL = ''
        Img.setAttribute('crossOrigin', 'Anonymous')
        Img.src = url + '?v=' + Math.random()
        Img.onload = function () {
          // 要先确保图片完整获取到，这是个异步事件
          var canvas = document.createElement('canvas') // 创建canvas元素
          var width = Img.width // 确保canvas的尺寸和图片一样
          var height = Img.height
          canvas.width = width
          canvas.height = height
          canvas.getContext('2d').drawImage(Img, 0, 0, width, height) // 将图片绘制到canvas中
          dataURL = canvas.toDataURL('image/jpeg') // 转换图片为dataURL
          resolve(dataURL)
        }
      })
    },
    baseCallback (urlList) {
      try {
        console.log('执行')
        this.images = []
        urlList.filter(async item => {
          const res = await this.getBase64(item.url)
          const e = {
            name: item.name,
            status: "uploading",
            message: "上传中",
          }
          this.fileList.push({
            name: item.name,
            status: "uploading",
            message: "上传中"
          })
          this.uploadPos()
          console.log(this.fileList)
          this.uploadImage(e, res)

          // this.uploadImage(e,res)

          // this.images.push({
          // 	url:res,
          // 	name:item.name,
          // 	status: "uploading",
          // 	message: "上传中",
          // })
          // this.fileList.push({
          // 	url:res,
          // 	name:item.name,
          // 	status: "uploading",
          // 	message: "上传中",
          // })
        })

        // this.fileList.map(async item2 => {
        // 	if(item2.name){

        // 		await this.uploadImage(item2,item2.url)
        // 	}
        // })

        // 获取到结果

      } catch (err) {
        console.log(err)
      }
    },
    //将base64转换为文件
    dataURLtoFile (dataurl, item) {
      var arr = dataurl.split(","),
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], item.name, {
        type: 'image/png'
      });
    },
    //上传图片
    async uploadImage (e, base64) {
      console.log('进入上传方法')
      //上传图片
      const file = this.dataURLtoFile(base64, e)
      let params = new FormData();
      params.append("file", file);
      params.append("bizId", "6853d6365763426aa7d6d020a6b0870z");
      var newFileList = this.fileList
      console.log('开始上传，未进入接口')
      console.log(this.fileList)
      const imageUploadRes = await imageUpload(this, params).then(res => {
        console.log('进入接口')
        if (res.status === 200 && res.data.returnCode === "200000") {
          console.log('进入成功')

          newFileList.map((item, index) => {
            if (item.name === e.name) {
              item.status = 'done'
              item.message = '上传成功'
              item.url = res.data.picUrl
              item.name = Date.now()
            }
          })
        }
        else {
          console.log('进入失败')

          newFileList.map(item => {
            if (item.name && item.name === e.name) {
              item.status = 'failed'
              item.message = '上传失败'
              item.url = res.data.picUrl
              item.name = Date.now()
            }
          })
        }
        this.uploadPos()
        return this.fileList
      });

    },
  }

}
</script>

<style lang="scss" scoped>
.title {
  font-size: px2rem(14);
  padding: px2rem(10);
  box-sizing: border-box;
  width: 100%;
  margin-bottom: px2rem(20);
}
.imageUpload {
  position: relative;
  .almUpload {
    position: absolute;
    bottom: 0px;
    width: px2rem(60);
    height: px2rem(60);
    margin: 0 8px 8px 0;
    background-color: #f7f8fa;
    flex-direction: column;
    -webkit-box-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    i {
      font-size: px2rem(24);
      color: #dcdee0;
    }
  }
}

.image-upload-wrapper {
  width: 100%;
  padding: 0 px2rem(16);
  box-sizing: border-box;
  .image-upload-title {
    // @include lineHeight44;
    @include fontColorBlack;
    // line-height: px2rem(44);
    font-size: px2rem(14);
    padding: px2rem(15) 0;
  }
  .image-upload {
    width: 100%;
    padding: px2rem(10) 0;
    box-sizing: border-box;
    border-bottom: px2rem(1) solid rgba(237, 237, 237, 1);
    span {
      font-size: px2rem(14);
      color: #4e78de;
    }
  }
}
</style>
<style lang="scss">
// @import "../../../assets/style/global.scss";
.image-upload-wrapper {
  &.upload-none {
    .van-uploader__upload:not(.upload) {
      display: none;
    }
  }

  .van-uploader__file {
    width: px2rem(60);
    height: px2rem(60);
  }
}
.van-uploader__wrapper--disabled {
  opacity: 1;
  .van-uploader__preview {
    width: px2rem(60);
    height: px2rem(60);
    .van-uploader__file {
      width: px2rem(60);
      height: px2rem(60);
    }
  }
  .van-uploader__upload {
    display: none;
  }
}
</style>