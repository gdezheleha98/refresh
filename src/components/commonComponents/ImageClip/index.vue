<template>
    <div class="inputPhoto">
        <div id="img1">

        </div>
        <!--image upload data-->

        <div
                class="img-requirements"
                v-show="!file || !isShownClipper"
        >
            <h6>
                Фотографія повинна відповідати наступним вимогам
            </h6>
            <ol>
                <li
                        v-for="(elem, index) in $store.getters.getImageRequirements"
                        :key="index"
                >
                    {{elem}}
                </li>
            </ol>
        </div>

        <div class="before-upload" id="image-clipper">
            <div class="photo-example">
                <img v-if="!file " src="../../../assets/PersonPhoto.png" alt="Person photo example">
                <clipper-preview v-else name="my-preview" class="my-clipper">
                </clipper-preview>
            </div>
            <div class="upload-info--wrap">
                <!--<div class="col-md-12">-->
                <div class="col-md-12 upload-info">
                    <p>
                        Формат: .jpg файл<br>
                        Розмір: Мах. 1mb, Min. {{minImgWidth}}х{{minImgHeight}}
                    </p>
                    <span
                            class="error-msg"
                            v-if="isShownErrorMsg"
                    >
                        <!--Це поле обовязкове-->
                        {{getErrorMsg}}
                    </span>
                </div>
                <clipper-upload v-model="file" accept="image/*" class="upload-btn">
                    <button type="button" class="btn btn-pink">
                        {{uploadButtonText}}
                    </button>
                </clipper-upload>
            </div>
        </div>

        <div v-if="isShownClipper">
            <div
                    class="col-md-12 clipper"
            >
                <clipper-basic
                        :ratio="3/4"
                        :src="file"
                        ref="clipper"
                        preview="my-preview"
                ></clipper-basic>
            </div>
            <div class="col-md-12 clip-btn-wrap" v-if="file">
                <button class="btn btn-cancel" type="button" @click="cancelImage">
                    Скасувати
                </button>
                <button type="button" class="btn btn-pink" @click="clipImg">
                    Зберегти фото
                </button>
            </div>
        </div>
    </div>
</template>

<script>
// import changeProp from '../../PupilCard/mixins/changeProps'

export default {
  // mixins: [changeProp],
  data () {
    return {
      blobResult: null,
      file: null,
      isShownClipper: true,
      dirty: false,
      image: {
        base64: null,
        blobObj: null
      },
      errorMsg: '',
      defaultErrorMsg: 'Це поле обовязкове',
      biggerImgErrorMsg: 'Розмір фото перевищує дозволений',
      smallerImgErrorMsg: 'Якість фото нижче ніж потрібно',
      errorMsgType: 1,
      minImgWidth: 480,
      minImgHeight: 640
    }
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  methods: {
    cancelImage () {
      this.file = null
      this.$store.getters.getUser.personPhoto = null
    },
    async clipImg () {
      const canvas = this.$refs.clipper.clip()// call component's clip method
      const quality = 0.95
      // validation
      this.value.isDirtyFile = true
      this.$emit('input', this.value)

      // hide clipper block
      this.isShownClipper = false

      // check img size
      const imageSize = canvas.height * canvas.width
      const isAllowedImageSize = this.isAllowedImageSize(imageSize)

      if (isAllowedImageSize) {
        canvas.toBlob(bl => {
          // this.$store.getters.getUser.personPhoto = bl;
          // console.log(bl);
          this.emitDataToParent(bl)
        }, 'image/jpeg', quality)
      } else {
        // this.file = null;
      }
    },
    isAllowedImageSize (imageSize) {
      const min = this.minImgWidth * this.minImgHeight
      const max = 4096 * 4096

      if (imageSize > max) {
        this.errorMsgType = 2
        this.value.isValidFile = false
        return false
      } else if (imageSize < min) {
        this.value.isValidFile = false
        this.errorMsgType = 3
        return false
      } else {
        this.errorMsgType = 1
      }
      return true
    },
    emitDataToParent (bl) {
      this.$emit('save-image', bl)
    }
  },
  watch: {
    file (newVal, oldVal) {
      this.value.isValidFile = !!newVal

      this.value.isDirtyFile = true
      this.$emit('input', this.value)

      // show clipper blok
      if (newVal && oldVal) {
        this.isShownClipper = true
      }
    }
  },
  computed: {
    uploadButtonText () {
      return this.file ? 'Інше фото' : 'Завантажити фото'
    },
    isShownErrorMsg () {
      return this.value.isDirtyFile === true && this.value.isValidFile === false
    },
    getErrorMsg () {
      switch (this.errorMsgType) {
        case 1:
          return this.defaultErrorMsg
          break
        case 2:
          return this.biggerImgErrorMsg
          break
        case 3:
          return this.smallerImgErrorMsg
          break
        default:
          return this.defaultErrorMsg
      }
    }
  }
}
</script>

<style scoped lang="scss">
    .inputPhoto {
        width: 100%;
        justify-content: center;
        margin-bottom: 12px;

        img {
            margin-bottom: 20px;
            /*width: 62px !important;*/
            width: 100%;
            height: auto;
            max-height: 300px;
            object-fit: cover;
        }
    }

    .clip-btn-wrap {
        /*padding-bottom: 20px;*/
    }

    .before-upload {
        display: flex;
    }

    .photo-example {
        width: 100%;
        max-width: 87px;
        margin-left: 40px;
        margin-top: 16px;
        height: auto;
        max-height: 116px;
        object-fit: cover;

        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            /*max-width: 54px;*/
        }
    }

    .upload-info--wrap {
        width: 100%;
        padding-left: 33px;
    }

    .upload-info {
        margin-top: 26px;
        padding-left: 0;

        p {
            color: #000000;
            font-family: Calibri;
            font-size: 16px;
            text-align: left;
            font-weight: 400;
        }
    }

    .upload-btn {
        width: 100%;

        button {
            margin: 0;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            border-radius: 3px;
        }
    }

    .btn-cancel {
        border: 1px solid #b54285;
        color: #434343;
        font-family: "Century Gothic";
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;

        &:hover {
            color: white;
            background-color: #d967a7;
        }
    }

    .img-requirements {
        h6 {
            margin-top: 10px;
            text-align: center;
            font-size: 16px;
            font-family: Calibri;
        }

        ol {
            width: 100%;
            padding-left: 20px;
            margin-top: 15px;
        }

        li {
            width: 100%;
            font-size: 14px;
            line-height: 1.2em;
            font-family: Calibri;
            color: #000;
        }
    }

    .clipper {
        margin-top: 27px;
    }

    @media screen and (max-width: 540px) {
        .photo-example {
            margin-left: 20px;
        }
    }

    @media screen and (max-width: 430px) {
        .upload-info--wrap {
            padding-left: 10px;
        }
        .upload-btn {
            button {
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 325px) {
        .photo-example {
            margin-left: 10px;
        }
    }
</style>
