<script>
  import Icon from "../Icons/Icon.svelte";
  import ClassMap from "../../ClassMap.js";
  let clazz = "";
  export let defaultClasses = ["w-full", "md:w-4/12", "px-4", "text-center"];
  export { clazz as class };

  clazz = ClassMap(defaultClasses, clazz);
</script>

<div class={clazz}>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
  >
    <div class="px-4 py-5 flex-auto">
      <slot>
        <!-- fallback slot -->
        <Icon color="text-red-600" class="bg-red-300" />
        <h3 class="text-xl font-semibold">Card title</h3>
        <p class="mt-2 mb-4 text-blueGray-500">
          Description area - Boilerplate card.
        </p>
      </slot>
    </div>
  </div>
</div>
