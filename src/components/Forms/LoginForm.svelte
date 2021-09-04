<script>
  import FormPart from "./Parts/LoginFormPart.svelte";
  import BoyGrapicArt from "../GraphicArts/Boy.svelte";

  var email;
  var password;

  function handleLogin() {
    if (email && password) {
      console.log("send request", email, password);
    } else {
      console.log("empty values", email, password);
    }
  }
</script>

<form>
  <BoyGrapicArt />

  <FormPart inputType="Email" bind:value={email} labelForId="grid-email" />

  <FormPart
    inputType="Password"
    bind:value={password}
    labelForId="grid-password"
  />

  <FormPart
    inputType="checkbox"
    labelForId="customCheckLogin"
    styles="inline-flex items-center cursor-pointer"
  >
    Remember me
  </FormPart>
  <div class="text-center mt-6">
    <button
      on:click={handleLogin}
      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="button"
    >
      Sign In
    </button>
  </div>
</form>
<hr class="mt-6 border-b-1 border-blueGray-300" />
