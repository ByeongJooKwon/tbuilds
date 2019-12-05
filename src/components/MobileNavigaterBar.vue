<template>
  <div class="MobileNavigaterBar">
    <header>
      <div class="header-logo">
        <img width="118px" src="../assets/img/img_header_logo.png" />
      </div>

      <img 
        width="24px"
        src="../assets/img/ic_menu.png"
        class="header-menu"
        @click="headerMenuBtn()"
        />

        <div 
          v-if="isMenuShow"
          class="header-navigation"
        >
          <ul>
            <li class="active">
              <a href="javascript: void(0)">
                실적발표
              </a>
            </li>
            <li>
              <a href="javascript: void(0)">
                IR뉴스
              </a>
            </li>
            <li>
              <a href="javascript: void(0)">
                경영보고서
              </a>
            </li>
            <li>
              <a href="javascript: void(0)">
                재무정보
              </a>
            </li>
            <li>
              <a href="javascript: void(0)">
                공시
              </a>
            </li>
            <li>
              <a href="javascript: void(0)">
                주주현황
              </a>
            </li>
            <li>
              <a href="javascript: void(0)">
                IR Contact
              </a>
            </li>
          </ul>
        </div>
    </header>    
  </div>
</template>
<script type="text/javascript">
export default {
    name: 'MobileNavigaterBar',
    components: {
    },
    data() {
        return {
          isMenuShow: false,
        };
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
      headerMenuBtn() {
        this.isMenuShow ? this.isMenuShow = false : this.isMenuShow = true;
      }
    },
    created() {
    },
    mounted() {
    },
};
</script>
<style lang="scss">
@import "@/style/_variables.scss";

.MobileNavigaterBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #ffffff;
  z-index: 1500;
  border-bottom: 1px solid $border-color;

  .header-logo {
    height: 21px;
  }

  header {
    padding: 16px;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center; 

    .header-menu {
      position: absolute;
      left: 16px;
      top: 50%;
      margin-top: -12px;
    }
  }
  .header-navigation {
    position: absolute;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 58px;
    text-align: center;
    padding: 0 16px;


    & ul {
    }
    & li {
      list-style: none;
      padding: 15px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.8);
      margin: 0 auto;

      &.active {
        & a {
          color: $brand-color;
          font-size: 18px;
          font-weight: 600;
        }
      }

      & a {
        color: #fff;
        font-size: 18px;
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>
