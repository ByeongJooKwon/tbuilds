<template>
  <div class="NavigationBar">
    <header>
      <div class="header-logo">
        <img width="155px" src="../assets/img/img_header_logo.png" />
      </div>
      <div class="header-navigation-box">
        <ul class="header-navigation">
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
      <div class="header-mobile-icon">

        <router-link to="/join">
          <div class="app-join">
            앱 다운로드
          </div>
        </router-link>
      </div>
    </header>
  </div>
</template>
<style lang="scss">
@import "@/style/_variables.scss";

.NavigationBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 1500;
  border-bottom: 1px solid $border-color;

  header {
    width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-logo {
      flex-basis: 155px;
    }

    .header-navigation-box {
      flex-basis: calc(100% - 155px);
      padding-left: 10%;
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .header-navigation {
      display: flex;
      justify-content: left;
      align-items: center;

      & li {
        list-style: none;
        padding: 26px 0 22px 0;
        margin: 0 13px;
        border-bottom: 4px solid transparent;

        &.active {
          // border-bottom: 4px solid $brand-color;
          & a {
            color: $brand-color;
            font-weight:600;
          }
        }

        & a {
          font-size: 16px;
          text-align: center;
          color: #545454;
          text-decoration: none;
        }
      }
    }
    .app-join {
      background: #E91E63;
      border-radius: 4px;
      width: 140px;
      margin-left: -2%;
      text-decoration: none;
      text-align: center;
      color: #fff;
      font-size: 14px;
      padding: 5px 20px;
    }
  }
  @media (min-width: 900px) and (max-width: 1149px) {
    header {
      width: 900px;

      .header-navigation {
        display: flex;
        justify-content: left;
        align-items: center;

        & li {
          list-style: none;
          padding: 26px 0;
          margin: 0 13px;

          & a {
            font-size: 13px;
            text-align: center;
            color: #545454;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
