<script>
    import {fade} from 'svelte/transition';
    export let color;
</script>

<style>
    div {
        width: 200px;
        height: 50px;
        margin: 10px;
    }
</style>

<div style="background:{color};color:{color ==="black" ? "white": ""}" transition:fade>
color is: {color}
</div>