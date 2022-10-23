<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import 'boxicons/css/boxicons.css';
</script>

<!--
    consider
    - seperate the item
    - abstract data layer and load items
    - use event handlers to do sorting and filtering

    links
    - https://svelte.dev/repl/a4684fe5be9a4c63963bb128c4adf056?version=3.23.2
-->

<section id="portfolio" class="portfolio section-bg">
	<div class="container">
		<div class="section-title">
			<h2>Portfolio</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
				consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
				iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row" data-aos="fade-up">
			<div class="col-lg-12 d-flex justify-content-center">
				<ul id="portfolio-flters">
					<li data-filter="*" class="filter-active">All</li>
					<li data-filter=".filter-app">App</li>
					<li data-filter=".filter-card">Card</li>
					<li data-filter=".filter-web">Web</li>
				</ul>
			</div>
		</div>

		<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
			<div class="col-lg-4 col-md-6 portfolio-item filter-app">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-1.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="App 1"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-web">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-2.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="Web 3"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-app">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-3.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="App 2"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-card">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-4.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="Card 2"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-web">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-5.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="Web 2"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-app">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-6.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="App 3"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-card">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-7.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="Card 1"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-card">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-8.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="Card 3"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>

			<div class="col-lg-4 col-md-6 portfolio-item filter-web">
				<div class="portfolio-wrap">
					<img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="" />
					<div class="portfolio-links">
						<a
							href="assets/img/portfolio/portfolio-9.jpg"
							data-gallery="portfolioGallery"
							class="portfolio-lightbox"
							title="Web 3"><i class="bx bx-plus"></i></a>
						<a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.portfolio {
		.portfolio-item {
			margin-bottom: 30px;
		}

		#portfolio-flters {
			padding: 0;
			margin: 0 auto 35px auto;
			list-style: none;
			text-align: center;
			background: #fff;
			border-radius: 50px;
			padding: 2px 15px;

			li {
				cursor: pointer;
				display: inline-block;
				padding: 10px 15px 8px 15px;
				font-size: 14px;
				font-weight: 600;
				line-height: 1;
				text-transform: uppercase;
				color: #272829;
				margin-bottom: 5px;
				transition: all 0.3s ease-in-out;

				&:hover,
				&.filter-active {
					color: #149ddd;
				}

				&:last-child {
					margin-right: 0;
				}
			}
		}

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
