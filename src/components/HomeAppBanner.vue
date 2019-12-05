<template>
  <div class="HomeAppBanner">
    <h2 class="app-banner-title">
        <span>LG디스플레이</span> 앱에서 투자정보/소식을 받아보고, <br />
         IR담당자와 소통할 수 있습니다.
    </h2>
    <div class="app-banner-banner">
        <img 
          width="213px" 
          src="../assets/img/Google_Play.png" 
        />
        <img 
          width="213px" 
          src="../assets/img/Apple_Store.png" 
        />
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeAppBanner',
  data() {
    return {
    }
  },
  components: {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeAppBanner {
    padding: 120px 0;
    background: #F2F2F2;

    .app-banner-title {
        font-size: 34px;
        text-align: center;
        letter-spacing: -0.5px;
        color: $font-color-base;

        span {
            color: $brand-color;
        }
    }
    .app-banner-banner {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;

        img {
            margin-right: 18px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
    

    @media ( max-width: 899px ) {
    }
}
</style>
