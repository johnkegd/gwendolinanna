<script>
	import {onMount,tick,afterUpdate, beforeUpdate, onDestroy} from 'svelte';
	import SideNav from './SideNav.svelte';
	import logo from '../node_modules/images/logo-2.svg';
	import background from '../node_modules/images/stars.svg';
	import {fade,fly, crossfade} from 'svelte/transition';
	import {typewriter} from '../animations.js';
	import {pagesData} from '../pagesData.js';
	
	export let segment;
	let currentPage = pagesData[segment||"home"];;


beforeUpdate(() => {
	currentPage = pagesData[segment||"home"];
});


onDestroy(() =>{
console.log("destroyed");
});

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
    background-color: #0080ff !important;
  }

  .categories-wrapper {
    background-color: #212121;
    color: grey;
  }

.nav-extended {
	background-color: #212121;
}
.nav-wrapper {
	color: #fff;
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
	  <div class="nav-wrapper container">
			<a href="." class="brand-logo"><img src={logo} with="200" height="300" alt="gwendolin logo"></a>
			<a href="." data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
			<ul class="right hide-on-med-and-down">
				<li class:active={segment === undefined}><a href=".">Home</a></li>
				<li class:active={segment === "gallery"}><a rel=prefetch href="gallery">Gallery</a></li>
				<li class:active={segment === "about"}><a href="about">About</a></li>
				<li class:active={segment === "blog"}><a href="blog">Blog</a></li>
				<li></li>
				<li><a class='dropdown-trigger' href data-target='feature-dropdown'>Ideas<i
					class="material-icons right">arrow_drop_down</i></a></li>
			</ul>
			  <!-- Dropdown Structure -->
			  <ul id='feature-dropdown' class='dropdown-content'>
				<li><a href="ideas/bank">bank</a></li>
				<li><a href="ideas/art">Art</a></li>
				<li><a href="ideas/docs">Docs</a></li>
			  </ul>
		
			<div class="nav-header center yellow-text text-lighten-4">
				{#if currentPage.animate.in && currentPage.animate.out} 
					{#if currentPage.animate.in === "typewriter" && currentPage.animate.out === "fly"}
						<h1 class="title"  in:typewriter out:fly="{{x:300 , duration:700}}">{currentPage.title}</h1>
						{:else if currentPage.animate.out === "fade"}
							<h1 class="title" in:typewriter out:fade>{currentPage.title}</h1>
							{:else if currentPage.animate.out === "crossfade"}
							<h1 class="title" in:typewriter out:crossfade>{currentPage.title}</h1>
					{/if}
				{:else}
				<h1 class="title" in:typewriter>{currentPage.title}</h1>				
				{/if}		
			<div class="tagline">{currentPage.name.toUpperCase()}</div>
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
			{:else}
			<li class="active"><a href="#all">A</a></li>
			<li><a href="#polygon">B</a></li>
			<li><a href="#bigbang">C</a></li>
			<li><a href="#sacred">D</a></li>
			{/if}
		  </ul>
		</div>
	  </div>
</nav>
<SideNav segment/>
