<template>
  <div class="FooterBody">
    <h3>
        © 2019 LG Display Co., Ltd. All rights reserved.
    </h3>
    <h4>
        (주)LG디스플레이 | 대표이사 한상범 | 사업자등록번호 24-81-00998 <br />
        서울특별시 영등포구 여의대로 128, LG트윈타워
    </h4>
    <h5>
        서비스 제공 ©irkudos.co.kr
    </h5>
  </div>
</template>

<script>

export default {
  name: 'FooterBody',
  components: {
  },
  mounted () {
    // console.log(this.$root.$children[0].globalData.seq)
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.FooterBody { 
  padding: 60px 0;
  width: 1150px;
  margin: 0 auto;

  h3 {
    font-size: 18px;
    color: #1B1D20;
  }
  h4 {
    font-size: 14px;
    color: #545454;
    margin-top: 10px;
  }
  h5 {
    font-size: 14px;
    color: #4DA1FF;
    margin-top: 8px;
  }
      @media (min-width: 900px) and (max-width: 1149px) {
        padding: 60px 0;
        width: 900px;
        margin: 0 auto;
      }
    @media ( max-width: 899px ) {
        padding: 20px 16px;
        width: 100%;
        margin: 0 auto;
        margin-top: 75px;
        border-top: 1px solid $border-color;

        h3 {
          font-size: 14px;
          color: #1B1D20;
        }
        h4 {
          font-size: 12px;
          color: #545454;
          margin-top: 10px;
        }
        h5 {
          font-size: 12px;
          color: #4DA1FF;
          margin-top: 8px;
        }
    }
}

</style>
