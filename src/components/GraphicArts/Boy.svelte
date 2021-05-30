<script>
  import StarsPattern from "../../node_modules/images/stars.svg";
</script>

<style>
    /** BOY */
    figure {
      --background: rgb(25, 31, 40, 17%);
      --border: rgba(0, 0, 0, 0.125);
      --eyes-mouth-bg: rgba(0, 0, 0, 0.5);
      --borderRadius: 0.125rem;
      --tshirt-neck-bg: 0;
      --bgColorS: 0%;
      --bgColorL: 98%;
      --fgColorH: 210;
      --fgColorS: 50%;
      --fgColorL: 38%;
      --skinH: 30;
      --skinS: 100%;
      --skinL: 87%;
      --hairL-bg: rgb(107, 47, 41);
      --hairR-bg: rgb(109, 36, 31);
      /*       background: hsl(var(--fgColorH), calc(var(--fgColorS) * 2), 95%); */
      border: 1px solid rgba(0, 0, 0, 0.0625);
      border-radius: 50%;
      height: 0;
      margin: auto auto;
      margin-bottom: 2rem;
      margin-top: 2rem;
      order: 1;
      padding-top: 60%;
      position: relative;
      width: 60%;
      overflow: hidden;
      background: var(--background);
      background-size: 100px;
    }
    figure div {
      position: absolute;
      transform: translate(-50%, -50%);
    }
    figure .skin {
      background: hsl(var(--skinH), var(--skinS), var(--skinL));
      box-shadow: inset 0 0 3rem
        hsl(var(--skinH), var(--skinS), calc(var(--skinL) * 0.95));
    }
    figure .head {
      top: 40%;
      left: 50%;
      width: 60%;
      height: 60%;
      border-radius: 100%;
      box-shadow: 0 -0.219rem 0 0.215rem var(--hairL-bg);
    }
    figure .ears {
      top: 47%;
      left: 50%;
      white-space: nowrap;
    }
    figure .ears::before,
    figure .ears::after {
      content: "";
      background: hsl(var(--skinH), var(--skinS), var(--skinL));
      border-radius: 50%;
      width: 1rem;
      height: 1rem;
      display: inline-block;
      margin: 0 2.9rem;
    }
    figure .head .eyes {
      top: 55%;
      left: 50%;
      white-space: nowrap;
    }
    figure .head .eyes::before,
    figure .head .eyes::after {
      content: "";
      background: var(--eyes-mouth-bg);
      border-radius: 50%;
      width: 10px;
      height: 10px;
      display: inline-block;
      margin: 0 0.5rem;
      -webkit-animation: blink 3s infinite;
      animation: blink 3s infinite;
      transition: all 0.15s;
    }
    figure .head .mouth {
      border: 0.125rem solid transparent;
      border-bottom: 0.125rem solid var(--eyes-mouth-bg);
      width: 25%;
      border-radius: 82%;
      transition: all 0.5s;
      top: 75%;
      left: 50%;
      height: 10%;
    }
    figure .hair {
      top: 40%;
      left: 50%;
      width: 66.66%;
      height: 66.66%;
      border-radius: 100%;
      overflow: hidden;
    }
    figure .hair::before {
      content: "";
      display: block;
      position: absolute;
      width: 109%;
      height: 97%;
      background: var(--hairL-bg);
      border-radius: 73%;
      top: -57%;
      left: -50%;
      box-shadow: 0rem 0 var(--hairR-bg);
    }
    figure .hair::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 97%;
      background: var(--hairL-bg);
      border-radius: 80%;
      top: -52.5%;
      left: 32%;
      box-shadow: 2rem 0 var(--hairR-bg);
    }
    figure .neck {
      width: 10%;
      height: 40%;
      top: 62%;
      left: 50%;
      background: hsl(var(--skinH), var(--skinS), calc(var(--skinL) * 0.94));
      border-radius: 0 0 2rem 2rem;
      box-shadow: 0 0.25rem var(--border);
    }
    figure .person-body {
      width: 60%;
      height: 100%;
      border-radius: 50%;
      background: red;
      left: 50%;
      top: 126%;
      background: hsl(var(--fgColorH), var(--fgColorS), var(--fgColorL));
    }
    figure .shirt-1,
    figure .shirt-2 {
      width: 12%;
      height: 7%;
      background: hsl(var(--tshirt-neck-bg), var(--bgColorS), var(--bgColorL));
      top: 76%;
      left: 36.5%;
      transform: skew(-10deg) rotate(15deg);
    }
    figure .shirt-2 {
      left: 52.5%;
      transform: skew(10deg) rotate(-15deg);
    }
  
    @-webkit-keyframes blink {
      0%,
      90%,
      100% {
        height: 10px;
      }
      95% {
        height: 0;
      }
    }
    @keyframes blink {
      0%,
      90%,
      100% {
        height: 10px;
      }
      95% {
        height: 0px;
      }
    }
  </style>
  

<figure style="background-image:url({StarsPattern});">
  <div class="person-body" />
  <div class="neck skin" />
  <div class="head skin">
    <div class="eyes" />
    <div class="mouth" id="mouth" />
  </div>
  <div class="hair" />
  <div class="ears" />
  <div class="shirt-1" />
  <div class="shirt-2" />
</figure>
