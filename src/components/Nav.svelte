<script>
	import SideNav from './SideNav.svelte';
	import logo from '../node_modules/images/logo-2.svg';
	import background from '../node_modules/images/stars.svg'
	export let segment;
</script>

<style>
	nav a {
		text-decoration: none;
	}
	nav .nav-background .pattern {
		background-size:20%
	}
	nav .brand-logo {
    left:-15% !important;	
}

nav ul:not(.indicators) li.active::before {
    background-color: #ffffcc !important;
  }

  .categories-wrapper {
    background-color: #212121;
    color: grey;
  }

.nav-extended {
	background-color: #212121;
}


.title {
	color: #0080ff;
	font-family: "New Century Schoolbook", Baskerville, serif; font-weight: 550; font-style: normal;
	text-align: right;
	font-size: 60px;
}
.tagline {
	text-align: right;
	color: #80bfff;
	font-size: 22px;
	font-weight: 600;
}

</style>

<nav class="nav-extended">
	<div class="nav-background">
		<div class="pattern active" style="background-image: url({background})"></div>
	</div>
	  <div class="nav-wrapper container grey-text text-lighten-3">
			<a href="." class="brand-logo"><img src={logo} with="200" height="300" alt="gwendolin logo"></a>
			<a href="." data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			<ul class="right hide-on-med-and-down">
				<li class:active={segment === undefined}><a href=".">Home</a></li>
				<li class:active={segment === "gallery"}><a rel=prefetch href="gallery">Gallery</a></li>
				<li class:active={segment === "about"}><a href="about">About</a></li>
				<li class:active={segment === "blog"}><a href="blog">Blog</a></li>
				<li><a class='dropdown-trigger' href='#' data-target='feature-dropdown'>Features<i
					class="material-icons right">arrow_drop_down</i></a></li>
			</ul>
			  <!-- Dropdown Structure -->
			  <ul id='feature-dropdown' class='dropdown-content'>
				<li><a href="full-header.html">Fullscreen Header</a></li>
				<li><a href="horizontal.html">Horizontal Style</a></li>
				<li><a href="no-image.html">No Image Expand</a></li>
			  </ul>
		
			<div class="nav-header center yellow-text text-lighten-4">
			<h1 class="title">energized by imagination</h1>
			<div class="tagline">{segment != undefined ? segment.toUpperCase() : "HOME"}</div>
			</div>
	</div>
	 <!-- Fixed Masonry Filters -->
	 <div class="categories-wrapper">
		<div class="categories-container">
		  <ul class="categories container">
			{#if segment === "gallery"}
			<li class="active"><a href="#all">All</a></li>
			<li><a href="#polygon">Polygon</a></li>
			<li><a href="#bigbang">Big Bang</a></li>
			<li><a href="#sacred">Sacred Geometry</a></li>
			{/if}
		  </ul>
		</div>
	  </div>
</nav>
<SideNav segment={segment}/>
