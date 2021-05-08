<script>
import Icon from '../Icons/Icon.svelte';
export let listStyles;
</script>

<style>
    .super {
        background:#eee;
        width: 100px;
        height: 50px;
        border: 2px solid black;
        padding: 2px;
    }

</style>


<ul class="{listStyles}">
    <slot name="super">
    </slot>
    <slot></slot>
</ul>