<script>
	import NavbarAuthor from '../components/Navbars/AuthNavbar.svelte';
/* 	import NavbarLanding from '';
	import NavbarUser from ''; */
	export let segment;

	import Footer from '../components/Footers/Footer.svelte';
	//console.log("segment: ", segment);
</script>
{#if segment != "auth"}
	<NavbarAuthor/>
		<main>
			<slot></slot>
		</main>
	<Footer />
{:else}
	<main>
		<slot></slot>
	</main>
{/if}