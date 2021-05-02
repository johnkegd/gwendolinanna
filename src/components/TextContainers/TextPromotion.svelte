<script>
    import Icon from '../Icons/Icon.svelte';
    export let containerStyles;
    export let promotionTitle;
    export let promotionP1;
    export let promotionP2;
    export let iconType = "fas fa-frown";
    export let iconContainer;
    export let iconStyles;
    export let promotionLinkText = "click here";
    export let promotionLink = "/"
</script>

<div class="{containerStyles}">
    <Icon
        container="{iconContainer}"
        containerStyles="{iconStyles}"
        type="{iconType}"
    />
    <h3 class="text-3xl mb-2 font-semibold leading-normal">
        {promotionTitle}
    </h3>
    <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        {promotionP1}
    </p>

    {#if promotionP2 != undefined}
    <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
     {promotionP2}
    </p>
    {/if}

    {#if promotionLink != undefined}
    <a href="{promotionLink}" class="font-bold text-blueGray-700 mt-8">
        {promotionLinkText}
    </a>
    {/if}
</div>