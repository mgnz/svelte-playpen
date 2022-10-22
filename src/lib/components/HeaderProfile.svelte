<script lang="ts">
	import 'boxicons';
	import profileImage from '../../assets/profile-img.jpg';
</script>

<div class="profile">
	<img src="{profileImage}" alt="" class="img-fluid rounded-circle" />
	<h1 class="text-light"><a href="index.html">Alex Smith</a></h1>
	<div class="social-links mt-3 text-center">
		<a href="#"><box-icon type="logo" name="twitter" color="white"></box-icon></a>
		<a href="#"><box-icon type="logo" name="facebook" color="white"></box-icon></a>
		<a href="#"><box-icon type="logo" name="instagram" color="white"></box-icon></a>
		<a href="#"><box-icon type="logo" name="google-plus" color="white"></box-icon></a>
		<a href="#"><box-icon type="logo" name="linkedin" color="white"></box-icon></a>
	</div>
</div>

<style lang="scss">
	.profile {
		img {
			margin: 15px auto;
			display: block;
			width: 120px;
			border: 8px solid #2c2f3f;
		}

		h1 {
			font-size: 24px;
			margin: 0;
			padding: 0;
			font-weight: 600;
			-moz-text-align-last: center;
			text-align-last: center;
			font-family: 'Poppins', sans-serif;

			a {
				color: #fff;
				text-decoration: none;

				&:hover {
					color: #fff;
					text-decoration: none;
				}
			}
		}

		.social-links a {
			font-size: 18px;
			display: inline-block;
			background: #212431;
			color: #fff;
			line-height: 1;
			padding: 8px 0;
			margin-right: 4px;
			border-radius: 50%;
			text-align: center;
			width: 36px;
			height: 36px;
			transition: 0.3s;

			&:hover {
				background: #149ddd;
				color: #fff;
				text-decoration: none;
			}
		}
	}
</style>
