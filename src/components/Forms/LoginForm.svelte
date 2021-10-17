<script>
  import { Boy } from "@johnkegd/graphicarts";
  import StarsPattern from "../../node_modules/images/stars.svg";

  var email = "john@gwendolinanna.com";
  var password = "12345678";
  var result;

  // only test purpose
  async function submit() {
    const res = await fetch("http://localhost:8889/auth/users/login", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    const Authorization = await res.headers.get("Authorization");
    result = JSON.stringify(Authorization);
  }

  async function testSubmit() {
    const resp = await fetch("http://192.168.0.112:8888/auth/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    let userId = resp.headers.get("UserID");
    const resp2 = await fetch("http://192.168.0.112:8888/auth/users/" + userId);
  }
</script>

<!-- TODO: connect api from form post action in session path-->
<form action="/session" accept-charset="UTF-8" method="POST">
  <Boy {StarsPattern} />

  <div class="relative w-full mb-3">
    <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      for="login_field"
    />
    <input
      id="login_field"
      autocapitalize="off"
      autocorrect="off"
      autocomplete="username"
      name="email"
      type="email"
      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
      placeholder="Email"
      bind:value={email}
    />
  </div>

  <div class="relative w-full mb-3">
    <label
      class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
      for="password"
    />
    <input
      id="password"
      name="password"
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
    <input
      class="bg-blueGray-800 text-white focus:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="submit"
      value="Sign In"
      data-disable-with="Signing in..."
      data-sso-label="Sign in with your identity provider"
      data-signin-label="Sign in"
    />
    <button
      class="bg-blueGray-800 text-white focus:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
      type="botton"
      on:click|preventDefault={testSubmit}
    >
      Get data
    </button>
  </div>
</form>
<hr class="mt-6 border-b-1 border-blueGray-300" />
