<script>
	import NavbarAuthor from '../components/Navbars/AuthNavbar.svelte';
/* 	import NavbarLanding from '';
	import NavbarUser from ''; */
	export let segment;

//	import Footer from '../components/Footer.svelte';
	import Footer from '../components/Footers/Footer.svelte';
	
</script>

<NavbarAuthor/>
<main>
	<slot></slot>
</main>
<Footer />