<script lang="ts">
	import { onMount } from 'svelte';

	import 'bootstrap/dist/css/bootstrap.css';

	import PortfolioSectionItem from './PortfolioSectionItem.svelte';

	// for now : later we will store a path to the asset, and its loaded
	// from the statically generated site artifact folder
	import portfolio1 from '../../assets/portfolio/portfolio-1.jpg';
	import portfolio2 from '../../assets/portfolio/portfolio-2.jpg';
	import portfolio3 from '../../assets/portfolio/portfolio-3.jpg';
	import portfolio4 from '../../assets/portfolio/portfolio-4.jpg';
	import portfolio5 from '../../assets/portfolio/portfolio-5.jpg';
	import portfolio6 from '../../assets/portfolio/portfolio-6.jpg';
	import portfolio7 from '../../assets/portfolio/portfolio-7.jpg';
	import portfolio8 from '../../assets/portfolio/portfolio-8.jpg';
	import portfolio9 from '../../assets/portfolio/portfolio-9.jpg';

	let portfolioItems = [
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

	let portfolioFilters = [
		{ dataFilter: '*', label: 'All' },
		{ dataFilter: 'filter-web', label: 'Web' },
		{ dataFilter: 'filter-card', label: 'Card' },
		{ dataFilter: 'filter-app', label: 'App' },
	];

	// when we load we want a default element highlighted
	// could also just init this on-mount
	const defaultSelectedPortfolioFilter = '*';
	let selectedPortfolioFilter: string | null;
	$: if (selectedPortfolioFilter == null) {
		console.log('getSelectedPortfolioFilter: default');
		selectedPortfolioFilter = defaultSelectedPortfolioFilter;
	}

	// bound to FE; ideally need a 'filterTypes' so we can allow for
	// multi metadata filters and get away from this ugly hack to
	// search all
	$: filteredPortfolioItems = portfolioItems.filter((item) => {
		if (selectedPortfolioFilter === '*') return true;
		else return item.filterType === selectedPortfolioFilter;
	});

	// click/keypress handlers
	let filterSelectionClick = (activeFilter: string, event: MouseEvent): void => {
		selectedPortfolioFilter = activeFilter;
		console.log('filterSelectionClick ' + activeFilter);
	};
	let filterSelectionKeyPress = (activeFilter: string, event: KeyboardEvent): void => {
		selectedPortfolioFilter = activeFilter;
		console.log('filterSelectionKeyPress ' + activeFilter);
	};

	onMount(async () => {});
</script>

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
					{#each portfolioFilters as item, i (item.dataFilter)}
						<li
							data-filter=".{item.dataFilter}"
							class:filter-active="{selectedPortfolioFilter === item.dataFilter}"
							on:keypress="{(event) => filterSelectionKeyPress(item.dataFilter, event)}"
							on:click="{(event) => filterSelectionClick(item.dataFilter, event)}">
							{item.label}
						</li>
					{/each}
				</ul>
			</div>
		</div>

		{#each filteredPortfolioItems as item, i (item.portfolioSlug)}
			<PortfolioSectionItem
				filterType="{item.filterType}"
				imagePath="{item.imagePath}"
				portfolioSlug="{item.portfolioSlug}" />
		{/each}
	</div>
</section>

<style lang="scss">
	#portfolio {
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
	}
</style>
