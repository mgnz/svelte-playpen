<script lang="ts">
	import 'boxicons/css/boxicons.css';
	import 'bootstrap/dist/css/bootstrap.css';

	import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/scss';
	import 'swiper/scss/navigation';
	import 'swiper/scss/pagination';
	import 'swiper/scss/scrollbar';

	// for now : later we will store a path to the asset, and its loaded
	// from the statically generated site artifact folder
	import testimonial1 from '../../assets/testimonial/testimonial-1.jpg';
	import testimonial2 from '../../assets/testimonial/testimonial-2.jpg';
	import testimonial3 from '../../assets/testimonial/testimonial-3.jpg';
	import testimonial4 from '../../assets/testimonial/testimonial-4.jpg';
	import testimonial5 from '../../assets/testimonial/testimonial-5.jpg';

	let testimonialItems = [
		{
			quoteText:
				'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
			name: 'Saul Goodman',
			role: 'Ceo &amp; Founder',
			imagePath: `${testimonial1}`,
		},
		{
			quoteText:
				'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
			name: 'Sara Wilsson',
			role: 'Designer',
			imagePath: `${testimonial2}`,
		},
		{
			quoteText:
				'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.',
			name: 'Jena Karlis',
			role: 'Store Owner',
			imagePath: `${testimonial3}`,
		},
		{
			quoteText:
				'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.',
			name: 'Matt Brandon',
			role: 'Freelancer',
			imagePath: `${testimonial4}`,
		},
		{
			quoteText:
				'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.',
			name: 'John Larson',
			role: 'Entrepreneur',
			imagePath: `${testimonial5}`,
		},
	];
</script>

<section id="testimonials" class="testimonials section-bg">
	<div class="container">
		<div class="section-title">
			<h2>Testimonials</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
				consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
				iste officiis commodi quidem hic quas.
			</p>
		</div>

		<!--
            swiper bug - autoplay https://github.com/nolimits4web/swiper/issues/5571
            - autoplay is defined incorrectly in v-latest so doing this
            autoplay="{{
                delay: 5000,
                disableOnInteraction: false,
                stopOnLastSlide: false,
            }}" 
            results in a type error being generated
        -->

		<div class="testimonials-slider">
			<!--  data-aos="fade-up" data-aos-delay="100" -->
			<Swiper
				speed="{600}"
				loop="{true}"
				slidesPerView="{'auto'}"
				pagination="{{
					type: 'bullets',
					clickable: true,
				}}"
				breakpoints="{{
					'320': {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					'1200': {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}"
				modules="{[Pagination, Autoplay]}">
				{#each testimonialItems as item, i (item.name)}
					<SwiperSlide>
						<div class="testimonial-item" data-aos="fade-up">
							<!--  data-aos-delay="{i * 100}" -->
							<p>
								<i class="bx bxs-quote-alt-left quote-icon-left"></i>
								{item.quoteText}
								<i class="bx bxs-quote-alt-right quote-icon-right"></i>
							</p>
							<img src="{item.imagePath}" class="testimonial-img" alt="" />
							<h3>{item.name}</h3>
							<h4>{item.role}</h4>
						</div>
					</SwiperSlide>
				{/each}
			</Swiper>
		</div>

		<!-- <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
			<div class="swiper-wrapper">
				{#each testimonialItems as item, i (item.name)}
					<div class="swiper-slide">
						<div class="testimonial-item" data-aos="fade-up" data-aos-delay="{i * 100}">
							<p>
								<i class="bx bxs-quote-alt-left quote-icon-left"></i>
								{item.quoteText}
								<i class="bx bxs-quote-alt-right quote-icon-right"></i>
							</p>
							<img src="{item.imagePath}" class="testimonial-img" alt="" />
							<h3>{item.name}</h3>
							<h4>{item.role}</h4>
						</div>
					</div>
				{/each}
			</div>
			<div class="swiper-pagination"></div>
		</div> -->
	</div>
</section>

<style lang="scss">
	.testimonials {
		.testimonials-carousel,
		.testimonials-slider {
			overflow: hidden;
		}

		.testimonial-item {
			box-sizing: content-box;
			text-align: center;
			min-height: 320px;

			.testimonial-img {
				width: 90px;
				border-radius: 50%;
				margin: 0 auto;
			}

			h3 {
				font-size: 18px;
				font-weight: bold;
				margin: 10px 0 5px 0;
				color: #111;
			}

			h4 {
				font-size: 14px;
				color: #999;
				margin: 0;
			}

			.quote-icon-left,
			.quote-icon-right {
				color: #c3e8fa;
				font-size: 26px;
			}

			.quote-icon-left {
				display: inline-block;
				left: -5px;
				position: relative;
			}

			.quote-icon-right {
				display: inline-block;
				right: -5px;
				position: relative;
				top: 10px;
			}

			p {
				font-style: italic;
				margin: 0 15px 15px 15px;
				padding: 20px;
				background: #fff;
				position: relative;
				margin-bottom: 35px;
				border-radius: 6px;
				box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);

				&::after {
					content: '';
					width: 0;
					height: 0;
					border-top: 20px solid #fff;
					border-right: 20px solid transparent;
					border-left: 20px solid transparent;
					position: absolute;
					bottom: -20px;
					left: calc(50% - 20px);
				}
			}
		}

		.swiper-pagination {
			margin-top: 20px;
			position: relative;

			.swiper-pagination-bullet {
				width: 12px;
				height: 12px;
				background-color: #fff;
				opacity: 1;
				border: 1px solid #149ddd;
			}

			.swiper-pagination-bullet-active {
				background-color: #149ddd;
			}
		}
	}
</style>
