<script>
    import Icon from '../Icons/Icon.svelte';
    export let promotionTitle;
    export let promotionP1;
    export let promotionP2;
    export let iconType = "fas fa-frown";
    export let promotionLinkText = "click here";
    export let promotionLink = "/"
</script>

<div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
    <Icon
        container="div"
        containerStyles="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
        type="fas {iconType} text-xl"
    />
    <h3 class="text-3xl mb-2 font-semibold leading-normal">
        {promotionTitle}
    </h3>
    <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        {promotionP1}
    </p>
    <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
     {promotionP2}
    </p>
    <a href="{promotionLink}" class="font-bold text-blueGray-700 mt-8">
        {promotionLinkText}
    </a>
</div>