<template>
  <div class="home">
    <!-- 메인 -->
    <HomeMainVisual />

    <!-- 스케줄 -->
    <HomeSchedule />

    <!-- 실적발표 -->
    <HomePerformance />

    <!-- IR 뉴스 -->
    <HomeIrNews />

    <!-- 경영 보고서 -->
    <HomeManagementReport />

    <!-- 재무 정보 -->
    <HomeFinanceInfo />

    <!-- 공시 -->
    <HomeDisclosure />

    <!-- 주주 현황 -->
    <HomeShareholderStatus />

    <!-- IR CONTANT -->
    <HomeIRContact />
    <!-- APP BANNER -->
    <HomeAppBanner />
  </div>
</template>

<script>
import HomeMainVisual from '@/components/HomeMainVisual.vue'
// import HomeMainInformation from '@/components/HomeMainInformation.vue'
import HomeSchedule from '@/components/HomeSchedule.vue'
import HomePerformance from '@/components/HomePerformance.vue'
import HomeIrNews from '@/components/HomeIrNews.vue'
import HomeManagementReport from '@/components/HomeManagementReport.vue'
import HomeFinanceInfo from '@/components/HomeFinanceInfo.vue'
import HomeDisclosure from '@/components/HomeDisclosure.vue'
import HomeShareholderStatus from '@/components/HomeShareholderStatus.vue'
import HomeIRContact from '@/components/HomeIRContact.vue'
import HomeAppBanner from '@/components/HomeAppBanner.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeMainVisual,
    // HomeMainInformation,
    HomeSchedule,
    HomePerformance,
    HomeIrNews,
    HomeManagementReport,
    HomeFinanceInfo,
    HomeDisclosure,
    HomeShareholderStatus,
    HomeIRContact,
    HomeAppBanner
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.contaner {
  width: 1150px;
  margin: 0 auto;
}
.performance-group-tab {
    display: none;
}

.home-more-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 45px;

  & button {
      display: flex;
      justify-content: center;
      align-items: center;
      appearance: none;
      padding: 15px;
      text-align: center;
      width: 200px;

      background: #FFFFFF;
      border: 1px solid $border-color;
      border-radius: 4px;
      & h6 {
        font-size: 16px;
        color: #8E8E93;
        font-weight: bold;
        margin-bottom: 0;
      }

      & img {
        margin-left: 5px;
    }
  }

  &.top-btn {
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: 0;
    transform: translate(0, -50%);
  }
}

.select-warp {
    width: 200px;
    position: relative;
    font-family: 'Roboto', sans-serif;

    & select {
        background: #ffffff;
        border-radius: 4px;
        padding: 10px 20px;
        font-weight: bold;
        font-size: 21px;
        align-items: center;
        color: $font-color-base;
        -webkit-appearance: none;
        -moz-appearance:none;
        appearance:none;
        width: 100%;
        position: relative;
        border-width: 1px;
        border-color: rgb(169, 169, 169);
    }

    .select-arrow {
        transform: rotate(180deg);
        position: absolute;
        right: 20px;
        top: 50%;
        margin-top: -12px;
        z-index: 2;
    }
}

select::-ms-expand {
  display:none;
}
.section-title {
  padding-top: 36px;
  font-weight: bold;
  font-size: 46px;
  color: $font-color-base;
  position: relative;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  &::after {
    width: 20000px;
    height: 2px;
    background: $font-color-base;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
  }
}

.section-sube {
  font-size: 16px;
  color: #8E8E93;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}

@media (min-width: 900px) and (max-width: 1149px) {
  .contaner {
    width: 900px !important;
  }
}
@media ( max-width: 899px ) {
  .contaner {
    width: 100%;
  }
  .HomeAppBanner {
    display: none;
  }

  .section-title {
      padding: 0 16px;
    font-weight: bold;
    font-size: 32px;
    color: $font-color-base;
    position: relative;

    &::after {
      display: none;
    }
  }

  .section-sube {
  padding: 0 16px;
    font-size: 16px;
    color: #8E8E93;
  }

  .home-more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;

    & button {
        display: flex;
        justify-content: center;
        align-items: center;
        appearance: none;
        padding: 15px;
        text-align: center;
        width: 200px;
        background: transparent;
        border: 0;
        border-radius: 4px;
        & h6 {
          font-size: 12px;
          color: #8E8E93;
          font-weight: normal;
        }

        & img {
          margin-left: 5px;
          width: 10px !important;
      }
    }
  }
  .performance-group-tab {
      padding: 0 16px;
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 50px;

      li {
          flex-basis: calc(20% - 11px);
          font-size: 18px;
          letter-spacing: -0.24px;
          color: #8E8E93;
          padding-bottom: 13px;
          border-bottom: 2px solid transparent;
          text-align: center;

          &.active {
              color: #313439;
              border-bottom: 2px solid $border-color;
          }
      }
  }
}
</style>
