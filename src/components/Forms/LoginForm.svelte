<script>
  import BoyGrapicArt from "../GraphicArts/Boy.svelte";

  var email = "john@gwendolinanna.com";
  var password = "12345678";
  var result;

  async function submit() {
    const res = await fetch("http://localhost:8889/auth/users/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    const Authorization = await res.headers.get("Authorization");
    result = JSON.stringify(Authorization);
  }

  async function getItem() {
    const resp = await fetch("/user.json", {
      headers: {
        email,
        password,
      },
    });
    const result = await resp;
    console.log(result);
  }
  console.log(result);
</script>

<form on:submit={submit}>
  <BoyGrapicArt />

  <div class="relative w-full mb-3">
    <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      for="grid-email"
    />
    <input
      id="grid-email"
      type="email"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Email"
      autocomplete="username"
      bind:value={email}
    />
  </div>

  <div class="relative w-full mb-3">
    <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      for="grid-password"
    />
    <input
      id="grid-password"
      type="password"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      autocomplete="current-password"
      placeholder="Password"
      bind:value={password}
    />
  </div>

  <div>
    <label class="relative w-full mb-3">
      <input
        id="customCheckLogin"
        type="checkbox"
        class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
      />
      <span class="ml-2 text-sm font-semibold text-blueGray-600">
        Remember me
      </span>
    </label>
  </div>

  <div class="text-center mt-6">
    <button
      class="bg-blueGray-800 text-white focus:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="submit"
      value="Sign In"
    >
      Sign In
    </button>
    <button
      class="bg-blueGray-800 text-white focus:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="botton"
      on:click|preventDefault={getItem}
    >
      Get data
    </button>
  </div>
</form>
<hr class="mt-6 border-b-1 border-blueGray-300" />
