<template>
  <div class="HomeManagementReport contaner">
    <h2 class="section-title">경영보고서</h2>
    <h3 class="section-sube">
      Documents & Report
    </h3>
    <ul class="management-report">
        <li>
            <h5>정관</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>공시정보관리규정</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>기업지배구조보고서</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>주주총회결과 (2019년)</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>사업보고서 (2019년)</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>지속가능경영보고서 (2018년)</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>연차보고서 (2018년)</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'HomeManagementReport',
  components: {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeManagementReport {
    padding-top: 185px;

    .management-report {
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
                font-size: 18px;
                display: flex;
                align-items: center;
                text-align: right;
                color: $brand-color;
            }
        }
    }

    @media ( max-width: 899px ) {
    padding: 38px 0;
    border-top: 8px solid #EFEFF4;
      .management-report {
          margin-top: 50px;
          list-style: none;
          padding: 0 16px;

          li {
              display: flex;
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
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  text-align: right;
                  color: $brand-color;

                  span {
                    display: none;
                  }
              }
          }
      }
    }

}
</style>
