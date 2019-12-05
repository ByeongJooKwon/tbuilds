<template>
  <div class="HomePerformance contaner">
    <h2 class="section-title">실적발표</h2>
    <h3 class="section-sube">
      Quarter Earnings Results
    </h3>
    <!-- 실적발표 -->
    <PerformanceContents
      :datas="type_A"
    />
    <div style="margin-top: 40px">
      <PerformanceContents
        :datas="type_B"
      />
    </div>
  <!-- FAQ -->
    <PerformanceFAQ />

    <div style="margin-top: 40px">
      <PerformanceFAQTypeB />
    </div>

  </div>
</template>

<script>
import PerformanceContents from '@/components/PerformanceContents.vue'
import PerformanceFAQ from '@/components/PerformanceFAQ.vue'
import PerformanceFAQTypeB from '@/components/PerformanceFAQTypeB.vue'

export default {
  name: 'HomePerformance',
  data() {
    return {
      type_A: [
        {
         title: '보도자료(Press Release)',
          url: '../assets/img/ic_file_download.png',
          type: 'PDF'
        },
        {
         title: '웹캐스팅',
          url: '../assets/img/ic_arrow_forward.png',
          type: 'URL'
        },
        {
         title: '컨퍼런스콜',
          url: '../assets/img/ic_arrow_forward.png',
          type: 'URL'
        },
        {
         title: '스크립트',
          url: '../assets/img/ic_file_download.png',
          type: 'PDF'
        },
        {
         title: 'Factsheet',
          url: '../assets/img/ic_file_download.png',
          type: 'XLS'
        },
      ],
      type_B: [
        {
         title: '컨퍼런스콜',
          url: '../assets/img/ic_arrow_forward.png',
          type: 'URL'
        },
        {
         title: '스크립트',
          url: '../assets/img/ic_file_download.png',
          type: 'PDF'
        },
        {
         title: 'Factsheet',
          url: '../assets/img/ic_file_download.png',
          type: 'XLS'
        },
      ]
    }
  },
  components: {
    PerformanceContents,
    PerformanceFAQ,
    PerformanceFAQTypeB
  }
}
</script>
<style lang="scss">
.HomePerformance {
  padding-top: 200px;
  .performance-group-tab {
    display: none;
    }

  .performance-select {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 40px;
  }

  @media ( max-width: 899px ) {
    padding: 38px 0;

    .performance-select {
      display: none;
      align-items: center;
      justify-content: flex-end;
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

            &.active {
                color: #313439;
                border-bottom: 2px solid #313439;
            }
        }
    }
  }
}
</style>
