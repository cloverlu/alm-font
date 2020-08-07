<!--
 * @Descripttion: 图片上传组件for 安卓
 * @Author: penglu
 * @Date: 2020-08-06 16:50:16
-->
<template lang="pug">
	.image-upload-wrapper(:id="item.vId" :class="uploadVisible ? '' : 'upload-none'" :style="{ height: heightPx }" :ref="'imageUpload' + item.vModel")
		.image-upload-title {{item.text}}
		.image-upload
			van-uploader(
				accept="image/gif, image/jpeg ,image/png, image/jpg"
				class="image-upload-uploader" 
				:file-list="fileList[item.vModel]"
				@delete="deleteImage"
				v-if="imageHas"
				:disabled="true"
				:ref="'vanUpload'+ item.vModel"
			)
			div.almUpload(:style="{ left: leftPx , bottom: bottomPx }"  @click="OpenAlbum" :ref="'almUpload' + item.vModel" v-if="imageHas" )
				i(class="iconfont iconpaizhao")
			span(v-else-if="!imageHas") 无照片 

				
			
		

</template>

<script>
import { Uploader, Toast } from "vant";
import { imageUpload } from "../../../api/loanlnspection";
import { px2rem, realPx, isInteger } from "@/utils/utils";
export default {
  props: ["item", "itemVmodel", "read"],
  components: {
    "van-uploader": Uploader,
    Toast
  },
  data () {
    return {
      fileList: [],
      uploadVisible: true,
      imageHas: false,
      leftPx: '0px',
      bottomPx: px2rem(10) + 'rem',
      heightPx: ''
    };
  },
  mounted () {
    const arr = this.itemVmodel[this.item.vModel];
    if (arr && arr[0] && arr[0].url !== "") {
      if (arr.length > 0) {
        this.imageHas = true;
      } else {
        if (!this.read) {
          this.imageHas = true;
        } else {
          this.imageHas = false;
        }
      }
      if (!this.read) {
        this.uploadVisible = true;
      } else {
        this.uploadVisible = false;
      }
      this.$set(
        this.fileList,
        this.item.vModel,
        this.itemVmodel[this.item.vModel]
      );

    } else {
      this.$set(this.fileList, this.item.vModel, []);


      if (!this.read) {
        this.uploadVisible = true;
        this.imageHas = true;
      } else {
        this.uploadVisible = false;
        this.imageHas = false;
      }
    }
    this.$nextTick(() => {
      this.uploadPos()
    })
  },
  watch: {
    itemVmodel (val, oldval) {
      const arr = val[this.item.vModel];
      if (arr && arr[0] && arr[0].url !== "") {
        if (arr.length > 0) {
          this.imageHas = true;
        } else {
          if (!this.read) {
            this.imageHas = true;
          } else {
            this.imageHas = false;
          }
        }
        if (!this.read) {
          this.uploadVisible = true;
        } else {
          this.uploadVisible = false;
        }
        this.$set(this.fileList, this.item.vModel, val[this.item.vModel]);
      } else {
        this.$set(this.fileList, this.item.vModel, []);
        if (!this.read) {
          this.uploadVisible = true;
          this.imageHas = true;
        } else {
          this.uploadVisible = false;
          this.imageHas = false;
        }
      }
      this.$nextTick(() => {
        this.uploadPos()
      })
    }
  },
  methods: {
    // 上传框的位置(别问我怎么写的，我自己写完都乱了)
    uploadPos () {

      if (this.fileList[this.item.vModel].length > 0) {
        // 屏幕宽度
        const item = "vanUpload" + this.item.vModel;
        const imageUpload = "imageUpload" + this.item.vModel;
        const almUpload = 'almUpload' + this.item.vModel;
        // 屏幕整个宽度
        const allWidth = document.documentElement.clientWidth
        // 文件数量
        const fileLength = this.fileList[this.item.vModel].length - 1
        const allLength = this.fileList[this.item.vModel].length
        // 上传区域的+标题的高度
        const fileHeight = this.$refs[item].$el.offsetHeight + realPx(44)
        // 每个item（上传区域+标题+各种padding的距离）
        const imageUploadHeight = this.$refs[imageUpload].offsetHeight

        if (this.$refs[item].$el.children[0].children[fileLength]) {
          const num68 = realPx(68)
          // 最后一个上传的图片距离左侧边框的距离
          var leftPx = this.$refs[item].$el.children[0].children[fileLength].offsetLeft + num68
          // 屏幕的宽度减去最后一张图片距离边框的距离（如果小于68上传的按钮则要另起一行）
          const tag = allWidth - leftPx
          // item减去上传区域的高度
          const tag2 = imageUploadHeight - fileHeight
          const padingWidth = allWidth - realPx(32)
          // 每一行可以塞的图片个数，整个图片数量可以塞几行
          const num = allLength / (~~(padingWidth / num68))
          if (tag < num68) {
            this.leftPx = '0px'
            this.bottomPx = '-' + num68 + 'px'
            // 如果塞几行的数量为正整数的话，上传的按钮要另起一行，整个item的高度都要加上一个上传按钮的高度
            if (isInteger(num)) {
              this.heightPx = num68 * num + + realPx(60) + num68 + 'px'
            }

          } else {
            this.leftPx = leftPx + 'px'
            this.bottomPx = px2rem(10) + 'rem'
            if (tag2 > num68) {
              this.heightPx = imageUploadHeight - num68 + 'px'
            }
          }
        }

      } else {
        this.leftPx = '0px'
        this.bottomPx = px2rem(10) + 'rem'
      }
    },
    //删除文件
    deleteImage (file, event) {
      const newFileList = this.fileList[this.item.vModel];
      newFileList.splice(event.index, 1);
      this.uploadPos()
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
        type: item.type
      });
    },
    //上传图片
    async uploadImage (e, base64) {
      //上传图片
      const file = this.dataURLtoFile(base64, e)
      let params = new FormData();
      params.append("file", file);
      params.append("bizId", this.$route.params.bizId);
      var newFileList = this.fileList[this.item.vModel];
      const imageUploadRes = await imageUpload(this, params).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {

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
          newFileList.map(item => {
            if (item.name && item.name === e.name) {
              item.status = 'failed'
              item.message = '上传失败'
            }
          })

        }
        this.uploadPos()
        return this.fileList[this.item.vModel];
      });

    },
    aaa () {
      const fileList = [
        {
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1489090922,933946444&fm=26&gp=0.jpg',
          name: 'bq1.png'
        },
        // {
        //   url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3669707182,1525465329&fm=26&gp=0.jpg',
        //   name: 'bq2.png'
        // },
        // {
        //   url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607837365,422709026&fm=26&gp=0.jpg",
        //   name: 'bq3.png'
        // },
        // {
        //   url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3669707182,1525465329&fm=26&gp=0.jpg',
        //   name: 'bq4.png'
        // },
        // {
        //   url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2607837365,422709026&fm=26&gp=0.jpg",
        //   name: 'bq5.png'
        // },
      ]
      fileList.filter(item => {
        this.fileList[this.item.vModel].push({
          name: item.name,
          status: "uploading",
          message: "上传中",
        })

      })
      this.$nextTick(() => {
        this.uploadPos()

      })

    },
    OpenAlbum () {
      let xuiPicture = requireModuleJs("xuiPicture");
      xuiPicture.create({}, res => {
        res.fileList.forEach(item => {
          this.fileList[this.item.vModel].push({
            name: item.name,
            status: "uploading",
            message: "上传中",
          })
          this.$nextTick(() => {
            this.uploadPos()
            this.uploadImage(item, item.file)

          })

        });
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
.image-upload {
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
  border-bottom: px2rem(1) solid #ededed;
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
    // border-bottom: px2rem(1) solid rgba(237, 237, 237, 1);
    min-height: px2rem(75);
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
