<template>
  <div class="HomeShareholderStatus contaner">
      <h2 class="section-title">주주현황</h2>
      <h3 class="section-sube">
        Shareholders Status
      </h3>
      <div class="shareholder-group">
          <h3 class="shareholder-group-title">
              주주구성
          </h3>
          <div class="shareholder-group-items">
              <div class="shareholder-group-chart">
                  <vc-donut
                      background="#ffffff" 
                      foreground="grey"
                      :size="70"
                      unit="%" 
                      :thickness="40"
                      legend-placement="bottom"
                      :sections="sections"
                      :total="100"
                      :start-angle="0"
                    />      
              </div>
              <div class="shareholder-group-table">
                  <table>
                    <colgroup>
                        <col width-="60%" />
                        <col width-="20%" />
                        <col width-="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <td>구분</td>
                            <td>주식수</td>
                            <td>비율</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in memberData">
                            <td>
                                <span 
                                    class="member-color"
                                    :style="`background: ${data.color}`"
                                ></span>
                                {{ data.title }}
                            </td>
                            <td>{{ data.value }}</td>
                            <td>{{ data.percent }}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>합계</td>
                            <td>43,211,110</td>
                            <td>100.0%</td>
                        </tr>
                    </tfoot>
                  </table>
              </div>
          </div>
          
        <div
            class="shareholder-group-caption"
             v-for="caption in memberCaption"
         >
            <h5 class="title">{{ caption.title }}</h5>
            <h5 class="description">{{ caption.dscription }}</h5>
        </div>
      </div>
      <div class="shareholder-data">
          <h3 class="shareholder-data-title">
              <span>배당내역</span>
                <div class="performance-select">
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
          </h3>
              <ul class="performance-group-tab">
                <li class="active">
                  <a>2018</a>
                </li>
                <li>
                  <a>2017</a>
                </li>
                <li>
                  <a>2016</a>
                </li>
                <li>
                  <a>2015</a>
                </li>
                <li>
                  <a>2014</a>
                </li>
              </ul>
              <div class="shareholder-data-table">
                  <table>
                    <colgroup>
                        <col width-="50%" />
                        <col width-="30%" />
                        <col width-="20%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <td>구분</td>
                            <td></td>
                            <td>주식종류</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in datas">
                            <td>
                                {{ data.title }}
                            </td>
                            <td>
                                <h5 v-for="kind in data.kinds">
                                    {{ kind }}
                                </h5>
                            </td>
                            <td>
                                <h5 v-for="value in data.value">
                                    {{ value }}
                                </h5>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>소계</td>
                            <td>100.0%</td>
                        </tr>
                    </tfoot>
                  </table>
              </div>
          </div>
        <div
            class="shareholder-group-caption"
             v-for="caption in memberCaption"
         >
            <h5 class="title">{{ caption.title }}</h5>
            <h5 class="description">{{ caption.dscription }}</h5>
        </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
Vue.use(Donut);

export default {
  name: 'HomeShareholderStatus',
  components: {
  },
  data() {
    return {
      sections: [
            { label: 'LG전자', value: 37.9, color: '#EA1E64' },
            { label: '외국인', value: 21.3, color: '#EE4B82' },
            { label: '국내개인', value: 20, color: '#F278A2' },
            { label: '국내기관', value: 8.6, color: '#424347' },
            { label: '국민연금', value: 8.7, color: '#8F8E95' },
            { label: 'ADE', value: 3.4, color: '#D2D1D8' },
        ],
        memberData: [
            {
                title: '최대주주 외 특수관계인',
                value: '11,111,111',
                percent: '25.7%',
                color: '#E91E63'
            },
            {
                title: '기관주주',
                value: '1,111,111',
                percent: '2.6%',
                color: '#E91E63'
            },
            {
                title: '외국인주주',
                value: '888,888',
                percent: '2.1%',
                color: '#E91E63'
            },
            {
                title: '자사주',
                value: '100,000',
                percent: '0.2%',
                color: '#313439'
            },
            {
                title: '개인주주 외',
                value: '30,000,000',
                percent: '69.4%',
                color: '#8E8E93'
            },
        ],
        datas: [
            {
                title: '당기순이익(백만원)',
                value: [
                    '224,157'
                ],
                kinds: [
                    ''
                ],
            },
            {
                title: '배당성향',
                value: [
                    '17.8%',
                ],
                kinds: '',
            },
            {
                title: '주당 현금배당(원)',
                value: [
                    '28,500',
                    '-'
                ],
                kinds: [
                    '보통주',
                    '우선주'
                ],
            },
            {
                title: '주당 주식배당(주)',
                value: [
                    '-',
                    '-'
                ],
                kinds: [
                    '보통주',
                    '우선주'
                ],
            },
            {
                title: '배당총액(백만원)',
                value: [
                    '34,981',
                    '4,937'
                ],
                kinds: [
                    '보통주',
                    '우선주'
                ],
            },
        ],
        memberCaption: [
            {
                title: '주1)',
                dscription: '2018년 12월 31일 보통주 기준'
            },
            {
                title: '주2)',
                dscription: '국민연금기금의 소유주식수 및 지분율은 국민연금공단이 공시한 "주식등의대량보유상황보고서" (2019년 1월 4일 공시)를 기준으로 작성하였으며 현재 시점의 주식소유현황과 차이가 발생할 수 있습니다.'
            },
        ],
    }
  },
  computed: {
    
  },
  created() {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeShareholderStatus {
  padding-top: 185px;

  .shareholder-data,
  .shareholder-group {
    margin-top: 106px;

    .shareholder-group-title {
        font-size: 32px;
        color: $font-color-base;
        border-bottom: 1px solid $border-color;
        padding-bottom: 42px;
    }
    .shareholder-data-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $border-color;
        padding-bottom: 42px;

        span {
            font-size: 32px;
            color: $font-color-base;
        }
    }
    .shareholder-group-items {
        padding-top: 80px;
        padding-bottom: 40px;
        display: flex;
        justify-content: space-between;

         .shareholder-group-chart {
            flex-basis: 50%;
            padding-left: 60px;
            padding-top: 60px;
         }

         .shareholder-group-table {
            flex-basis: 50%;
            padding-left: 60px;

            table {
                width: 100%;
                border-collapse: collapse;

                thead,
                tbody,
                tfoot{
                    border-bottom: 1px solid $border-color;
                }

                thead tr td {
                    padding: 10px 15px;
                    font-size: 19px;
                    text-align: right;
                    color: #8E8E93;

                    &:first-child {
                        text-align: left;
                    }
                }
                tbody tr td ,
                tfoot tr td {
                    font-size: 19px;
                    color: $font-color-base;
                    padding: 20px 15px;
                    text-align: right;

                    &:first-child {
                        text-align: left;
                    }
                }
                .member-color {
                    width: 14px;
                    height: 14px;
                    display: inline-block;
                    border-radius: 50%;
                }
            }
         }
    }
    .shareholder-data-table {
       table {
           width: 100%;
           border-collapse: collapse;
           padding-bottom: 40px;
           margin-top: 60px;

           thead,
           tfoot{
               border-bottom: 1px solid $border-color;
           }

           thead tr td {
               padding: 10px 15px;
               font-size: 19px;
               text-align: right;
               color: #8E8E93;

               &:first-child {
                 font-size: 14px;
                 text-align: left;
               }
               &:nth-child(3) {
                 font-size: 14px;
               }
           }
           tbody tr td {
            border-bottom: 1px solid $border-color;
           }
           tbody tr:last-child td {
            border-bottom: 0;
           }
           tbody tr td ,
           tfoot tr td {
               font-size: 19px;
               color: $font-color-base;
               padding: 10px 15px;
               text-align: right;
               vertical-align: baseline;

               &:first-child {
                   text-align: left;
                   font-size: 19px;
               }

               &:nth-child(2) {
                    color: #8E8E93;
               }

               & h5 {
                    padding: 10px 0;
                    font-size: 19px;
               }
           }
           tfoot tr td {
               font-size: 19px;
               color: $font-color-base;
               padding: 0 15px 20px 15px;
               text-align: right;

               &:first-child {
                   text-align: left;
                   font-size: 19px;
               }

               &:nth-child(2) {
                    color: #8E8E93;
               }

               & h5 {
                    padding: 10px 0;
                    font-size: 19px;
               }
           }
           .member-color {
               width: 14px;
               height: 14px;
               display: inline-block;
               border-radius: 50%;
           }
       }
    }
  }
  .shareholder-group-caption {
      display: flex;
      font-size: 14px;
      letter-spacing: -0.005em;
      color: #545454;
      margin-top: 20px;

      .title {
          margin-right: 20px;
          font-size: 12px;
      }
      .description {
          font-size: 12px;
      }
  }

  @media ( max-width: 899px ) {
        padding: 38px 0;
        border-top: 8px solid #EFEFF4;

        .performance-select {
            display: none;
        }

        .shareholder-data,
        .shareholder-group {
          margin-top: 50px;

          .shareholder-group-title {
              font-size: 22px;
              color: $font-color-base;
              border-bottom: 0;
              padding-bottom: 0;
              padding: 0 16px;
          }
          .shareholder-data-title {
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 0;
                padding: 0 16px;

              span {
                  font-size: 22px;
                  color: $font-color-base;
              }
          }
          .shareholder-group-items {
              padding-top: 20px;
              padding-bottom: 20px;
              display: block;
              justify-content: space-between;

               .shareholder-group-chart {
                  flex-basis: 50%;
                  padding-left: 0;
               }

               .shareholder-group-table {
                  flex-basis: 50%;
                  padding-left: 0;
                  padding: 0 16px;
                  margin-top: 30px;

                  table {
                      width: 100%;
                      border-collapse: collapse;

                      thead,
                      tbody,
                      tfoot{
                          border-bottom: 1px solid $border-color;
                      }

                      thead tr td {
                          padding: 16px 0;
                          font-size: 14px;
                          text-align: right;
                          color: #8E8E93;

                          &:first-child {
                              text-align: left;
                          }
                      }
                      tbody tr td ,
                      tfoot tr td {
                          font-size: 14px;
                          color: $font-color-base;
                          padding: 16px 0;
                          text-align: right;

                          &:first-child {
                              text-align: left;
                          }
                      }
                      .member-color {
                          width: 8px;
                          height: 8px;
                          display: inline-block;
                          border-radius: 50%;
                      }
                  }
               }
          }
          .shareholder-data-table {
            padding: 0 16px;
             table {
                 width: 100%;
                 border-collapse: collapse;
                 margin-bottom: 20px;
                 margin-top: 20px;

                 thead,
                 tfoot{
                     border-bottom: 1px solid $border-color;
                 }

                 thead tr td {
                     padding: 16px 0;
                     font-size: 19px;
                     text-align: right;
                     color: #8E8E93;

                     &:first-child {
                         text-align: left;
                     }
                 }
                 tbody tr td {
                  border-bottom: 1px solid $border-color;
                 }
                 tbody tr:last-child td {
                  border-bottom: 0;
                 }
                 tbody tr td {
                     font-size: 14px;
                     color: $font-color-base;
                     padding: 16px 0;
                     text-align: right;

                     &:first-child {
                         text-align: left;
                         font-size: 14px;
                     }

                     &:nth-child(2) {
                          color: #8E8E93;
                     }

                     & h5 {
                          padding: 10px 0;
                          font-size:14px;
                     }
                 }
                 tfoot tr td {
                     font-size: 14px;
                     color: $font-color-base;
                     padding: 0 0 16px 0;
                     text-align: right;

                     &:first-child {
                         text-align: left;
                         font-size: 14px;
                     }

                     &:nth-child(2) {
                          color: #8E8E93;
                     }

                     & h5 {
                          padding: 10px 0;
                          font-size:14px;
                     }
                 }
                 .member-color {
                     width: 14px;
                     height: 14px;
                     display: inline-block;
                     border-radius: 50%;
                 }
             }
          }
        }
        .shareholder-group-caption {
            display: flex;
            font-size: 12px;
            letter-spacing: -0.005em;
            color: #545454;
            margin-top: 0;
            margin-bottom: 30px;
            padding: 0 16px;

            &:first-child {
                margin-top: 0;
            }

            .title {
                margin-right: 10px;
                flex-basis: 26px;
                font-size: 12px;
            }
            .description {
                flex-basis: calc(100% - 26px);
                font-size: 12px;
            }
        }
  }
}
</style>
