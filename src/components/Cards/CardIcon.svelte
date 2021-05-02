<script>
  import Icon from '../Icons/Icon.svelte';
  export let cardStyles = "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center";
  export let cardTitle = "Card title";
  export let cardDescription = "Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.";
  export let cardIconType = "fas fa-question";
  export let cardIconBackground = "bg-emerald-400";
</script>

<div class="{cardStyles}">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-5 flex-auto">
        <Icon 
          container="div"
          containerStyles="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full {cardIconBackground}"
          type="{cardIconType}"
        />
        <h6 class="text-xl font-semibold">{cardTitle}</h6>
        <p class="mt-2 mb-4 text-blueGray-500">
          {cardDescription}
        </p>
      </div>
    </div>
  </div>