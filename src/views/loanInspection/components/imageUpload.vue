<!--
 * @Descripttion: 影像上传组件
 * @Author: penglu
 * @Date: 2020-06-09 15:06:56
-->
<template lang="pug">
	.image-upload-wrapper(:id="item.vId" :class="uploadVisible ? '' : 'upload-none'")
		.image-upload-title {{item.text}}
		.image-upload
			van-uploader(
				accept="image/gif, image/jpeg ,image/png, image/jpg"
				class="image-upload-uploader" 
				:file-list="fileList[item.vModel]"
				:before-delete="afterDelete"
				:before-read="beforeRead"
				:after-read="afterRead" 
				@delete="deleteImage"
				v-if="imageHas"
			)
			span(v-else-if="!imageHas") 无照片 
		//- img(id="img1" src="../../../assets/666.png")

</template>

<script>
import { Uploader, Toast } from "vant";
import { imageUpload } from "../../../api/loanlnspection";
import EXIF from "exif-js";
export default {
  props: ["item", "itemVmodel", "read"],
  components: {
    "van-uploader": Uploader,
    Toast
  },

  data() {
    return {
      fileList: [],
      images: [],
      uploadVisible: true,
      imageHas: false,
      coordinate: [],
      params: {
        fileList: [],
        coordinate: []
      }
    };
  },
  created() {
    // console.log(this.fileList);
  },
  mounted() {
    const arr = this.itemVmodel[this.item.vModel];
    if (arr && arr[0]) {
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
  },
  watch: {
    itemVmodel(val, oldval) {
      const arr = val[this.item.vModel];
      if (arr && arr[0]) {
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
    }
  },
  methods: {
    //删除文件
    deleteImage(file, event) {
      const newFileList = this.fileList[this.item.vModel];
      newFileList.splice(event.index, 1);
    },
    // 获取图片坐标(文件法)
    getLo(file, index) {
      const newFileList = this.fileList[this.item.vModel];
      let Longitude;
      let Latitude;
      var getdate = function(e) {
        EXIF.getData(e, function() {
          let SubjectLocation = EXIF.getAllTags(e);
          // console.log("imgdata", SubjectLocation);

          if (SubjectLocation.GPSLongitude) {
            const LongitudeArry = SubjectLocation.GPSLongitude;
            const longLongitude =
              LongitudeArry[0].numerator / LongitudeArry[0].denominator +
              LongitudeArry[1].numerator / LongitudeArry[1].denominator / 60 +
              LongitudeArry[2].numerator / LongitudeArry[2].denominator / 3600;
            Longitude = longLongitude.toFixed(6);
            // Longitude = longLongitude;
          }

          if (SubjectLocation.GPSLatitude) {
            const LatitudeArry = SubjectLocation.GPSLatitude;
            const longLatitude =
              LatitudeArry[0].numerator / LatitudeArry[0].denominator +
              LatitudeArry[1].numerator / LatitudeArry[1].denominator / 60 +
              LatitudeArry[2].numerator / LatitudeArry[2].denominator / 3600;
            Latitude = longLatitude.toFixed(6);
          }
          newFileList[index].dimension = Latitude || "";
          newFileList[index].longitude = Longitude || "";
        });
      };
      getdate(file);
    },
    // 获取图片坐标（获取dom法）
    getOrientation(index) {
      const newFileList = this.fileList[this.item.vModel];
      var vModel = document.getElementById(this.item.vId);
      var img1 = vModel.getElementsByClassName("van-image__img")[index];
      // var img1 = document.getElementById("img1");
      console.log(img1);
      console.log(EXIF.getData(img1));
      var coordinate = {};
      if (!EXIF.getData(img1)) {
        coordinate = {
          dimension: "",
          longitude: ""
        };
        newFileList[index].dimension = coordinate.dimension;
        newFileList[index].longitude = coordinate.longitude;
        return false;
      }
      EXIF.getData(img1, function() {
        const _GPSLongitude = JSON.stringify(EXIF.getTag(this, "GPSLongitude"));
        const _GPSLatitude = JSON.stringify(EXIF.getTag(this, "GPSLatitude"));
        if (_GPSLongitude) {
          coordinate = {
            dimension: "",
            longitude: ""
          };
        } else {
          coordinate = {
            dimension: _GPSLatitude,
            longitude: _GPSLongitude
          };
        }
      });
      newFileList[index].dimension = coordinate.dimension;
      newFileList[index].longitude = coordinate.longitude;
    },
    // 上传之前
    async beforeRead(file) {
      console.log(file, "beforeRead");
      return new Promise((resolve, reject) => {
        // let ishas = this.fileList[this.item.vModel].some(function(cur, i, arr) {
        //   return cur.file.name === file.name;
        // });
        // console.log(ishas);
        // if (ishas) {
        //   this.$alert("图片已存在");
        //   this.isloadImg = false;
        //   return;
        // } else {
        //   this.imgPreview(file);
        //   resolve();
        // }
        this.imgPreview(file);
        resolve();
      });
    },
    //删除之前的回调
    async afterDelete(file, event) {
      return new Promise((resolve, reject) => {
        resolve();
      });
    },
    async afterRead(file) {
      //上传完成
      console.log(this.item.vModel, "id");
      console.log(file, "afterRead");
      console.log(this.fileList[this.item.vModel]);
      file.status = "uploading";
      file.message = "上传中...";

      //上传图片
      let params = new FormData();
      params.append("file", file.file);
      params.append("bizId", this.$route.params.bizId);

      const imageUploadRes = await imageUpload(this, params).then(res => {
        if (res.status === 200 && res.data.returnCode === "200000") {
          file.status = "done";
          file.message = "上传成功";

          const newFileList = this.fileList[this.item.vModel];

          if (newFileList.length > 0) {
            const index = newFileList.length;
            newFileList.splice(index, 1);
          }
          newFileList.push({
            url: res.data.picUrl
          });
        } else {
          file.status = "failed";
          file.message = "上传失败";
        }
        return this.fileList[this.item.vModel];
      });

      console.log(imageUploadRes);
      if (imageUploadRes) {
        var index = "";
        if (imageUploadRes.length > 0) {
          index = imageUploadRes.length - 1;
        } else {
          index = 0;
        }
        // this.getOrientation(index);
        this.getLo(file.file, index);
      }
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
            console.log(file.size);
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

      return ndata;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/global.scss";
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
@import "../../../assets/style/global.scss";
.image-upload-wrapper {
  &.upload-none {
    .van-uploader__upload {
      display: none;
    }
  }
  .van-uploader__file {
    width: px2rem(60);
    height: px2rem(60);
  }
}
</style>
