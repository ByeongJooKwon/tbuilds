<template>
  <div class="HomeFinanceInfo contaner">
    <h2 class="section-title">재무정보</h2>
    <h3 class="section-sube">
      Financial Statements
    </h3>
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
      <div class="finance-select">
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
    <ul class="finance-info">
        <li>
            <h5>재무상태표</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>손익계산서</h5>
            <h6>
                <img
                    width="30px"
                    src="../assets/img/ic_file_download.png"
                />
                <span class="data-type">PDF</span>
            </h6>
        </li>
        <li>
            <h5>현금흐름표</h5>
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
  name: 'HomeFinanceInfo',
  components: {
  }
}
</script>
<style lang="scss">
@import "@/style/_variables.scss";
.HomeFinanceInfo {
    padding-top: 200px;

    .finance-select {
        display: flex;
        justify-content: flex-end;
        margin-top: 40px;
    }

    .finance-info {
        margin-top: 53px;
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

        .finance-select {
            display: flex;
            justify-content: flex-end;
            margin-top: 13px;
            display: none;
        }

      .finance-info {
          margin-top: 0;
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
                  border-top: 0;
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
