<script>
  import ClassMap from "../../ClassMap.js";
  let clazz = "";

  export let color = "text-white";
  export let defaultClasses = [
    color,
    "p-3",
    "text-center",
    "inline-flex",
    "items-center",
    "justify-center",
    "w-12",
    "h-12",
    "mb-5",
    "shadow-lg",
    "rounded-full",
  ];

  export let wrapper = false;
  export let container = "span";
  export let type = "fas fa-question-circle";
  export { clazz as class };

  clazz = ClassMap(defaultClasses, clazz);
</script>

{#if wrapper}
  <div>
    {#if container == "span"}
      <span class={clazz}>
        <i class={type} />
      </span>
    {:else if container == "div"}
      <div class={clazz}>
        <i class={type} />
      </div>
    {/if}
  </div>
{:else if container == "span"}
  <span class={clazz} id="icon">
    <i class={type} />
  </span>
{:else if container == "div"}
  <div class={clazz}>
    <i class={type} />
  </div>
{/if}
