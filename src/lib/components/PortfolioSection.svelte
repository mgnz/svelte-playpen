<script lang="ts">
	import { onMount } from 'svelte';

	import 'bootstrap/dist/css/bootstrap.css';
	import 'boxicons/css/boxicons.css';

	import AOS from 'aos';
	import 'aos/dist/aos.css'; // You can also use <link> for styles

	import PortfolioSectionItem from './PortfolioSectionItem.svelte';

	import portfolio1 from '../../assets/portfolio/portfolio-1.jpg';
	import portfolio2 from '../../assets/portfolio/portfolio-2.jpg';
	import portfolio3 from '../../assets/portfolio/portfolio-3.jpg';
	import portfolio4 from '../../assets/portfolio/portfolio-4.jpg';
	import portfolio5 from '../../assets/portfolio/portfolio-5.jpg';
	import portfolio6 from '../../assets/portfolio/portfolio-6.jpg';
	import portfolio7 from '../../assets/portfolio/portfolio-7.jpg';
	import portfolio8 from '../../assets/portfolio/portfolio-8.jpg';
	import portfolio9 from '../../assets/portfolio/portfolio-9.jpg';

	let data = [
		{ filterType: 'filter-app', imagePath: `${portfolio1}`, portfolioSlug: 1 },
		{ filterType: 'filter-web', imagePath: `${portfolio2}`, portfolioSlug: 2 },
		{ filterType: 'filter-app', imagePath: `${portfolio3}`, portfolioSlug: 3 },
		{ filterType: 'filter-card', imagePath: `${portfolio4}`, portfolioSlug: 4 },
		{ filterType: 'filter-web', imagePath: `${portfolio5}`, portfolioSlug: 5 },
		{ filterType: 'filter-app', imagePath: `${portfolio6}`, portfolioSlug: 6 },
		{ filterType: 'filter-card', imagePath: `${portfolio7}`, portfolioSlug: 7 },
		{ filterType: 'filter-card', imagePath: `${portfolio8}`, portfolioSlug: 8 },
		{ filterType: 'filter-web', imagePath: `${portfolio9}`, portfolioSlug: 9 },
	];

	let selectedFilter: string;
	let filterSelectionClick = (activeFilter: string, event: MouseEvent): any | null => {
		selectedFilter = activeFilter;
		console.log(activeFilter);
	};
	let filterSelectionKeyPress = (activeFilter: string, event: KeyboardEvent): any | null => {
		selectedFilter = activeFilter;
	};

	onMount(async () => {});
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
					<li
						data-filter="*"
						class:filter-active="{selectedFilter === '*'}"
						on:keypress="{(event) => filterSelectionKeyPress('*', event)}"
						on:click="{(event) => filterSelectionClick('*', event)}">
						All
					</li>
					<li
						data-filter=".filter-app"
						class:filter-active="{selectedFilter === 'filter-app'}"
						on:keypress="{(event) => filterSelectionKeyPress('filter-app', event)}"
						on:click="{(event) => filterSelectionClick('filter-app', event)}">
						App
					</li>
					<li
						data-filter=".filter-card"
						class:filter-active="{selectedFilter === 'filter-card'}"
						on:keypress="{(event) => filterSelectionKeyPress('filter-card', event)}"
						on:click="{(event) => filterSelectionClick('filter-card', event)}">
						Card
					</li>
					<li
						data-filter=".filter-web"
						class:filter-active="{selectedFilter === 'filter-web'}"
						on:keypress="{(event) => filterSelectionKeyPress('filter-web', event)}"
						on:click="{(event) => filterSelectionClick('filter-web', event)}">
						Web
					</li>
				</ul>
			</div>
		</div>

		<PortfolioSectionItem filterType="filter-app" imagePath="{portfolio1}" portfolioSlug="1" />
		<PortfolioSectionItem filterType="filter-web" imagePath="{portfolio2}" portfolioSlug="2" />
		<PortfolioSectionItem filterType="filter-app" imagePath="{portfolio3}" portfolioSlug="3" />
		<PortfolioSectionItem filterType="filter-card" imagePath="{portfolio4}" portfolioSlug="4" />
		<PortfolioSectionItem filterType="filter-web" imagePath="{portfolio5}" portfolioSlug="5" />
		<PortfolioSectionItem filterType="filter-app" imagePath="{portfolio6}" portfolioSlug="6" />
		<PortfolioSectionItem filterType="filter-card" imagePath="{portfolio7}" portfolioSlug="7" />
		<PortfolioSectionItem filterType="filter-card" imagePath="{portfolio8}" portfolioSlug="8" />
		<PortfolioSectionItem filterType="filter-web" imagePath="{portfolio9}" portfolioSlug="9" />
	</div>
</section>

<style lang="scss">
	#portfolio {
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
