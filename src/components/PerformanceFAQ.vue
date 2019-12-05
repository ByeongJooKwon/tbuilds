<template>
  <div class="PerformanceFAQ">
    <div class="FAQ-title">
      <h4>FAQ</h4>
      <div class="performance-faq-select">
          <div class="select-warp">
              <select>
                  <option>2019.2Q</option>
                  <option>2019.2Q</option>
                  <option>2019.2Q</option>
                  <option>2019.2Q</option>
              </select>
              <div class="select-arrow">▲</div>
          </div>
      </div>
    </div>
    <ul class="performance-group-tab">
      <li class="active">
        <a>19.2Q</a>
      </li>
      <li>
        <a>19.1Q</a>
      </li>
      <li>
        <a>18.4Q</a>
      </li>
      <li>
        <a>18.3Q</a>
      </li>
      <li>
        <a>18.2Q</a>
      </li>
    </ul>
    <ul class="performance-FAQ">
      <li
            @click="clickModal(true)"
        >
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>일반 조명용 올레드 사업을 철수한다고 하던데 진행배경과 향후 전략이 어떻게 되는지 궁금합니다.</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li
            @click="clickModal(true)"
        >
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>베스트바이와 손잡고 미국시장에 집중하고 있는데 현재 미국시장에서의 입지와 앞으로의 계획은 어떻게 되나요?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li
          @click="clickModal(true)"
      >
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>중국 현지 LCD 기업이 부진하고 LCD시장의 불황인 상황인데 현 상황에서 계획은?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li
          @click="clickModal(true)"
      >
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>2018년에 조달해 둔 자금을 사용하지 않았기 때문에 추가적인 자금사용계획이 있으신가요?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
      </li>
      <li
          @click="clickModal(true)"
      >
        <h5>
          Q
        </h5>
        <div class="title">
            <h4>이번에 조직개편을 단행하였는데 R&D 조직 개편 강화와 시장 상황에 신속 대응하고자 한다고 하셨는데 구체적인 계획이 어떻게 되나요?</h4>
            <h6>2019년 10월 10일</h6>
        </div>
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
    <modal-desktop
        v-if="isIRModal"
    >
        <div slot="body">
            <div 
                class="modal-desktop-close"
                @click="clickModal(false)"
            >
                <img
                    width="40px"
                    src="../assets/img/ic_modal_close.png"
                />

            </div>
            <div class="modal-mobile-header">
                <img
                    width="32px"
                    src="../assets/img/mobile_modal_close.png"
                    @click="clickModal(false)"
                />
                <span>실적발표_ FAQ</span>
            </div>
            <h5 class="modal-map">Investor Relations > 실적발표(FAQ)</h5>
            <h5 class="FAQ-modal-question">
                <div class="quest-anser-icon">
                  Q
                </div>
                설훈 주주님의 질문입니다.
            </h5>
            <h5 class="FAQ-modal-title">
                중국 현지 LCD 기업이 부진하고 LCD시장의 불황인 상황인데 현 상황에서 계획이 어떻게 되시나요?
            </h5>
            <div class="social-info">
                <h5 class="date">
                    
                </h5>
                <div class="social-sns">
                    <img
                        width="7px"
                        src="../assets/img/modal_facebook.png"
                    />
                    <img
                        width="18px"
                        src="../assets/img/modal_twiiter.png"
                    />
                    <img
                        width="80px"
                        src="../assets/img/modal_share.png"
                    />
                </div>
            </div>
            <h5 class="FAQ-modal-anser">
                <div class="quest-anser-icon anser">
                  A
                </div>
                2019년 10월 10일
            </h5>
            <h4
                class="IR-main-description"
                v-html="modalDescription"
            >
            </h4>
            <div class="FAQ-file-upload">
              <div class="title">첨부파일</div>
              <div class="file-list">
                <h5>
                  <img
                      width="16px"
                      src="../assets/img/file_type_pdf_1.png"
                  />
                  첨부파일 1
                </h5>
                <h5>
                  <img
                      width="16px"
                      src="../assets/img/file_type_pdf_2.png"
                  />
                  첨부파일 2
                </h5>
              </div>
            </div>
            <ul class="IR-modal-list">
                <li>
                    <img
                        width="30px"
                        src="../assets/img/IR_modal_left_arrow.png"
                    />
                    <h5>다음</h5>
                    <h4>JP Global TMT Conference 발표자료</h4>
                </li>
                <li>
                    <img
                        width="30px"
                        src="../assets/img/IR_modal_right_arrow.png"
                    />
                    <h5>이전</h5>
                    <h4>JP Global TMT Conference 발표자료</h4>
                </li>
            </ul>
        </div>
    </modal-desktop>
  </div>
</template>

<script>

export default {
  name: 'PerformanceFAQ',
  data() {
      return {
        isIRModal: false,
        modalDescription: `차세대 OLED 디스플레이로 글로벌 프리미엄 TV 시장을 선도하고 있는 LG디스플레이가 다시 한 번 대세 굳히기에 나섰습니다. 세계 최대 TV 시장인 중국의 대도시 광저우에 건설한 8.5세대 OLED 패널 공장이 본격적인 생산에 돌입한 건데요. 대형 OLED 생산량의 대폭 증가로 글로벌 OLED TV시장이 새로운 전기를 맞이하며 본격적으로 확대될 것으로 전망되고 있습니다. LG디스플레이 OLED의 무한성장을 이끌어줄 광저우 OLED 패널 공장을 함께 살펴볼까요? <br /><br /><br /><h3 class="inner-title">대륙의 스케일을 자랑하는 광저우 OLED 공장</h3><br /><br /> 광저우에 새로 자리잡은 8.5세대 OLED 패널 공장은 7만4천m²(약 2만2천평) 대지 위에 지어졌는데요. 이는 무려 축구장 10개를 합친 것과 같은 규모입니다. 기존 LCD 패널공장과 모듈공장, 협력사 단지 및 부대시설 등을 합친 LG디스플레이 광저우 클러스터의 전체 크기는 새로 지어진 패널 공장 부지의 18배(총 132만m², 약 40만평)가 넘어 가히 압도적인 스케일을 자랑합니다.<br /><br /> 앞으로 광저우 OLED 패널 공장에서는 고해상도 55, 66, 77인치 대형 OLED를 주력 생산할 예정인데요. 월 6만장(유리원판 투입 기준) 생산을 시작으로 오는 2021년까지 생산량을 월 9만장으로 끌어올릴 계획입니다. 현재 파주 OLED 공장에서 생산중인 월 7만장과 오는 2022년부터 가동되는 파주 10.5세대 OLED 공장의 월 4만5천장 규모까지 합하면 2022년부터는 연간 1000만대 이상의 OLED 제품을 만들어낼 수 있게 됩니다.<br /><br /><br /><br /> <h3 class="inner-title">세계 최대 TV 시장 중국, OLED 대세화 본격 시동!</h3 <br /><br />중국은 14억명에 육박하는 인구수를 자랑하는 만큼, 압도적인 TV 시장을 형성하고 있는데요. 지난 2011년, 전세계 TV 매출의 22.8%를 차지하며 북미를 제치고 세계 최대 TV 시장으로 올라섰습니다. 또한 2017년에는 점유율 25%를 기록하는 등 꾸준히 세계 TV 시장 흐름을 이끌어 나가는 중입니다.<br /><br /> LG디스플레이는 중국이 주도하는 세계 TV 시장 흐름을 미리 예측하고 누구보다 발빠르게 대응해 왔습니다. 지난 2002년 중국 난징 LCD 모듈 공장 진출을 신호탄으로 현지 생산 비중을 늘리는 한편, 중국 고객사들을 대거 확보하며 저변을 꾸준히 넓혀왔죠. 특히 LG디스플레이가 세계에서 유일하게 생산하고 있는 OLED 패널은 광저우 OLED 패널 공장의 가동을 계기로 중국 현지 OLED 시장의 성장을 빠르게 견인할 뿐 아니라, 이를 바탕으로 글로벌 OLED 시장의 대세화를 가속화 시킬 것으로 기대되는데요. <br /><br />이번 광저우 OLED 공장 가동을 계기로 LG디스플레이는 중국 시장에서의 대세화 굳히기에 박차를 가할 계획인데요. 광저우 OLED 패널 공장은 광둥성 지역 내 여러 LG디스플레이 고객사의 TV 공장들과 밀접해 패널 공급도 더욱 원활하게 이뤄질 수 있습니다. 게다가 고객사에게 필요한 기술을 신속히 지원할 수 있어, 제품 경쟁력도 한층 높아질 것입니다.<br /><br /> 한편, 지난 8월 29일 열린 광저우 OLED 패널 공장 준공식에서 LG디스플레이 한상범 부회장은 “광저우 OLED 공장이 가동함에 따라 파주 OLED 클러스터와 함께 투트랙으로 급성장하고 있는 OLED TV 수요에 보다 적극적으로 대응할 수 있게 됐다”며 “이를 바탕으로 고객에게 더 큰 가치를 제공해 프리미엄 TV 시장에서 OLED 대세화를 앞당기겠다”고 포부를 밝혔습니다.<br /><br /> LG디스플레이는 광저우 OLED 패널 공장 준공으로 전 세계 OLED 시장의 대세화를 앞당길 크고 단단한 두 번째 날개를 얻게 됐는데요. 이에 힘입어 중국 시장은 물론 전세계 프리미엄 TV 시장을 변화시켜 나갈 LG디스플레이의 밝은 미래를 지켜봐 주시길 바랍니다!`,
      }
  },
  components: {
  },
  methods: {
      clickModal(isOpen) {
        const globalBody = document.getElementsByTagName('html')[0];
        
        if (isOpen) {
          globalBody.style.overflow = 'hidden'
        } else {
          globalBody.style.overflow = 'inherit'
        }
        this.isIRModal = isOpen;
      },
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.PerformanceFAQ {
    .FAQ-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 137px;

        & h4 {
            font-size: 32px;
            color: $font-color-base;
        }
    }
    .performance-faq-select {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .performance-FAQ {
        list-style: none;

        li {
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid $border-color;
            padding: 40px 20px;

            &:first-child {
                border-top: 1px solid $border-color;
                margin-top: 34px;
            }

            & h5 {
                flex-basis: 25px;
                font-size: 21px;
                letter-spacing: -0.5px;
                color: #C7C7CC;
            }
            & .title {
                flex-basis: calc(100% - 25px);
                padding-left: 8px;

                & h4 {
                    font-size: 21px;
                    letter-spacing: -0.5px;
                    color: $font-color-base;
                }
                & h6 {
                    font-size: 12px;
                    letter-spacing: -0.5px;
                    color: #8E8E93;
                    opacity: 0.87;
                    margin-top: 16px;
                }
            }
        }
    }

    @media ( max-width: 899px ) {
      .performance-select {
        display: none !important;
      }
      .performance-faq-select {
      display: none;
    }
      .FAQ-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 38px;
          padding: 0 16px;

          & h4 {
              font-size: 32px;
              color: $font-color-base;
          }
      }
      .performance-FAQ {
          list-style: none;

          li {
              display: flex;
              justify-content: space-between;
              border-bottom: 1px solid $border-color;
              margin: 0 16px 0 16px;
              cursor: pointer;
              padding: 16px 0;

              &:first-child {
                  border-top: 0;
                  margin-top: 16px;
              }

              & h5 {
                  flex-basis: 25px;
                  font-size: 21px;
                  letter-spacing: -0.5px;
                  color: #C7C7CC;
                  display: none;
              }
              & .title {
                  flex-basis: calc(100% - 25px);
                  padding-left: 0;

                  & h4 {
                      font-size: 16px;
                      letter-spacing: -0.5px;
                      color: $font-color-base;
                  }
                  & h6 {
                      font-size: 10px;
                      letter-spacing: -0.5px;
                      color: #8E8E93;
                      opacity: 0.87;
                      margin-top: 20px;
                  }
              }
          }
      }
        
    }
    .FAQ-modal-anser,
    .FAQ-modal-question {
        display: flex;
        justify-content: left;
        align-items: center;
        font-weight: bold;
        font-size: 16px;
        color: #8E8E93;
        opacity: 0.87;
        margin-top: 60px;

        .quest-anser-icon {
          margin-right: 7px;
          border: 2px solid #8E8E93;
          color: #8E8E93;
          width: 52px;
          height: 52px;
          line-height: 52px;
          font-size: 25px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;

          &.anser {
            border: 2px solid $brand-color;
            color: $brand-color;
          }
        }
      }
      .FAQ-modal-anser {
        padding-top: 60px;
        border-top: 1px solid $border-color;
        margin-top: 20px;
      }
      .FAQ-modal-title {
          font-weight: bold;
          font-size: 34px;
          margin-top: 18px;
          letter-spacing: -0.5px;
          color: $font-color-base;
          padding-bottom: 23px;
      }
      .IR-main-description {
          margin-top: 57px;
          line-height: 2em;
          text-align: justify;
      }
      .inner-title {
          font-size: 24px;
          font-weight: bold;
      }
      .FAQ-file-upload {
        background: #EFEFF4;
        opacity: 0.6;
        border: 1px solid #E5E5EA;
        border-radius: 2px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        margin-top: 120px;

        .title {
          flex-basis: 100px;
        }
        .file-list {
          flex-basis: calc(100% - 100px);
          justify-content: left;
          align-items: center;
          display: flex;
          padding: 5px 10px;;
          border-left: 1px solid #D3D3D3;

          h5 {
            justify-content: left;
            align-items: center;
            display: flex;
            margin-right: 20px;

            img {
              margin-right: 9px;
            }
          }
        }

      }

      @media ( max-width: 899px ) {

      .FAQ-modal-anser {
        padding-top: 21px;
        border-top: 1px solid $border-color;
      }
      .FAQ-modal-anser,
      .FAQ-modal-question {
          display: flex;
          justify-content: left;
          align-items: center;
          font-weight: bold;
          font-size: 12px;
          color: #8E8E93;
          opacity: 0.87;
          margin-top: 60px;

          img {
            margin-right: 17px;
            width: 40px;
          }
        }
        .FAQ-modal-title {
            font-weight: bold;
            font-size: 22px;
            margin-top: 25px;
            letter-spacing: -0.5px;
            color: $font-color-base;
        }
        .IR-main-description {
            margin-top: 57px;
            line-height: 2em;
            text-align: justify;
            font-size: 15px;            
        }
        .inner-title {
            font-size: 24px;
            font-weight: bold;
        }
        .FAQ-file-upload {
          background: #EFEFF4;
          opacity: 0.6;
          border: 1px solid #E5E5EA;
          border-radius: 2px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          margin-top: 120px;

          .title {
            flex-basis: 100px;
          }
          .file-list {
            flex-basis: calc(100% - 100px);
            justify-content: left;
            align-items: center;
            display: flex;
            padding: 5px 10px;;
            border-left: 1px solid #D3D3D3;

            h5 {
              justify-content: left;
              align-items: center;
              display: flex;
              margin-right: 20px;

              img {
                margin-right: 9px;
              }
            }
          }

        }
      }
}
</style>
