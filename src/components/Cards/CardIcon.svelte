<script>
  import Icon from '../Icons/Icon.svelte';
  export let cardStyles = "lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center";
  export let iconType;
  export let iconStyles;
  export let noBg;
</script>

{#if noBg === "true"}
  <div class="{cardStyles}">
        <Icon 
          container="div"
          containerStyles="{iconStyles}"
          type="{iconType}"
        />
        <slot></slot>
  </div>
{:else}
  <div class="{cardStyles}">
    <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
    >
      <div class="px-4 py-5 flex-auto">
        <Icon 
          container="div"
          containerStyles="{iconStyles}"
          type="{iconType}"
        />
        <slot></slot>
      </div>
    </div>
  </div>
{/if}
