<template>
  <div id="app">
    <div class="desktop-header" v-if="$route.fullPath !== '/join'">
      <NavigationBar />
    </div>
    <div class="mobile-header" v-if="$route.fullPath !== '/join'">
      <MobileNavigaterBar />
    </div>
    <div
      :class="{'global-body': widths >= 900 && $route.fullPath !== '/join', 'mobile-global-body': widths < 900 && $route.fullPath !== '/join'}"
      style="overflow: hidden"
    >
      <router-view />
    </div>
    <template v-if="$route.fullPath !== '/join'">
      <footerBody />
    </template>
    <div v-if="isAppDownloadModal" class="app-download-modal">
      <div class="content">
        <h3>주주와 함께하는 LG디스플레이</h3>
        <h4>LG디스플레이 IR앱에서 투자정보/소식을 받아보고, <br /> IR담당자와 소통할 수 있습니다.</h4>
        <div class="app-download-btn" @click="appDownloadModalClose()">
            앱 다운로드
          </div>
        <h5 @click="appDownloadModalClose()">
          모바일 웹에서 계속보기
        </h5>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Vue from 'vue'

import NavigationBar from '@/components/NavigationBar.vue'
import MobileNavigaterBar from '@/components/MobileNavigaterBar.vue'
import FooterBody from '@/components/FooterBody.vue'
import ModalDesktop from '@/components/ModalDesktop.vue'
Vue.component('modal-desktop', ModalDesktop)

export default {
  name: 'app',
  components: {
    NavigationBar,
    MobileNavigaterBar,
    FooterBody
  },
  data () {
    return {
      isMobile: false,
      fullPath: '',
      isAppDownloadModal: false,
      widths: window.innerWidth
    }
  },
  props: [
  ],
  filters: {
  },
  computed: {
  },
  watch: {
  },
  methods: {
    appDownloadModalClose () {
      this.isAppDownloadModal = false
    },
    handleResize () {
      this.widths = window.innerWidth
    },

  },
  beforeCreate () {
    },
  created () {
    console.log('App.vue created started!!')
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    console.log('App.vue created end!!')
  },
  mounted () {
    const param = {
      'url': 'samsung.irpage.co.kr'
    }
    console.log('hello');
    console.log('this.$store :', this.$store);
    const res = this.$store.dispatch('SET_INFO')
    // const filter = 'win16|win32|win64|mac|macintel';
    // const _web = filter.indexOf(navigator.platform.toLowerCase()) < 0 !== true
    // const _iOS = navigator.userAgent.match(/iPhone|iPad|iPod/i) !== null
    // const _android = navigator.userAgent.match(/Android/i) !== null
    if (window.outerWidth < 900) {
      this.isMobile = true
    }
    this.fullPath = this.$route.fullPath
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&display=swap&subset=korean');
@import "@/style/_variables.scss";

* {
  font-family: 'Noto Sans KR', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: inherit;
  text-decoration: none;
}
.modal-map {
    font-size: 14px;
    text-align: center;
    color: #8E8E93;
    opacity: 0.87;
}
.social-sns {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & img {
        margin-left: 10px;
    }
}
.social-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 72px;

    .date {
        font-size: 14px;
        color: #8E8E93;
    }
}
.IR-modal-list {
    list-style: none;
    margin-top: 50px;

    li {
        padding: 26px;
        border-top: 1px solid $border-color;
        display: flex;
        justify-content: left;
        align-items: center;

        &:last-child {
            border-bottom: 1px solid $border-color;
        }

        img {
            margin-right: 20px;
        }
        h5 {
            margin-right: 50px;
        }
        h4 {
        }
    }
}
.modal-desktop-close {
  position: fixed;
  right: 50px;
  top: 70px;

  & img {
    cursor: pointer;
  }
}
input {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.overflow-hidden {
  overflow: hidden;
}
.global-body {
  margin-top: $global-margin-top;
  overflow: hidden;
}
.mobile-global-body {
  margin-top: $mobile-global-margin-top;
}
.flex-lefet-center {
  display: flex;
  justify-content: left;
  align-items: center;
}
.check-box-wrap {
    & label {
        display: flex;
        justify-content: left;
        align-items: center;

        & input {
            opacity: 0;
            position: absolute;
        }
        & .checkbox {
            flex-shrink: 0;
            flex-basis: 24px;
            width: 24px;
            height: 24px;
            border: 0.5px solid #D1D1D6;
            border-radius: 5px;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.15s ease-in-out;
        }
        & input[type="checkbox"]:checked +  .checkbox {
            background: #E91E63;
            border-color: transparent;

            &:after {
                content: '';
                display: block;
                width: 10px;
                height: 10px;
                background: url('assets/img/join/ic_checked.png') center center no-repeat / contain;
            }
        }
        & .text {
            flex: 1;
            margin-left: 11px;
        }
    }
}
.check-box-wrap.size-lg {
    & .checkbox {
        flex-basis: 41px;
        width: 41px;
        height: 41px;
    }
    & input[type="checkbox"]:checked +  .checkbox {
        &:after {
            width: 21px;
            height: 21px;
        }
    }
}
.radio-wrap {
  width: 100%;
  & label {
  display: block;
  text-align: center;
    & input {
      opacity: 0;
      position: absolute;
    }
    .radio-box {
      background: #FFFFFF;
      border: 1px solid #D1D1D6;
      border-radius: 4px;
      padding: 12px;
    }
    & input[type="radio"]:checked +  .radio-box {
        background: #E91E63;
        color: #ffffff;
        border-color: transparent;
    }
  }
}
.mobile-header {
  display: none;
}
.desktop-header {
  display: block;
}
.modal-mobile-header {
  display: none;
}
.app-download-modal {
  display: none;
}
@media (max-width: 899px) {
  .app-download-modal {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    z-index: 10000000000;

    .content {
      padding: 47px;
      position: absolute;
      bottom: 0;
      left: 0;
      border-radius: 10px 10px 0 0;
      background: #fff;
      width: 100%;
      text-align: center;

      h3 {
        font-size: 20px;
        letter-spacing: -0.005em;
        color: #313439;
        font-weight: bold;
      }
      h4 {
        font-size: 12px;
        letter-spacing: -0.005em;
        color: #545454;
        margin-top: 8px;
      }
      .app-download-btn {
        background: $brand-color;
        padding: 11px 0;
        width: 100%;
        border-radius: 4px;
        font-weight: bold;
        font-size: 16px;
        color: #fff;
        margin-top: 26px;
        cursor: pointer;
      }
      h5 {
        font-size: 16px;
        letter-spacing: -0.005em;
        color: #8E8E93;
        margin-top: 13px;
        cursor: pointer;
      }

    }
  }
  .mobile-header {
    display: block;
  }
  .desktop-header {
    display: none;
  }
  .social-info {
    display: none;
  }
  .modal-map {
    display: none;
  }
  .modal-desktop-close {
    display: none;
  }
  .modal-mobile-header {
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 9px;
    color: $brand-color;
    border-bottom: 1px solid $border-color;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 9999999999;

    img {
      margin-right: 10px;
    }
  }
}
</style>
