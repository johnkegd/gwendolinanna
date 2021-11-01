<script>
  import Icon from "../Icons/Icon.svelte";
  export { CLASS as class };
  export let skipContainer = false;
  let CLASS;
</script>

{#if $$slots.placeholder_content}
  <slot name="placeholder_content" />
  <!-- fallback slot content-->
  {#if !$$slots.icon}
    <Icon color="text-red-600" class="bg-red-300" />
  {/if}
  <h3 class="text-xl font-semibold">Card default type icon</h3>
  <p class="mt-2 mb-4 text-blueGray-500">Props:</p>
  <p>- type: icon | image | other</p>
  <p>- class: add classes to default depending of type</p>
  <p>- CLASS: define styles without defaults</p>
{:else}
  <div class={CLASS}>
    {#if skipContainer}
      <slot>
        <Icon color="text-red-600" class="bg-red-300" />
        <h3 class="text-xl font-semibold">Card default type icon</h3>
        <p class="mt-2 mb-4 text-blueGray-500">Props:</p>
        <p>- type: icon | image | other</p>
        <p>- class: add classes to default depending of type</p>
        <p>- CLASS: define styles without defaults</p>
      </slot>
    {:else}
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
      >
        <div class="px-4 py-5 flex-auto">
          <slot>
            <Icon color="text-red-600" class="bg-red-300" />
            <h3 class="text-xl font-semibold">Card default type icon</h3>
            <p class="mt-2 mb-4 text-blueGray-500">Props:</p>
            <p>- type: icon | image | other</p>
            <p>- class: add classes to default depending of type</p>
            <p>- CLASS: define styles without defaults</p>
          </slot>
        </div>
      </div>
    {/if}
  </div>
{/if}
