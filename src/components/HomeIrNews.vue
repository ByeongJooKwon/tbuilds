<template>
  <div class="HomeIrNews contaner">
    <h2 class="section-title">IR News</h2>
    <h3 class="section-sube">
      Briefing & Press Release
    </h3>
    <ul class="ir-news-content">
        <li
            @click="clickModal(true)"
        >
            <div class="information">
                <h5 class="PC">IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6><span class="mobile">IR브리핑</span>2019년 10월 10일</h6>
            </div>
        </li>
        <li
            @click="clickModal(true)"
        >
            <img
                class="image"
                src="../assets/img/ir_image_01.png"
            />
            <div class="information">
                <h5 class="PC">IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6><span class="mobile">IR브리핑</span>2019년 10월 10일</h6>
            </div>
        </li>
        <li
            @click="clickModal(true)"
        >
            <img
                class="image"
                src="../assets/img/ir_image_01.png"
            />
            <div class="information">
                <h5 class="PC">IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6><span class="mobile">IR브리핑</span>2019년 10월 10일</h6>
            </div>
        </li>
        <li
            @click="clickModal(true)"
        >
            <div class="information">
                <h5 class="PC">IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6><span class="mobile">IR브리핑</span>2019년 10월 10일</h6>
            </div>
        </li>
        <li
            @click="clickModal(true)"
        >
            <img
                class="image"
                src="../assets/img/ir_image_01.png"
            />
            <div class="information">
                <h5 class="PC">IR브리핑</h5>
                <h4>[주담톡톡 Q] LG디스플레이의 사업계획에 대한 주주님들의 질문에 답변해드립니다</h4>
                <h6><span class="mobile">IR브리핑</span>2019년 10월 10일</h6>
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
                <span>IR News</span>
            </div>
            <h5 class="modal-map">Investor Relations > IR News</h5>
            <h5 class="IR-modal-category">보도자료</h5>
            <h5 class="IR-modal-title">
                '중국 광저우 OLED 패널 공장 준공, LG디스플레이, OLED TV 1,000만대 시대 가속화
            </h5>
            <div class="social-info">
                <h5 class="date">
                    2019년 10월 10일
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
            <div class="IR-modal-main">
                <img
                    width="100%"
                    src="../assets/img/ir_modal_main.png"
                />
                <h6 class="main-caption">LG디스플레이 한상범 부회장</h6>
            </div>
            <h4
                class="IR-main-description"
                v-html="modalDescription"
            >
            </h4>
            <div
             class="IR-modal-video"
            >
                <video 
                    width="100%"
                    poster="../assets/img/ir_modal_video.png" 
                    controls
                >
                </video>
            </div>
            <h4
                class="IR-main-description"
                v-html="modalDescriptionSub"
            >
            </h4>
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
  name: 'HomeIrNews',
  components: {
  },
  data() {
      return {
        isIRModal: false,
        modalDescription: `LG디스플레이가 중국에 대형 OLED(유기발광다이오드) 패널 공장을 완공하고, 본격적인 현지 생산에 돌입했다.<br /><br />LG디스플레이(대표이사 한상범 부회장)는 29일, 중국 광둥성 광저우시 첨단기술산업 개발구에 위치한 LG디스플레이 하이테크 차이나(LG Display High-Tech China Co., Ltd, LGDCO)의 8.5세대(2,200mm x 2,500mm) OLED 패널 공장 준공식을 가졌다고 밝혔다.<br /><br /> 이 날 준공식에는 장하성 주중대사 등 한국 정부 인사와 광둥성 및 광저우시 등 중국 정부 관계자를 비롯해 LG디스플레이 한상범 부회장, LG CNS 김영섭 사장, S&I 이동열 사장, LG화학 유지영 부사장 등 LG계열사 주요 경영진과 고객 및 협력사 대표 등 약 400여 명이 참석했다.<br /><br /> LG디스플레이 하이테크 차이나는 LG디스플레이와 광저우개발구가 70:30의 비율로 투자한 합작사로 자본금은 2조 6,000억원이다. <br /><br />이번에 준공된 8.5세대 OLED 패널 공장은 축구장 10개 크기인 7만 4천 평방미터(약 2만 2천평) 대지 위에 지상 9층, 연면적 42만 7천 평방미터(약 12만 9천평) 규모로 조성되었으며, 지난 2017년 7월 첫 삽을 뜬 이후 2년여의 공사기간을 거쳐 8월 본격 양산에 돌입했다.<br /><br /> 기존 LCD 패널공장과 모듈공장, 협력사 단지 및 부대시설 등을 합하면 LG디스플레이 광저우 클러스터는 총 132만 평방미터(약 40만평)에 이른다. <br /><br />앞으로 광저우 8.5세대 OLED 패널 공장에서는 고해상도의 55, 65, 77인치 등 대형 OLED를 주력으로 생산한다. LG디스플레이는 월 6만장(유리원판 투입 기준) 생산을 시작으로, 2021년에는 최대 생산량인 월 9만장으로 끌어올릴 계획이다. 현재 파주 OLED 공장에서 월 7만장 규모로 생산중인 물량과, 최근 3조 추가 투자를 발표한 월 4만5천장 규모의 파주 10.5세대 OLED 공장이 2022년 가동하면 연간 1,000만대 이상 제품을 생산이 가능할 것으로 보인다. <br /><br />현재 파주 OLED 공장에서 월 7만장 규모로 생산중인 물량과, 최근 3조 추가 투자를 발표한 월 4만5천장 규모의 파주 10.5세대 OLED 공장이 2022년 가동하면 연간 1,000만대 이상 제품을 생산이 가능할 것으로 보인다. LG디스플레이 한상범 부회장은 환영사를 통해 “광저우 OLED 공장이 가동함에따라 급성장하고 있는 OLED TV 수요에 보다 적극적인 대응이 가능해졌다"며, “이를 바탕으로 고객에게 적기에 더 큰 가치를 제공해 프리미엄 TV 시장에서 OLED 대세화를 앞당기겠다.”라고 밝혔다.<br /><br /> <h3 class="inner-title">■ OLED 대세화 전략, 광저우 OLED 공장 양산으로 탄력 받아</h3><br /><br /> LG디스플레이는 프리미엄 TV 시장에서 급성장하고 있는 OLED 시장 수요에 적극 대응하기 위해, 기존 파주에서만 생산하던 대형 OLED를 중국에서도 생산하는 투트랙(Two-Track) 생산체제를 구축했다.<br /><br /> OLED의 기술 진입장벽이 높아 한국을 제외한 다른 업체들이 양산단계에 진입하지 못하고 있는 만큼, 광저우 OLED 공장 가동을 계기로 OLED로 경쟁사들과 격차를 확실히 벌릴 계획이다.<br /><br /> 광저우는 이미 LG디스플레이의 8.5세대 LCD 패널공장이 가동중인 곳으로, 8.5세대 디스플레이 생산에 최적화된 인프라를 갖추고 있으며 관세 및 인건비뿐만 아니라 물류비 절감 측면에서도 최적의 입지여건을 갖추고 있다. 그 동안 LG디스플레이는 OLED 개발부터 생산, 판매까지 완결형 체제를 구축, 이를 바탕으로 LCD에서 10년 걸리던 골든 수율을 불과 3년 만에 달성한 바 있다. LG디스플레이는 이러한 성공 노하우를 광저우 OLED 공장에도 접목시켜 생산효율성을 극대화 할 계획이다. <br /><br />파주 10.5세대 OLED 공장인 P10 공장까지 가동하면, LG디스플레이의 대형 OLED 생산량은 더욱 늘어난다. 이를 바탕으로, LG디스플레이는 규모의 경제를 달성해 생산성과 수익성을 확보하는 한편, 프리미엄 TV 시장에서 OLED 대세화를 확고히 한다는 방침이다.`,
        modalDescriptionSub: `LG디스플레이의 중국 진출은 우리나라 장비/소재 업체에게 신규 시장창출의 기회가 되고 있다.<br /><br /> 실제로 광저우 OLED 공장 장비 중 70% 이상이 국산장비로 이루어져 있으며, 소재도 60% 가량을 국내 생산업체로부터 공급받을 예정이다. <br /><br />기술 유출 방지를 위해 제품 설계, 공정기술의 개발은 한국에서 수행하고, 주재원 파견을 통해 현지 셋업(Set–up) 및 직접관리 하는 방식으로 기술 유출을 방지할 계획이다. <br /><br />LG디스플레이 경영지원그룹장 양재훈 부사장은 “LG디스플레이는 지난 2014년 진출한 8.5세대 LCD 패널 공장 운영을 통해 기술적 보안 노하우를 쌓았으며, 실제 양산 이후 단 한차례의 기술유출 사례도 발생하지 않았다.”며, “OLED 기술은 LCD 대비 노하우(Know-how)성 기술이 많아 단순 카피가 어려운 만큼 기술유출이 절대 발생하지 않도록 하겠다.”라고 보안에 대한 자신감을 내비쳤다.`
      }
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
.HomeIrNews {
    padding-top: 200px;

    .ir-news-content {
        margin-top: 106px;
        list-style: none;

        li {
            padding-top: 40px;
            display: flex;
            justify-content: space-between;
            cursor: pointer;

            &:first-child {
                border-top: 1px solid $border-color;
            }

            & .image {
                flex-basis: 274px;
                margin-right: 20px;
                flex-shrink: 0;
                border-bottom: 1px solid transparent;
            }
            & .information {
                padding-bottom: 34px;
                border-bottom: 1px solid $border-color;
                flex: 1;
                padding-left: 20px;

                & h5.PC {
                    color: $brand-color;
                    font-weight: bold;
                    font-size: 16px;
                }
                & h4 {
                    font-size: 21px;
                    letter-spacing: -0.5px;
                    color: $font-color-base;
                    margin-top: 14px;
                    height: 64px;
                    overflow: hidden;
                }
                & h6 {
                    font-size: 12px;
                    letter-spacing: -0.5px;
                    color: #8E8E93;
                    margin-top: 22px;

                    & span {
                        display: none;
                    }
                }
            }
        }
    }

    .IR-modal-category {
        font-weight: bold;
        font-size: 16px;
        color: #E91E63;
        margin-top: 60px;
    }
    .IR-modal-title {
        font-weight: bold;
        font-size: 34px;
        letter-spacing: -0.5px;
        color: $font-color-base;
        padding-top: 23px;
    }
    
    .IR-modal-main {
        margin-top: 33px;

        .main-caption {
            text-align: center;
            font-size: 14px;
            color: #8E8E93;
            margin-top: 18px;
        }
    }
    .inner-title {
        font-size: 24px;
        font-weight: bold;
    }
    .IR-main-description {
        margin-top: 57px;
        line-height: 2em;
        text-align: justify;
    }
    .IR-modal-video {
        margin-top: 40px;
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
    @media ( max-width: 899px ) {
        .IR-modal-category {
            font-weight: bold;
            font-size: 12px;
            color: #E91E63;
            margin-top: 24px;
        }
        .IR-modal-title {
            font-weight: bold;
            font-size: 22px;
            letter-spacing: -0.5px;
            color: $font-color-base;
            margin-top: 8px;
        }
        
        .IR-modal-main {
            margin-top: 30px;

            .main-caption {
                text-align: center;
                font-size: 12px;
                color: #8E8E93;
                margin-top: 18px;
            }
        }
        .inner-title {
            font-size: 20px;
            font-weight: bold;
        }
        .IR-main-description {
            margin-top: 30px;
            line-height: 2em;
            text-align: justify;
            font-size: 15px;
        }
        .IR-modal-video {
            margin-top: 40px;
        }
        
        .IR-modal-list {
            list-style: none;
            margin-top: 30px;

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
    }


    @media ( max-width: 899px ) {
        padding: 38px 0;
        border-top: 8px solid #EFEFF4;

        .ir-news-content {
            margin-top: 50px;
            list-style: none;
            padding: 0 16px;

            li {
                padding: 16px 0;
                border-bottom: 1px solid $border-color;
                display: flex;
                justify-content: space-between;

                &:first-child {
                    border-top: 1px solid $border-color;
                }

                & .image {
                    overflow: hidden;
                    flex-basis: 30%;
                    width: 30%;
                    flex-shrink: 0;
                    margin-bottom: 0;
                    margin-right: 20px;
                    height:100%;
                }
                & .information {
                    flex-basis: calc(100% - 274px);
                    padding: 0;
                    border-bottom: 0;

                    & h5.PC {
                        display: none;
                        color: $brand-color;
                        font-weight: bold;
                        font-size: 10px;
                    }
                    & h4 {
                        font-size: 16px;
                        letter-spacing: -0.5px;
                        color: $font-color-base;
                        margin-top: 0;
                        height: 50px;
                    }
                    & h6 {
                        font-size: 10px;
                        letter-spacing: -0.5px;
                        color: #8E8E93;
                        margin-top: 15px;

                        & span {
                            display: inline;
                            color: $brand-color;
                            font-weight: bold;
                            font-size: 10px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}
</style>
