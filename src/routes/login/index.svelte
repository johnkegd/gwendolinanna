<script>
  import Section from "../../components/Sections/Section.svelte";
  import SignOptions from "../../components/Forms/Parts/SignOptions.svelte";
  import SignButton from "../../components/Buttons/SignButton.svelte";
  import LoginForm from "../../components/Forms/LoginForm.svelte";
  import githubLogo from "../../node_modules/images/github.svg";
  import googleLogo from "../../node_modules/images/google.svg";
  import Nester from "../../components/Nester.svelte";
  import background from "../../node_modules/images/gwendi-art-default.png";
  import Fireworks from "../../components/GraphicArts/Fireworks.svelte";
</script>

<Section
  sectionStyles="relative w-full h-full py-40 min-h-screen"
  containerStyles="false"
>
  <!-- here will be an image as background or css -->
  <!--         <div class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full" style="background-image: url({background});"></div>
 -->

  <div
    class="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
  >
    <!--     <Fireworks/>
 -->
  </div>

  <Nester
    clsChildrens={[
      "container mx-auto px-4 h-full",
      "flex content-center items-center justify-center h-full",
    ]}
  >
    <div class="w-full lg:w-4/12 px-4" slot="floor-1">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
      >
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
          <LoginForm />
        </div>
        <div class="text-blueGray-400 text-center mb-3 font-bold">
          <small>Or sign in with</small>
        </div>
        <SignOptions styles="rounded-t mb-0 px-6 py-6">
          <span slot="buttons">
            <SignButton>
              <img alt="..." class="w-5 mr-1" src={githubLogo} />
              Github
            </SignButton>
            <SignButton>
              <img alt="..." class="w-5 mr-1" src={googleLogo} />
              Google
            </SignButton>
          </span>
        </SignOptions>
      </div>

      <div class="flex flex-wrap mt-6 relative">
        <div class="w-1/2">
          <a href="#pablo" class="text-blueGray-200">
            <small>Forgot password?</small>
          </a>
        </div>
        <div class="w-1/2 text-right">
          <a href="/auth/register" class="text-blueGray-200">
            <small>Create new account</small>
          </a>
        </div>
      </div>
    </div>
  </Nester>
</Section>
