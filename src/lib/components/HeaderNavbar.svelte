<script lang="ts">
	import 'boxicons/css/boxicons.css';
	import 'bootstrap/dist/css/bootstrap.css';
</script>

<nav id="navbar" class="nav-menu navbar">
	<ul>
		<li>
			<a href="#hero" class="nav-link scrollto active"> <i class="bx bx-home"></i><span>Home</span></a>
		</li>
		<li>
			<a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i><span>About</span></a>
		</li>
		<li>
			<a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i><span>Resume</span></a>
		</li>
		<li>
			<a href="#portfolio" class="nav-link scrollto"> <i class="bx bx-book-content"></i><span>Portfolio</span></a>
		</li>
		<li>
			<a href="#services" class="nav-link scrollto"> <i class="bx bx-server"></i><span>Services</span></a>
		</li>
		<li>
			<a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a>
		</li>
	</ul>
</nav>

<!-- .nav-menu -->
<style lang="scss">
	.nav-menu {
		padding: 30px 0 0 0;

		* {
			margin: 0;
			padding: 0;
			list-style: none;
		}

		> ul > li {
			position: relative;
			white-space: nowrap;
		}

		a {
			display: flex;
			align-items: center;
			color: #a8a9b4;
			padding: 12px 15px;
			margin-bottom: 8px;
			transition: 0.3s;
			font-size: 15px;

			&:focus {
				display: flex;
				align-items: center;
				color: #a8a9b4;
				padding: 12px 15px;
				margin-bottom: 8px;
				transition: 0.3s;
				font-size: 15px;
			}

			i,
			&:focus i {
				font-size: 24px;
				padding-right: 8px;
				color: #6f7180;
			}

			&:hover {
				text-decoration: none;
				color: #fff;
			}
		}

		.active {
			text-decoration: none;
			color: #fff;

			&:focus {
				text-decoration: none;
				color: #fff;
			}
		}

		li:hover > a {
			text-decoration: none;
			color: #fff;
		}

		a:hover i {
			color: #149ddd;
		}

		.active {
			i,
			&:focus i {
				color: #149ddd;
			}
		}

		li:hover > a i {
			color: #149ddd;
		}
	}
</style>
