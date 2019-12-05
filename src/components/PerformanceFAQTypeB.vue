<template>
  <div class="PerformanceFAQTypeB">
    <h2 class="section-title">FAQ</h2>
    <h3 class="section-sube">
      Frequently Asked Questions
    </h3>
    <ul class="FAQ-type-B">
      <li
        v-for="data in datas"
      >
        <div class="FAQ-header">
          <h6 class="number">{{ data.id }}</h6>
          <h6 class="title">{{ data.title }}</h6>
          <img 
          class="arrow"
            width="32px"
            src="../assets/img/FAQ_type_B.png" 
            :class="{'active': data.is_show}"
            @click="isShowFAQ(data.id, data.is_show);"
          />
        </div>

        <div 
          v-if="data.is_show"
          class="FAQ-contents"
        >
          <div 
            v-for="info in data.info"
            class="info-box"
            >
            <h5 class="info-title">
              {{ info.title }}
            </h5>
            <h6 class="info-description">
              {{ info.description }}
            </h6>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'PerformanceFAQ',
  data() {
      return {
        datas: [
          {
            title: '기업정보',
            id: 1,
            is_show: false,
            info: [
              {
                title: 'LG디스플레이 창립연도',
                description: 'LG디스플레이는 1987년 TFT-LCD 개발을 시작으로 OLED, IPS 등의 차별화 기술을 통해, 혁신적인 디스플레이 및 관련 제품을 생산/ 판매하는 글로벌 디스플레이 회사입니다.'
              },
              {
                title: '신용등급 정보',
                description: `LG디스플레이는 해외 유수 평가기관인 무디스(Moody's) 및 S&P로부터 장기 외화채권에 대한 신용등급 평가를 받고 있습니다. 2016년말 현재 무디스(Moody's)의 삼성전자 평가등급은 AA-, 투자전망은 안정적(Stable)이고, S&P의 LG디스플레이 평가등급은 AA-이며 투자 전망은 안정적(Stable)입니다.`
              },
              {
                title: '일반 조명용 올레드 사업 철수',
                description: '신규 OLED 생산 라인에서 제품 양산을 시작한 지 1년 6개월여 만에 일반 조명용 올레드 사업에서 철수하기로 결정하였습니다. 대신 성장성이 큰 차량용 올레드 시장에 집중하기로 하였습니다.'
              },
              {
                title: 'LG디스플레이 이사회구성',
                description: 'LG디스플레이 이사회는 사외이사 6명을 포함한 총 11명의 이사로 구성되어 있습니다.'
              },
            ]
          },
          {
            title: '주식관련사항',
            is_show: false,
            id: 2,
            info: [
              {
                title: 'LG디스플레이 창립연도',
                description: 'LG디스플레이는 1987년 TFT-LCD 개발을 시작으로 OLED, IPS 등의 차별화 기술을 통해, 혁신적인 디스플레이 및 관련 제품을 생산/ 판매하는 글로벌 디스플레이 회사입니다.'
              },
              {
                title: '신용등급 정보',
                description: `LG디스플레이는 해외 유수 평가기관인 무디스(Moody's) 및 S&P로부터 장기 외화채권에 대한 신용등급 평가를 받고 있습니다. 2016년말 현재 무디스(Moody's)의 삼성전자 평가등급은 AA-, 투자전망은 안정적(Stable)이고, S&P의 LG디스플레이 평가등급은 AA-이며 투자 전망은 안정적(Stable)입니다.`
              },
              {
                title: '일반 조명용 올레드 사업 철수',
                description: '신규 OLED 생산 라인에서 제품 양산을 시작한 지 1년 6개월여 만에 일반 조명용 올레드 사업에서 철수하기로 결정하였습니다. 대신 성장성이 큰 차량용 올레드 시장에 집중하기로 하였습니다.'
              },
              {
                title: 'LG디스플레이 이사회구성',
                description: 'LG디스플레이 이사회는 사외이사 6명을 포함한 총 11명의 이사로 구성되어 있습니다.'
              },
            ]
          },
          {
            title: '재무관련사항',
            is_show: false,
            id: 3,
            info: [
              {
                title: 'LG디스플레이 창립연도',
                description: 'LG디스플레이는 1987년 TFT-LCD 개발을 시작으로 OLED, IPS 등의 차별화 기술을 통해, 혁신적인 디스플레이 및 관련 제품을 생산/ 판매하는 글로벌 디스플레이 회사입니다.'
              },
              {
                title: '신용등급 정보',
                description: `LG디스플레이는 해외 유수 평가기관인 무디스(Moody's) 및 S&P로부터 장기 외화채권에 대한 신용등급 평가를 받고 있습니다. 2016년말 현재 무디스(Moody's)의 삼성전자 평가등급은 AA-, 투자전망은 안정적(Stable)이고, S&P의 LG디스플레이 평가등급은 AA-이며 투자 전망은 안정적(Stable)입니다.`
              },
              {
                title: '일반 조명용 올레드 사업 철수',
                description: '신규 OLED 생산 라인에서 제품 양산을 시작한 지 1년 6개월여 만에 일반 조명용 올레드 사업에서 철수하기로 결정하였습니다. 대신 성장성이 큰 차량용 올레드 시장에 집중하기로 하였습니다.'
              },
              {
                title: 'LG디스플레이 이사회구성',
                description: 'LG디스플레이 이사회는 사외이사 6명을 포함한 총 11명의 이사로 구성되어 있습니다.'
              },
            ]
          },
          {
            title: '신규사업관련사항',
            is_show: false,
            id: 4,
            info: [
              {
                title: 'LG디스플레이 창립연도',
                description: 'LG디스플레이는 1987년 TFT-LCD 개발을 시작으로 OLED, IPS 등의 차별화 기술을 통해, 혁신적인 디스플레이 및 관련 제품을 생산/ 판매하는 글로벌 디스플레이 회사입니다.'
              },
              {
                title: '신용등급 정보',
                description: `LG디스플레이는 해외 유수 평가기관인 무디스(Moody's) 및 S&P로부터 장기 외화채권에 대한 신용등급 평가를 받고 있습니다. 2016년말 현재 무디스(Moody's)의 삼성전자 평가등급은 AA-, 투자전망은 안정적(Stable)이고, S&P의 LG디스플레이 평가등급은 AA-이며 투자 전망은 안정적(Stable)입니다.`
              },
              {
                title: '일반 조명용 올레드 사업 철수',
                description: '신규 OLED 생산 라인에서 제품 양산을 시작한 지 1년 6개월여 만에 일반 조명용 올레드 사업에서 철수하기로 결정하였습니다. 대신 성장성이 큰 차량용 올레드 시장에 집중하기로 하였습니다.'
              },
              {
                title: 'LG디스플레이 이사회구성',
                description: 'LG디스플레이 이사회는 사외이사 6명을 포함한 총 11명의 이사로 구성되어 있습니다.'
              },
            ]
          },
        ]
      }
  },
  components: {
  },
  methods: {
     isShowFAQ(id, isOpen) {
        this.datas.map(data => {
          data.is_show = false;

          if (data.id === id && !isOpen) {
            data.is_show = true;
          }
        });
     },
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.PerformanceFAQTypeB {
    .FAQ-type-B {
      padding-top: 106px;
      list-style: none;

      li {
        padding: 40px 20px;
        border-bottom: 1px solid $border-color;
        

        &:first-child {
          border-top: 1px solid $border-color;
        }

        .FAQ-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .FAQ-contents {
          padding: 20px;
          margin-top: 40px;
          .info-box {
            margin-bottom: 40px;
          }
          .info-title {
            font-weight: bold;
            font-size: 19px;
            letter-spacing: -0.5px;
            color: $font-color-base;
          }
          .info-description {
            font-size: 16px;
            margin-top: 20px;
            letter-spacing: -0.5px;
            color: #8E8E93;
          }
        }

        .number {
          width: 36px;
          flex-basis: 36px;
          height: 36px;
          flex-shrink: 0;
          border: 2px solid $font-color-base;
          font-size: 20px;
          text-align: center;
          letter-spacing: -0.5px;
          color: $font-color-base;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }
        .title {
          flex-basis: calc(100% - 68px);
          padding-left: 18px;
          font-weight: bold;
          font-size: 26px;
          letter-spacing: -0.5px;
          color: $font-color-base;
        }
        .arrow {
          width: 32px;
          flex-basis: 32px;
          transform: rotate(180deg);
          cursor: pointer;

          &.active {
            transform: rotate(0);
          }
        }
      }
    }

    @media ( max-width: 899px ) {
    padding: 38px 0;
    border-top: 8px solid #EFEFF4;

    .FAQ-type-B {
      padding: 50px 16px;
      list-style: none;

      li {
        padding: 16px 0;
        border-bottom: 1px solid $border-color;
        

        &:first-child {
          border-top: 1px solid $border-color;
        }

        .FAQ-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .FAQ-contents {
          padding: 20px;
          margin-top: 15px;
          .info-box {
            margin-bottom: 26px;
          }
          .info-title {
            font-weight: bold;
            font-size: 14px;
            letter-spacing: -0.5px;
            color: $font-color-base;
          }
          .info-description {
            font-size: 14px;
            margin-top: 20px;
            letter-spacing: -0.5px;
            color: #8E8E93;
          }
        }

        .number {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          flex-basis: 24px;
          height: 24px;
          flex-shrink: 0;
          border: 2px solid $font-color-base;
          font-size: 14px;
          text-align: center;
          letter-spacing: -0.5px;
          color: $font-color-base;
          border-radius: 50%;
          font-weight: bold;
        }
        .title {
          flex-basis: calc(100% - 68px);
          padding-left: 0;
          font-weight: bold;
          font-size: 18px;
          letter-spacing: -0.5px;
          color: $font-color-base;
        }
        .arrow {
          width: 24px;
          flex-basis: 24px;
          transform: rotate(180deg);
          cursor: pointer;

          &.active {
            transform: rotate(0);
          }
        }
      }
    }
  }
}
</style>
