<script lang="ts">
	export let role: string;
	export let range: string;
	export let location: string;
	export let body: string;
</script>

<div class="resume-item">
	<h4>{role}</h4>
	<h5>{range}</h5>
	<p><em>{location}</em></p>
	<slot body="{body}" />
</div>

<style lang="scss">
	.resume {
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
		}
	}
</style>
