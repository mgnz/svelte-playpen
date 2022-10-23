<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';

	export let role: string;
	export let range: string | null;
	export let location: string;
</script>

<div class="resume-item">
	<h4>{role}</h4>
	{#if range}
		<h5>{range}</h5>
	{/if}
	<p><em>{location}</em></p>
	<slot />
</div>

<style lang="scss">
	// parent defines #resume so we inject into it here

	:global(#resume) {
		.resume-item {
			padding: 0 0 20px 20px;
			margin-top: -2px;
			border-left: 2px solid #1f5297;
			position: relative;

			h4 {
				line-height: 18px;
				font-size: 18px;
				font-weight: 600;
				text-transform: uppercase;
				font-family: 'Poppins', sans-serif;
				color: #050d18;
				margin-bottom: 10px;
			}

			h5 {
				font-size: 16px;
				background: #e4edf9;
				padding: 5px 15px;
				display: inline-block;
				font-weight: 600;
				margin-bottom: 10px;
			}

			ul {
				padding-left: 20px;

				li {
					padding-bottom: 10px;
				}
			}

			&:last-child {
				padding-bottom: 0;
			}

			&::before {
				content: '';
				position: absolute;
				width: 16px;
				height: 16px;
				border-radius: 50px;
				left: -9px;
				top: 0;
				background: #fff;
				border: 2px solid #1f5297;
			}
		}
	}
</style>
