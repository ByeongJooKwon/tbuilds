<template>
  <div class="HomeDisclosure contaner">
    <h2 class="section-title">공시</h2>
    <h3 class="section-sube">
      Disclosure
    </h3>
    <ul class="disclosure-info">
        <li>
            <h5>신주인수권행사가액의조정</h5>
            <h6>
                2019년 10월 10일
            </h6>
        </li>
        <li>
            <h5>기업설명회(IR)개최(안내공시)</h5>
            <h6>
                2019년 10월 10일
            </h6>
        </li>
        <li>
            <h5>연결재무제표기준영업(잠정)실적(공정공시)</h5>
            <h6>
                2019년 10월 10일
            </h6>
        </li>
        <li>
            <h5>대규모기업집단현황공시[분기별공시(개별회사용)]</h5>
            <h6>
                2019년 10월 10일
            </h6>
        </li>
        <li>
            <h5>특수관계인에대한영업양도</h5>
            <h6>
                2019년 10월 10일
            </h6>
        </li>
    </ul>
    <div class="home-more-btn">
      <button
        type="button"
        class=""
      >
      <h6>더보기</h6>
      <img 
        width="12px" 
        src="../assets/img/more_arrow.png" 
      />
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeDisclosure',
  components: {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeDisclosure {
  padding-top: 200px;

  .disclosure-info {
      margin-top: 106px;
      list-style: none;

      li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 20px;
          border-bottom: 1px solid $border-color;
          height: 120px;

          &:first-child {
              border-top: 1px solid $border-color;
          }

          h5 {
              font-size: 21px;
              letter-spacing: -0.5px;
              color: $font-color-base;
          }
          h6 {
              font-size: 12px;
              text-align: right;
              letter-spacing: -0.5px; 
              color: #8E8E93;
          }
      }
  }

  @media ( max-width: 899px ) {
    padding: 38px 0;
    border-top: 8px solid #EFEFF4;

    .disclosure-info {
        margin-top: 50px;
        list-style: none;
        padding: 0 16px;

        li {
            display: block;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            border-bottom: 1px solid $border-color;
            height: auto;

            &:first-child {
                border-top: 1px solid $border-color;
            }

            h5 {
                font-size: 16px;
                letter-spacing: -0.5px;
                color: $font-color-base;
            }
            h6 {
                ont-size: 10px;
                text-align: left;
                letter-spacing: -0.5px; 
                color: #8E8E93;
                margin-top: 7px;
            }
        }
    }
  }
}
</style>
