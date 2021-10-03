<script>
  import LoginNavbar from "../../components/Navbars/LoginNavbar.svelte";
  import AuthFooter from "../../components/Footers/AuthFooter.svelte";
</script>

<LoginNavbar />
<main>
  <slot />
</main>
<AuthFooter />
