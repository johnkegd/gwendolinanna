<script>
    import Icon from '../Icons/Icon.svelte';
    export let containerStyles;
    export let iconType = "fas fa-frown";
    export let iconContainer;
    export let iconStyles;

</script>

<div class="{containerStyles}">
    <Icon
        container="{iconContainer}"
        containerStyles="{iconStyles}"
        type="{iconType}"
    />
    <slot></slot>
</div>