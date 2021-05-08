<script>
    let hovering;

    function enter() {
        hovering=true;
    }
    function leave() {
        hovering = false;
    }
</script>
<style>
    .slotHijoContainer {
        border: 1px solid rgb(13, 29, 173);
        padding:1px;
    }
</style>


<div on:mouseenter="{enter}" on:mouseleave="{leave}" class="slotHijoContainer">
    <slot hover="{hovering}"></slot>
</div>