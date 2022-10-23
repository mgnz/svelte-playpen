<script lang="ts">
	import 'bootstrap/dist/css/bootstrap.css';
	import ResumeSectionItem from './ResumeSectionItem.svelte';
</script>

<section id="resume" class="resume">
	<div class="container">
		<div class="section-title">
			<h2>Resume</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
				consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in
				iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row">
			<div class="col-lg-6" data-aos="fade-up">
				<h3 class="resume-title">Sumary</h3>
				<ResumeSectionItem
					role="Alex Smith"
					range=""
					location="Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing
                    user-centered digital/print marketing material from initial concept to final, polished deliverable.">
					<ul>
						<li>Portland par 127,Orlando, FL</li>
						<li>(123) 456-7891</li>
						<li>alice.barkley@example.com</li>
					</ul>
				</ResumeSectionItem>
				<h3 class="resume-title">Education</h3>
				<ResumeSectionItem
					role="Master of Fine Arts &amp; Graphic Design"
					range="2015 - 2016"
					location="Rochester Institute of Technology, Rochester, NY">
					<p>
						Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut
						dignissimos deleniti nerada porti sand markend
					</p>
				</ResumeSectionItem>
				<ResumeSectionItem
					role="Bachelor of Fine Arts &amp; Graphic Design"
					range="2010 - 2014"
					location="Rochester Institute of Technology, Rochester, NY">
					<p>
						Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut
						dignissimos deleniti nerada porti sand markend
					</p>
				</ResumeSectionItem>
			</div>
			<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
				<h3 class="resume-title">Professional Experience</h3>

				<ResumeSectionItem
					role="Senior graphic design specialist"
					range="2019 - Present"
					location="Experion, New York, NY ">
					<ul>
						<li>
							Lead in the design, development, and implementation of the graphic, layout, and production communication
							materials
						</li>
						<li>
							Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.
						</li>
						<li>
							Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design
						</li>
						<li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
					</ul>
				</ResumeSectionItem>
				<ResumeSectionItem
					role="Graphic design specialist"
					range="2017 - 2018"
					location="Stepping Stone Advertising, New York, NY">
					<ul>
						<li>
							Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).
						</li>
						<li>Managed up to 5 projects or tasks at a given time while under pressure</li>
						<li>Recommended and consulted with clients on the most appropriate graphic design</li>
						<li>Created 4+ design presentations and proposals a month for clients and account managers</li>
					</ul>
				</ResumeSectionItem>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '../../styles/section.scss';
	#resume {
		.resume-title {
			font-size: 26px;
			font-weight: 700;
			margin-top: 20px;
			margin-bottom: 20px;
			color: #050d18;
		}
	}
</style>
