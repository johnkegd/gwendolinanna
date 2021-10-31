<script>
  import Menu from "@johnkegd/menu";
  import logo from "../../node_modules/images/logo-2.svg";
  let navbarOpen = false;
  function setNavbarOpen() {
    navbarOpen = !navbarOpen;
  }
  let y;
</script>

<svelte:window bind:scrollY={y} />
<nav
  class="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg {y >
  700
    ? 'bg-blueGray-800'
    : ''}"
>
  <div
    class="container px-4 mx-auto flex flex-wrap items-center justify-between"
  >
    <div
      class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
    >
      <a
        class="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
        href="/"
      >
        Gwendolin Anna
      </a>
      <button
        class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        on:click={setNavbarOpen}
      >
        <i class="text-white fas fa-bars" />
      </button>
    </div>
    <div
      class="lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none rounded shadow-lg {navbarOpen
        ? 'block'
        : 'hidden'}"
      id="example-navbar-warning"
    >
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fas fa-palette text-lg leading-lg mr-2"
            />
            Gallery
          </a>
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/about"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 text-lg leading-lg mr-2"
            />
            About
          </a>
        </li>
      </ul>
      <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
        <li class="flex items-center">
          <Menu />
        </li>
        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="/"
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-linkedin text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Share</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
            href="https://github.com/johnkegd/gwendolin/"
            target="_blank"
          >
            <i
              class="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg"
            />
            <span class="lg:hidden inline-block ml-2">Star</span>
          </a>
        </li>

        <li class="flex items-center">
          <a
            class="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
            type="button"
            href="/login"
          >
            <i class="fas fa-sign-in-alt" /> Sign in
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
