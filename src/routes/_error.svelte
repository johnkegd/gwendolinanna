<script>
  import Section from "../components/Sections/SectionClean.svelte";
  import { onMount } from "svelte";
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
  console.log(dev);

  onMount(() => {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");
    header.classList.add("hidden");
    footer.classList.add("hidden");
  });
</script>

<svelte:head>
  <title>{status} {error.message}</title>
</svelte:head>

<Section>
  <div class="flex-auto px-4 lg:px-10 py-10 pt-0 text-center">
    <h1>{status}</h1>

    <p>{error.message}</p>

    {#if dev && error.stack}
      <pre>{error.stack}</pre>
    {/if}
  </div>
</Section>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
