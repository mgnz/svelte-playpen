<script lang="ts">
	import { onMount } from 'svelte';

	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-icons/font/bootstrap-icons.css';

	onMount(async () => {});
</script>

<!--
    todo :
        - logic that puls ara-valuenow and updates the width of the element
-->

<section id="skills" class="skills section-bg">
	<div class="container">
		<div class="section-title">
			<h2>Skills</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
				consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
				iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row skills-content">
			<div class="col-lg-6" data-aos="fade-up">
				<div class="progress">
					<span class="skill">HTML <i class="val">100%</i></span>
					<div class="progress-bar-wrap">
						<div class="progress-bar" role="progressbar" style="width: 100%;">
							<!-- aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" -->
						</div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">CSS <i class="val">90%</i></span>
					<div class="progress-bar-wrap">
						<div class="progress-bar" role="progressbar" style="width: 90%;">
							<!-- aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" -->
						</div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">JavaScript <i class="val">75%</i></span>
					<div class="progress-bar-wrap">
						<div class="progress-bar" role="progressbar" style="width: 75%;">
							<!-- aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" -->
						</div>
					</div>
				</div>
			</div>

			<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
				<div class="progress">
					<span class="skill">PHP <i class="val">80%</i></span>
					<div class="progress-bar-wrap">
						<div class="progress-bar" role="progressbar" style="width: 80%;">
							<!-- aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" -->
						</div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">WordPress/CMS <i class="val">90%</i></span>
					<div class="progress-bar-wrap">
						<div class="progress-bar" role="progressbar" style="width: 90%;">
							<!-- aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" -->
						</div>
					</div>
				</div>

				<div class="progress">
					<span class="skill">Photoshop <i class="val">55%</i></span>
					<div class="progress-bar-wrap">
						<div class="progress-bar" role="progressbar" style="width: 55%;">
							<!-- aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/section.scss';
	.skills {
		.progress {
			height: 60px;
			display: block;
			background: none;
			border-radius: 0;

			.skill {
				padding: 0;
				margin: 0 0 6px 0;
				text-transform: uppercase;
				display: block;
				font-weight: 600;
				font-family: 'Poppins', sans-serif;
				color: #050d18;

				.val {
					float: right;
					font-style: normal;
				}
			}
		}

		.progress-bar-wrap {
			background: #dce8f8;
			height: 10px;
		}

		.progress-bar {
			width: 1px;
			height: 10px;
			transition: 0.9s;
			background-color: #149ddd;
		}
	}
</style>
