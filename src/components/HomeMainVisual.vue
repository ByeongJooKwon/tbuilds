<template>
  <div class="HomeMainVisual">
    <!-- 메인 -->
    <div class="home-main-visual">
      <div class="home-main-visual-container">
        <h2>Inverstor Relations</h2>

        <div class="main-information">
          <div class="title">
            <h4>
              14,400원
            </h4>
            <h5>▲ 100 (+0.7%)</h5>
          </div>
          <h5 class="information">
            거래량 1,816,343 <br />
            시가총액 5,631억원
          </h5>
          <h6 class="curtion">
            10/15 15:06 (KST) LG디스플레이 보통주
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      code: ''
    }
  },
  mounted () {
    console.log('HomeMainVisual.vue mounted start')
    this.getKrxData()
    console.log('HomeMainVisual.vue mounted End!')
  },
  computed: {
    ...mapGetters(['getKrxXMLData'])
  },
  methods: {
    async getKrxData () {
      const _self = this
      console.log(_self.getKrxXMLData, ' : this is blank?')
      if (_self.getKrxXMLData) {
        const param = {
          'code': _self.getKrxXMLData
        }
        const krxData = this.$store.dispatch('GET_KRX', param)
        console.log(this.getKrxXMLData, ': homeMainVisual krxData')
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/style/_variables.scss";
.HomeMainVisual {
  .home-main-visual {
    background: url('../assets/img/img_main_visual.png') no-repeat center center / cover;
    width: 100%;
    height: 500px;

    .home-main-visual-container {
      width: 1150px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .main-information {
        width: 274px;
        background: $font-color-base;
        opacity: 0.9;
        padding: 43px 36px 30px 36px;
        position: absolute;
        bottom: 0;
        right: 0;
        color: #fff;

        .title {

          & h4 {
            font-weight: bold;
            font-size: 34px;
          }
          & h5 {
            font-size: 16px;
            margin-top: 9px;
          }
        }
        .information {
          font-size: 16px;
          line-height: 24px;
          margin-top: 14px;
        }
        .curtion {
          margin-top: 48px;
          font-size: 10px;
        }
      }
    }

    & h2 {
      font-size: 34px;
      color: #FFFFFF;
      font-weight: bold;
      text-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    }
  }

  @media (min-width: 900px) and (max-width: 1149px) {
    .home-main-visual-container {
      width: 900px !important;
    }
  }

  @media ( max-width: 899px ) {
    .home-main-visual {
      height: 300px;

      .home-main-visual-container {
        width: 100%;
        height: 100%;
        margin: 0 auto;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        padding: 20px;

        .main-information {
          width: 100%;
          background: $font-color-base;
          opacity: 0.9;
          padding: 13px 20px;
          position: relative;
          bottom: 0;
          left: 0;
          color: #fff;

          .title {
            display: flex;
            align-items: flex-end;
            & h4 {
              font-weight: bold;
              font-size: 24px;
            }
            & h5 {
              font-size: 12px;
              margin-top: 0;
              margin-left: 10px;
              margin-bottom: 2px;
            }
          }
          .information {
            display: none;
            font-size: 16px;
            line-height: 24px;
            margin-top: 14px;
          }
          .curtion {
            margin-top: 4px;
            font-size: 10px;
          }
        }
      }

      & h2 {
        color: #ffffff;
        font-size: 24px;
        font-weight: bold;
        height: calc(100% - 81px);
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
