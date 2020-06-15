<!--
 * @Descripttion: 影像上传组件
 * @Author: penglu
 * @Date: 2020-06-09 15:06:56
-->
<template lang="pug">
	.image-upload-wrapper(:id="item.vId")
		.image-upload-title {{item.text}}
		.image-upload
			van-uploader(
			
				accept="image/gif, image/jpeg ,image/png"
				class="image-upload-uploader" 
				v-model="fileList" 
				:before-delete="afterDelete"
				:before-read="beforeRead"
				:after-read="afterRead" 
				@delete="deleteImage"
			)
		//- img(id="img1" src="../../../assets/666.png")

</template>

<script>
import { Uploader, Toast } from "vant";
import EXIF from "exif-js";
export default {
  props: ["item"],
  components: {
    "van-uploader": Uploader,
    Toast
  },

  data() {
    return {
      fileList: [],
      images: []
    };
  },
  created() {
    this.$set(this.fileList, this.item.vModel, "");
  },
  mounted() {
    // this.getOrientation();
  },
  methods: {
    //   // 返回布尔值
    //   beforeRead(file) {
    //     // if (file.type !== "image") {
    //     //   Toast("请上传正常格式的图片");
    //     //   return false;
    //     // }
    //     // return true;
    //   },
    //   afterRead(file) {
    //     console.log(this.fileList);
    //     this.$nextTick(() => {
    //       this.getOrientation(this.fileList.length);
    //     });
    //     // file.status = "uploading";
    //     // file.message = "上传中...";
    //     // Toast("上传中...");
    //     // setTimeout(() => {
    //     //   file.status = "failed";
    //     //   file.message = "上传失败";
    //     //   Toast("上传失败...");
    //     // }, 1000);
    //   },
    //删除文件
    deleteImage(file) {
      console.log(file);
    },
    // 获取图片坐标
    getOrientation(index) {
      var vModel = document.getElementById(this.item.vId);
      var img1 = vModel.getElementsByClassName("van-image__img")[index - 1];
      // var img1 = document.getElementById("img1");
      console.log(img1);
      console.log(EXIF.getData(img1));
      EXIF.getData(img1, function() {
        const _GPSLongitude = JSON.stringify(EXIF.getTag(this, "GPSLongitude"));
        const _GPSLatitude = JSON.stringify(EXIF.getTag(this, "GPSLatitude"));
        console.log(_GPSLatitude);
      });
    },
    // 上传之前
    async beforeRead(file) {
      console.log(file, "beforeRead");
      return new Promise((resolve, reject) => {
        this.isloadImg = true;
        let ishas = this.fileList.some(function(cur, i, arr) {
          return cur.file.name === file.name;
        });
        if (ishas) {
          this.$alert("图片已存在");
          this.isloadImg = false;
          return;
        }
        if (file.type.indexOf("image/") === -1) {
          this.$alert("请上传 jpg 格式图片");
          reject();
        } else {
          this.imgPreview(file);
          resolve();
        }
      });
    },
    //删除之后的回调
    async afterDelete(file) {
      this.isloadImg = true;
      return new Promise((resolve, reject) => {
        console.log("删除文件的回调,afterDelete");
        this.isloadImg = false;
        resolve();
      });
    },
    afterRead(file) {
      //上传完成
      console.log(this.item.vModel, "id");
      console.log(file, "afterRead");
      console.log(this.fileList);
      this.$nextTick(() => {
        this.getOrientation(this.fileList.length);
      });
    },
    imgPreview(file) {
      let self = this;
      // 看支持不支持FileReader
      if (!file || !window.FileReader) return;
      let reader = new FileReader();
      // 将图片2将转成 base64 格式
      reader.readAsDataURL(file);
      // 读取成功后的回调
      reader.onloadend = function() {
        //此处的this是reader
        let result = this.result;
        let img = new Image();
        // console.log(result,'2222222222222')
        img.src = result;
        //判断图片是否大于500K,是就直接上传，反之压缩图片
        if (this.result.length <= 500 * 1024) {
          file.cusContent = result;
          self.isloadImg = false;
        } else {
          img.onload = function() {
            let data = self.compress(img);
            file.cusContent = data;
            self.isloadImg = false;
          };
        }
      };
    },
    // 压缩图片
    compress(img) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      //瓦片canvas
      let tCanvas = document.createElement("canvas");
      let tctx = tCanvas.getContext("2d");
      let width = img.width;
      let height = img.height;
      //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
      let ratio;
      if ((ratio = (width * height) / 4000000) > 1) {
        ratio = Math.sqrt(ratio);
        width /= ratio;
        height /= ratio;
      } else {
        ratio = 1;
      }
      canvas.width = width;
      canvas.height = height;
      //铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      //如果图片像素大于100万则使用瓦片绘制
      let count;
      if ((count = (width * height) / 1000000) > 1) {
        // console.log("超过100W像素"); ~~ 是利于符号转换成数字类型
        count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
        //      计算每块瓦片的宽和高
        let nw = ~~(width / count);
        let nh = ~~(height / count);
        tCanvas.width = nw;
        tCanvas.height = nh;
        for (let i = 0; i < count; i++) {
          for (let j = 0; j < count; j++) {
            tctx.drawImage(
              img,
              i * nw * ratio,
              j * nh * ratio,
              nw * ratio,
              nh * ratio,
              0,
              0,
              nw,
              nh
            );
            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
          }
        }
      } else {
        ctx.drawImage(img, 0, 0, width, height);
      }
      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.3);
      tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
      // console.log(ndata,'压缩后的base64');
      return ndata;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
.image-upload-wrapper {
  width: 100%;
  min-height: px2rem(123);
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
    min-height: px2rem(79);
    border-bottom: px2rem(1) solid rgba(237, 237, 237, 1);
  }
}
</style>
