<script>
	import AuthNavbar from '../../components/Navbars/AuthNavbar.svelte';
	export let segment;
	import AuthFooter from '../../components/Footers/AuthFooter.svelte';
	
</script>

<AuthNavbar/>
<main>
	<slot></slot>
</main>
<AuthFooter/>

