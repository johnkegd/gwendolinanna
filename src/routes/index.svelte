<script>
	import Card from '../components/materialize/Card.svelte';
	import cardImage from 'images/example-500x500.jpg';
	import SolFigura from "../components/midcomponents/SolFigura.svelte";
	let Cards = [
		{title:"hi card 0", description:"hi description 0"},
		{title:"hi card 1", description:"hi description 1", image:cardImage},
		{title:"hi card 2", description:"hi description 2"},
		{title:"hi card 3", description:"hi description 3", image:cardImage},
		{title:"hi card 4", description:"hi description 4"},
	]
</script>

<style>
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Gwendolin Home</title>
</svelte:head>

<h1>Home  Page!</h1>
<!-- <p><strong>here is going to be the landing page.</strong></p>
<div class="row">
	{#each Cards as card}
	<div class="col s4">
		<Card {...card}/>
	</div>
{/each}
</div> -->

<SolFigura color={"red"} width={"200px"} animation={"muevete"}/>

