<script>
    export let sectionStyles = "relative py-20";
    export let containerStyles = "container mx-auto px-4";

</script>

{#if containerStyles != "false"}
    <section class="{sectionStyles}">
        <slot name="head-section"></slot>  
        <div class="{containerStyles}">
            <slot name="images-section"></slot>
            <slot></slot>
        </div>
        <slot name="footer-section"></slot>
    </section>
{:else }
    <section class="{sectionStyles}">
        <slot></slot>
    </section>
{/if}