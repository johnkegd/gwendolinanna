<script>
    let key;
    let keyCode;
    function handleKeyDown(event) {
        key = event.key;
        keyCode = event.keyCode;
    }
</script>

<svelte:head>
    <title>ART</title>
</svelte:head>

<svelte:window on:keydown="{handleKeyDown}"/>


<div class="center">
{#if key}
<kbd>{key === ' ' ? 'Space': key}</kbd>
<p>{keyCode}</p>
{:else}
<p>press a key</p>
{/if}
</div>