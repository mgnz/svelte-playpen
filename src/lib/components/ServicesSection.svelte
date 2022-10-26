<script lang="ts">
	import 'boxicons/css/boxicons.css';
	import 'bootstrap/dist/css/bootstrap.css';

	let serviceItems = [
		{ iconStyle: 'bi bi-briefcase', title: 'Lorem Ipsum', titleHref: '#', description: 'Quick brown fox jumps' },
		{ iconStyle: 'bi bi-card-checklist', title: 'Dolor Sitema', titleHref: '#', description: 'Quick brown fox jumps' },
		{
			iconStyle: 'bi bi-bar-chart',
			title: 'Sed ut perspiciatis',
			titleHref: '#',
			description: 'Quick brown fox jumps',
		},
		{ iconStyle: 'bi bi-binoculars', title: 'Magni Dolores', titleHref: '#', description: 'Quick brown fox jumps' },
		{ iconStyle: 'bi bi-brightness-high', title: 'Nemo Enim', titleHref: '#', description: 'Quick brown fox jumps' },
		{
			iconStyle: 'bi bi-calendar4-week',
			title: 'Eiusmod Tempor',
			titleHref: '#',
			description: 'Quick brown fox jumps',
		},
	];
</script>

<section id="services" class="services">
	<div class="container">
		<div class="section-title">
			<h2>Services</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
				consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
				iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row">
			{#each serviceItems as item, i (item.iconStyle)}
				<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="{i * 100}">
					<div class="icon"><i class="{item.iconStyle}"></i></div>
					<h4 class="title"><a href="{item.titleHref}">{item.title}</a></h4>
					<p class="description">{item.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.services {
		.icon-box {
			margin-bottom: 20px;
		}

		.icon {
			float: left;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 54px;
			height: 54px;
			background: #149ddd;
			border-radius: 50%;
			transition: 0.5s;
			border: 1px solid #149ddd;

			i {
				color: #fff;
				font-size: 24px;
				line-height: 0;
			}
		}

		.icon-box:hover .icon {
			background: #fff;

			i {
				color: #149ddd;
			}
		}

		.title {
			margin-left: 80px;
			font-weight: 700;
			margin-bottom: 15px;
			font-size: 18px;

			a {
				color: #343a40;

				&:hover {
					color: #149ddd;
				}
			}
		}

		.description {
			margin-left: 80px;
			line-height: 24px;
			font-size: 14px;
		}
	}
</style>
