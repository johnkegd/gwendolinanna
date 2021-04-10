<script>
    import Card from './Card.svelte';
    export let elements; 
</script>
<div class="row">
    {#each elements as element}
    <div class="col s4">
        {#if element === "card"}
        <Card/>
        {:else}
        {element} none
        {/if}
    </div>
    {/each}
</div>
        