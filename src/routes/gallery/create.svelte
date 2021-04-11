<script>
import Card from '../../components/materialize/Card.svelte';
let title;
let price;
let description;
let category;
let imageUrl;
let links;
let items = [];
let cardItem = {
    title,description,price,category,imageUrl,links
}

function submitHandler() {
console.log(cardItem);
}
</script>
<style>
</style>


<h2>Add a new image card to gallery</h2>
<div class="row">
    <form on:submit|preventDefault={submitHandler}>
        <input type="text" placeholder="Card Title" bind:value={cardItem.title} required>
        <input type="number" placeholder="Price" bind:value={cardItem.price} required>
        <textarea type="text" placeholder="Description" bind:value={cardItem.description}></textarea>
        <input type="text" placeholder="Category" bind:value={cardItem.category}>
        <input type="text" placeholder="Image Url" bind:value={cardItem.imageUrl} required>
        <button type="submit" class="btn wave" >Create</button>
        <button type="" class="btn wave" >Delete</button>
        <a href="gallery" class="btn wave">Gallery</a>
    </form>
</div>

<!--PREVIEW-->
<div class="row">

    <div class="col s4">
        <Card {...cardItem}/>
    </div>
<!-- {#each items as item}
    <div class="col s4">
      {#if item != undefined}
      <Card {...item}/>
      {:else}
      <Card/>
      {/if}
    </div>
{/each} -->
</div>

 
