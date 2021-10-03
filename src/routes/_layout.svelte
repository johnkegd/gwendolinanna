<script>
    import NavbarAuthor from "../components/Navbars/AuthNavbar.svelte";
    /* 	import NavbarLanding from '';
import NavbarUser from ''; */
    import DefaultHeader from "../components/Headers/Landing.svelte";
    import Footer from "../components/Footers/Footer.svelte";
    import logo from "images/logo-2.svg";
    import stars from "images/stars.svg";

    export let segment;
    export let error;

    /*  beforeUpdate(() => {
      var header = document.getElementById("header");
      var footer = document.getElementById("footer");
      header.classList.remove("hidden");
      footer.classList.remove("hidden");
    }); */

    console.log("segment: ", segment);
    console.log("error: ", error);
</script>

{#if segment != "auth"}
    <NavbarAuthor/>
    <DefaultHeader backgroundImage={stars} {logo}>
        <h1 class="text-white font-semibold text-5xl">Hi, i'm Gwendolin.</h1>
        <h2 class="text-white font-semibold text-2xl">
            student of computer science and draftswoman with a taste for photography.
        </h2>
        <p class="mt-4 text-lg text-blueGray-200"/>
    </DefaultHeader>
    <slot/>
    <Footer/>
{:else}
    <slot/>
{/if}
