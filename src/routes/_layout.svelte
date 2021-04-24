<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: grey;
		padding: 2em;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
<Footer />