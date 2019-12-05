<template>
  <div class="HomeMainInformation">
  	<!-- 메인 인포 -->
  	<div class="home-main-visual-info">
  		<div class="home-information">
  			<div class="data-info">
  				<h2 class="title">
  					주가
	  			</h2>
	  			<h3 class="total-price">
	  				<img 
		  				width="15px" 
		  				src="../assets/img/ic_main_visual_icon_01.png"
	  				 />
	  				<span>130,750</span>
	  			</h3>
	  			<h5 class="stock-up">
	  				<img width="10px" src="../assets/img/ic_main_visual_icon_02.png" />
	  				100 (+0.7%)
	  			</h5>
	  			<h5>
	  				시가총액 1,800억원
	  			</h5>
  			</div>
  			<h4 class="company-info">
  				<img width="20px" src="../assets/img/ic_main_visual_icon_03.png" />
  				LG디스플레 보통주
  			</h4>
  		</div>
  	</div>
  </div>
</template>
<style lang="scss">
.HomeMainInformation {
	.home-main-visual-info {
		background: #DF1152;

		.company-info,
		.data-info {
			display: flex;
			justify-content: left;
			align-items: center;
		}
		.data-info {
			flex-basis: 65%;
			border-right: 1px solid #E6E6E6;
		}
		.company-info {
			padding-left: 65px;

			img {
				margin-right: 15px;
			}
		}
		.home-information {
			width: 1150px;
			margin: 0 auto;
			padding: 40px 0;
			display: flex;
			justify-content: left;
			align-items: center;
			color: #ffffff;

			& .title {
				font-size: 25px;
				margin-right: 55px;
			}
			.total-price {
				font-size: 25px;
				display: flex;
				align-items: center;
				margin-right: 10px;
				img {
					margin-right: 5px;
				}
			}
			.stock-up {
				display: flex;
				justify-content: left;
				align-items: center;
				padding-right: 20px;
				margin-right: 20px;
				border-right: 1px solid #E6E6E6;

				img {
					margin-right: 5px;
				}
			}
		}

		@media (min-width: 900px) and (max-width: 1149px) {
			  .home-information {
	  			width: 900px;
  			}
		}
		@media ( max-width: 899px ) {
			.company-info,
			.data-info {
				display: block;
			}
			.data-info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				flex-basis: 100%;
				border-right: 0;
				padding-bottom: 15px;
				border-bottom: 1px solid #E6E6E6;
			}
			.company-info {
				padding-left: 0;
				margin-top: 15px;
				display: flex;
				align-items: center;
				justify-content: left;
				font-size: 15px;

				img {
					margin-right: 15px;
				}
			}
		  .home-information {
		  	width: 100% !important;
		  	padding: 20px;
		  	display: block;

		  	& .title {
		  		font-size: 15px;
		  		margin-right: 10px;
		  	}
		  	.total-price {
		  		font-size: 15px;
		  	}
		  	.stock-up {
		  		padding-right: 10px;
		  		margin-right: 0;
		  		border-right: 0;
		  	}
		  }
		}
	}
}
</style>
