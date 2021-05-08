<script>
    export let wrapper = false;
    export let container = "span";
    export let containerStyles = "text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300";
    export let type = "fas fa-exclamation-circle";
</script>


{#if wrapper}
    <div>
    {#if container == "span"}
        <span class="{containerStyles}">
            <i class="{type}"></i>
        </span>
        {:else if container == "div"}
        <div class="{containerStyles}">
            <i class="{type}"></i>
        </div>
    {/if}
    </div>
{:else}
    {#if container == "span"}
        <span class="{containerStyles}">
            <i class="{type}"></i>
        </span>
        {:else if container == "div"}
        <div class="{containerStyles}">
            <i class="{type}"></i>
        </div>
    {/if}
{/if}


