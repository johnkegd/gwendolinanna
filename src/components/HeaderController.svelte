<script>
	import {onMount,tick,afterUpdate, beforeUpdate, onDestroy} from 'svelte';
	import SideNav from './SideNav.svelte';
	import logo from '../node_modules/images/logo-2.svg';
	import background from '../node_modules/images/stars.svg';
	import {fade,fly, crossfade} from 'svelte/transition';
	import {typewriter} from '../animations.js';
	import {pagesData} from '../pagesData.js';
	export let segment;
	let pagesIterator = Object.values(pagesData);
	let currentPage = pagesData[segment||"home"];;
	
	const options = {
		'home':'component1',
		'gallery':'component2',
		'otro':'component3'
	}
beforeUpdate(() => {
	currentPage = pagesData[segment||"home"];
});


onDestroy(() =>{
console.log("destroyed");
});

//

/**
 * TODO title animations onMount
 * */	

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
	<div class="nav-background" on:scroll="">
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
				<li><a class='dropdown-trigger' href="/ideas" data-target='feature-dropdown'>Ideas<i
					class="material-icons right">arrow_drop_down</i></a></li>
			</ul>
			  <!-- Dropdown Structure -->
			  <ul id='feature-dropdown' class='dropdown-content'>
				<li><a href="ideas/bank">bank</a></li>
				<li><a href="ideas/art">Art</a></li>
				<li><a href="ideas/docs">Docs</a></li>
			  </ul>
		
			<div class="nav-header center yellow-text text-lighten-4">
				{#each pagesIterator as page}
					{#if page.name && page.name == currentPage.name}
						{#if page.animate.in &&  page.animate.out}
						<h1 class="title" in:typewriter out:fly="{{x:250 , duration:600}}">{currentPage.title}</h1>
						{:else if page.animate.in}
						<h1 class="title" in:typewriter out:fade>{currentPage.title}</h1>
						{:else if page.animate.out}
						<h1 class="title" out:fly="{{x:300, duration:800}}">{currentPage.title}</h1>
						{:else}
						<h1 class="title">{page.title}</h1>
						{/if}
					{/if}
				{/each}
			<div class="tagline">{currentPage.name ? currentPage.name.toUpperCase() : segment.toUpperCase()}</div>
			</div>
	</div>
	 <!-- Fixed Masonry Filters -->
	 <div class="categories-wrapper">
		<div class="categories-container">
		  <ul class="categories container">
			{#if currentPage.name && currentPage.name === "gallery"}
			<li class="active"><a href="gallery/#all">All</a></li>
			<li><a href="gallery/#polygon">Polygon</a></li>
			<li><a href="gallery/#bigbang">Big Bang</a></li>
			<li><a href="gallery/#sacred">Sacred Geometry</a></li>
			{:else if currentPage.name === "home"}
			<li class="active"><a href="#A">A</a></li>
			<li><a href="#B">B</a></li>
			<li><a href="#C">C</a></li>
			<li><a href="#D">D</a></li>
			
			{:else}
			<li class="active"><a href="{segment}/#A">A</a></li>
			<li><a href="{segment}/#B">B</a></li>
			<li><a href="{segment}/#C">C</a></li>
			<li><a href="{segment}/#D">D</a></li>
			{/if}
		  </ul>
		</div>
	  </div>
</nav>
<SideNav segment/>
