<script lang="ts">
	export let filterType: string; //filter-web, filter-app, filter-car
	export let imagePath: string;
	export let portfolioSlug: string;
</script>

<div class="col-lg-4 col-md-6 portfolio-item {filterType}">
	<div class="portfolio-wrap">
		<img src="{imagePath}" class="img-fluid" alt="" />
		<div class="portfolio-links">
			<a href="{imagePath}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"
				><i class="bx bx-plus"></i></a>
			<a href="portfolio-details?{portfolioSlug}" title="More Details"><i class="bx bx-link"></i></a>
		</div>
	</div>
</div>

<style lang="scss">
	:global(#portfolio) {
		.portfolio-wrap {
			transition: 0.3s;
			position: relative;
			overflow: hidden;
			z-index: 1;

			&::before {
				content: '';
				background: rgba(255, 255, 255, 0.5);
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				transition: all ease-in-out 0.3s;
				z-index: 2;
				opacity: 0;
			}

			.portfolio-links {
				opacity: 1;
				left: 0;
				right: 0;
				bottom: -60px;
				z-index: 3;
				position: absolute;
				transition: all ease-in-out 0.3s;
				display: flex;
				justify-content: center;

				a {
					color: #fff;
					font-size: 28px;
					text-align: center;
					background: rgba(20, 157, 221, 0.75);
					transition: 0.3s;
					width: 50%;

					&:hover {
						background: rgba(20, 157, 221, 0.95);
					}

					+ a {
						border-left: 1px solid #37b3ed;
					}
				}
			}

			&:hover {
				&::before {
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					opacity: 1;
				}

				.portfolio-links {
					opacity: 1;
					bottom: 0;
				}
			}
		}
	}
</style>
