<script>
	import SideNav from './SideNav.svelte';
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav class="nav-extended">
	<div class="nav-background">
		<div class="pattern active" style="background-image: url('images/stars.svg');background-size:20%"></div>
	</div>
	  <div class="nav-wrapper container grey-text text-lighten-3">
			<a href="index.html" class="brand-logo"><img src="" with="200" height="300" alt="gwendolin logo"></a>
			<a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			<ul class="right hide-on-med-and-down">
				<li class:active={segment === undefined}><a href=".">Home</a></li>
				<li class:active={segment === "gallery"}><a rel=prefetch href="gallery">Gallery</a></li>
				<li class:active={segment === "about"}><a href="about">About</a></li>
				<li class:active={segment === "blog"}><a href="blog">Blog</a></li>
			</ul>
			  <!-- Dropdown Structure -->
			  <ul id='feature-dropdown' class='dropdown-content'>
				<li><a href="full-header.html">Fullscreen Header</a></li>
				<li><a href="horizontal.html">Horizontal Style</a></li>
				<li><a href="no-image.html">No Image Expand</a></li>
			  </ul>
		
			<div class="nav-header center yellow-text text-lighten-4">
			<h1>I MAKE THINGS</h1>
			<div class="tagline">Gallery</div>
			</div>
	</div>
	 <!-- Fixed Masonry Filters -->
	 <div class="categories-wrapper yellow lighten-4">
		<div class="categories-container">
		  <ul class="categories container">
			<li class="active"><a href="#all">All</a></li>
			<li><a href="#polygon">Polygon</a></li>
			<li><a href="#bigbang">Big Bang</a></li>
			<li><a href="#sacred">Sacred Geometry</a></li>
		  </ul>
		</div>
	  </div>
</nav>
<SideNav/>
