<script>
	import NavbarAuthor from '../components/Navbars/AuthNavbar.svelte';
	import Nav from '../components/Nav.svelte';
//	import Footer from '../components/Footer.svelte';
import Footer from '../components/Footers/Footer.svelte';
	export let segment;
</script>

<NavbarAuthor/>
<main>
	<slot></slot>
</main>
|<Footer />