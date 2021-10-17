<script>
  import Icon from "../Icons/Icon.svelte";
  import Separator from "../Separator.svelte";
  import Image from "../Images.svelte";
  import IconList from "../Lists/IconList.svelte";
  import Li from "../Lists/ListItem.svelte";
  export let sectionStyles = "relative py-20";
</script>

<!--TODO: Reduce section complex with components-->
<section class={sectionStyles}>
  <Separator
    wrapperStyles="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
    wrapperInLine="transform: translateZ(0)"
    svgStyles="absolute bottom-0 overflow-hidden"
    svgViewBox="0 0 2560 100"
    polygonStyles="text-white fill-current"
    polygonPoints="2560 0 2560 100 0 100"
  />

  <div class="container mx-auto px-4">
    <div class="items-center flex flex-wrap">
      <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
        <Image imgStyles="max-w-full rounded-lg shadow-lg" />
        <div class="md:pr-12">
          <Icon
            container="div"
            containerStyles="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-red-300"
            type="fas fa-rocket text-xl"
          />
          <h3 class="text-3xl font-semibold">A growing company</h3>
          <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
            The extension comes with three pre-built pages to help you get
            started faster. You can change the text and images and you're good
            to go.
          </p>

          <IconList listStyles="list-none mt-6" iconWrapper="true">
            <Li
              liTitle="Carefully crafted components"
              liIconType="fas fa-fingerprint"
            />

            <Li liTitle="Amazing page examples" liIconType="fab fa-html5" />

            <Li liTitle="Dynamic components" liIconType="far fa-paper-plane" />
          </IconList>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .slotProp {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  .active {
    background-color: #c23d26;
    color: white;
  }
</style>
