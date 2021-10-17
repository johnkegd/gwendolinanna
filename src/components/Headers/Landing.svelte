<script>
  import Nester from "../Nester.svelte";
  import Separator from "../Separator.svelte";
  export let backgroundImage;
  export let logo;
</script>

<div
  class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
  id="header"
>
  <div
    class="absolute top-0 w-full h-full bg-center bg-cover"
    style="background-image: url({backgroundImage});"
  >
    <span
      id="blackOverlay"
      class="w-full h-full absolute opacity-75 bg-black"
    />
    <a href="/">
      <img
        class="absolute top-0 b-auto left-0 pt-0 -mt-32 max-h-860-px"
        src={logo}
        alt="Gwendolin Anna website"
      />
    </a>
  </div>
  <Nester
    clsChildrens={[
      "container relative mx-auto",
      "items-center flex flex-wrap",
      "w-full lg:w-6/12 px-4 ml-auto mr-auto text-center",
    ]}
  >
    <div slot="floor-2" class="pr-12">
      <slot />
    </div>
  </Nester>

  <Separator
    wrapperStyles="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
    polygonStyles="text-blueGray-200 fill-current"
  />
</div>
