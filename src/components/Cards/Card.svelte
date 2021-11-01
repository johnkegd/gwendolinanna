<script>
  import ClassMap from "../../ClassMap.js";
  import CardImage from "../Cards/CardImage.svelte";
  import CardIcon from "../Cards/CardIcon.svelte";
  import CardPromo from "../Cards/CardPromo.svelte";
  const component = { image: CardImage, icon: CardIcon, promo: CardPromo };
  export let type = "icon";
  export let defaultClasses = {
    icon: ["w-full", "md:w-4/12", "px-4", "text-center"],
    image: ["w-full", "md:w-4/12", "px-4", "mr-auto", "ml-auto"],
  };
  let clazz = "";
  let skipContainer = false;
  export let CLASS;
  export { clazz as class };

  if (type === "transparent") {
    type = "icon";
    skipContainer = true;
    defaultClasses.icon = ["w-full", "lg:w-3/12", "px-4", "text-center"];
  }

  if (!CLASS) {
    CLASS = ClassMap(defaultClasses[type], clazz);
  }
</script>

<svelte:component this={component[type]} class={CLASS} {skipContainer}>
  <slot>
    <svelte:component this={component[type]}>
      <slot slot="placeholder_content" />
    </svelte:component>
  </slot>
</svelte:component>
