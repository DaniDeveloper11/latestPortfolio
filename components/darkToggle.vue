<template>
    <Switch v-model="enabled"  @click="toggleDarkMode()"
    :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200',
     'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-hidden']">
      <span class="sr-only">Use setting</span>
      <span :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block size-5 transform rounded-full bg-white ring-0 shadow-sm transition duration-200 ease-in-out']">
        <span :class="[enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in', 'absolute inset-0 flex size-full items-center justify-center transition-opacity']" aria-hidden="true">
            <svg
   version="1.1"
   id="svg9246"
   xml:space="preserve"
   width="682.66669"
   height="682.66669"
   viewBox="0 0 682.66669 682.66669"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg"><defs
     id="defs9250"><clipPath
       clipPathUnits="userSpaceOnUse"
       id="clipPath9260"><path
         d="M 0,512 H 512 V 0 H 0 Z"
         id="path9258" /></clipPath></defs><g
     id="g9252"
     transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)"><g
       id="g9254"><g
         id="g9256"
         clip-path="url(#clipPath9260)"><g
           id="g9262"
           transform="translate(239.4331,454.7998)"><path
             d="m 0,0 c 0,-9.149 7.417,-16.566 16.567,-16.566 9.149,0 16.566,7.417 16.566,16.566 V 33.134 C 33.133,42.283 25.716,49.7 16.567,49.7 7.417,49.7 0,42.283 0,33.134 Z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9264" /></g><g
           id="g9266"
           transform="translate(239.4331,24.0664)"><path
             d="m 0,0 c 0,-9.149 7.417,-16.566 16.567,-16.566 9.149,0 16.566,7.417 16.566,16.566 V 33.134 C 33.133,42.283 25.716,49.7 16.567,49.7 7.417,49.7 0,42.283 0,33.134 Z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9268" /></g><g
           id="g9270"
           transform="translate(454.7998,272.5664)"><path
             d="m 0,0 c -9.149,0 -16.566,-7.417 -16.566,-16.566 0,-9.15 7.417,-16.567 16.566,-16.567 h 33.134 c 9.149,0 16.566,7.417 16.566,16.567 C 49.7,-7.417 42.283,0 33.134,0 Z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9272" /></g><g
           id="g9274"
           transform="translate(24.0669,272.5664)"><path
             d="m 0,0 c -9.15,0 -16.567,-7.417 -16.567,-16.566 0,-9.15 7.417,-16.567 16.567,-16.567 h 33.133 c 9.15,0 16.567,7.417 16.567,16.567 C 49.7,-7.417 42.283,0 33.133,0 Z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9276" /></g><g
           id="g9278"
           transform="translate(405.0996,256)"><path
             d="m 0,0 c 0,-82.346 -66.754,-149.1 -149.1,-149.1 -82.345,0 -149.1,66.754 -149.1,149.1 0,82.346 66.755,149.1 149.1,149.1 C -66.754,149.1 0,82.346 0,0"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9280" /></g><g
           id="g9282"
           transform="translate(384.8584,408.2871)"><path
             d="m 0,0 c -6.47,-6.47 -6.47,-16.959 0,-23.429 6.47,-6.469 16.959,-6.469 23.429,0 L 46.857,0 c 6.47,6.47 6.47,16.959 0,23.429 -6.469,6.469 -16.959,6.469 -23.428,0 z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9284" /></g><g
           id="g9286"
           transform="translate(80.2842,103.7129)"><path
             d="m 0,0 c -6.47,-6.47 -6.47,-16.959 0,-23.429 6.47,-6.469 16.959,-6.469 23.429,0 L 46.857,0 c 6.47,6.47 6.47,16.959 0,23.429 -6.469,6.469 -16.959,6.469 -23.428,0 z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9288" /></g><g
           id="g9290"
           transform="translate(408.2871,127.1416)"><path
             d="m 0,0 c -6.47,6.47 -16.959,6.47 -23.429,0 -6.469,-6.47 -6.469,-16.959 0,-23.429 L 0,-46.857 c 6.47,-6.47 16.959,-6.47 23.429,0 6.469,6.469 6.469,16.959 0,23.428 z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9292" /></g><g
           id="g9294"
           transform="translate(103.7129,431.7158)"><path
             d="m 0,0 c -6.47,6.47 -16.959,6.47 -23.429,0 -6.469,-6.47 -6.469,-16.959 0,-23.429 L 0,-46.857 c 6.47,-6.47 16.959,-6.47 23.429,0 6.469,6.469 6.469,16.959 0,23.428 z"
             style="fill:#ffd900;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9296" /></g><g
           id="g9298"
           transform="translate(256,405.1006)"><path
             d="m 0,0 c -3.87,0 -7.705,-0.148 -11.5,-0.437 76.972,-5.873 137.6,-70.187 137.6,-148.664 0,-78.476 -60.628,-142.791 -137.6,-148.663 3.795,-0.289 7.63,-0.437 11.5,-0.437 82.346,0 149.1,66.755 149.1,149.1 C 149.1,-66.755 82.346,0 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9300" /></g><g
           id="g9302"
           transform="translate(57.2002,272.5664)"><path
             d="m 0,0 h -23 c 9.149,0 16.566,-7.417 16.566,-16.566 0,-9.15 -7.417,-16.567 -16.566,-16.567 H 0 c 9.149,0 16.566,7.417 16.566,16.567 C 16.566,-7.417 9.149,0 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9304" /></g><g
           id="g9306"
           transform="translate(487.9336,272.5664)"><path
             d="m 0,0 h -23 c 9.149,0 16.566,-7.417 16.566,-16.566 0,-9.15 -7.417,-16.567 -16.566,-16.567 H 0 c 9.149,0 16.566,7.417 16.566,16.567 C 16.566,-7.417 9.149,0 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9308" /></g><g
           id="g9310"
           transform="translate(256,504.5)"><path
             d="m 0,0 c -4.471,0 -8.52,-1.778 -11.5,-4.657 3.119,-3.013 5.067,-7.231 5.067,-11.909 V -49.7 c 0,-4.679 -1.948,-8.897 -5.067,-11.909 2.98,-2.879 7.029,-4.658 11.5,-4.658 9.149,0 16.566,7.417 16.566,16.567 v 33.134 C 16.566,-7.417 9.149,0 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9312" /></g><g
           id="g9314"
           transform="translate(256,73.7666)"><path
             d="m 0,0 c -4.471,0 -8.52,-1.778 -11.5,-4.657 3.119,-3.013 5.067,-7.231 5.067,-11.909 V -49.7 c 0,-4.679 -1.948,-8.897 -5.067,-11.909 2.98,-2.879 7.029,-4.658 11.5,-4.658 9.149,0 16.566,7.417 16.566,16.567 v 33.134 C 16.566,-7.417 9.149,0 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9316" /></g><g
           id="g9318"
           transform="translate(431.7158,431.7158)"><path
             d="M 0,0 C -6.4,6.401 -16.729,6.458 -23.214,0.194 -23.145,0.127 -23.068,0.069 -23,0 c 6.47,-6.47 6.47,-16.959 0,-23.429 l -23.429,-23.428 c -0.068,-0.069 -0.144,-0.126 -0.214,-0.194 6.485,-6.264 16.814,-6.208 23.214,0.194 L 0,-23.429 C 6.47,-16.959 6.47,-6.47 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9320" /></g><g
           id="g9322"
           transform="translate(431.7158,103.7129)"><path
             d="m 0,0 -23.429,23.429 c -6.4,6.401 -16.729,6.458 -23.214,0.193 0.07,-0.066 0.146,-0.125 0.214,-0.193 L -23,0 c 6.47,-6.47 6.47,-16.959 0,-23.429 -0.068,-0.069 -0.145,-0.127 -0.214,-0.194 C -16.729,-29.887 -6.4,-29.83 0,-23.429 6.47,-16.959 6.47,-6.47 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9324" /></g><g
           id="g9326"
           transform="translate(127.1416,408.2871)"><path
             d="m 0,0 -23.429,23.429 c -6.393,6.393 -16.703,6.457 -23.189,0.217 0.078,-0.076 0.162,-0.14 0.239,-0.217 L -22.95,0 c 6.47,-6.47 6.47,-16.959 0,-23.429 -0.077,-0.077 -0.161,-0.14 -0.239,-0.216 6.485,-6.241 16.796,-6.176 23.189,0.216 C 6.47,-16.959 6.47,-6.47 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9328" /></g><g
           id="g9330"
           transform="translate(127.1416,127.1416)"><path
             d="m 0,0 c -6.393,6.393 -16.704,6.457 -23.189,0.216 0.078,-0.074 0.162,-0.139 0.239,-0.216 6.47,-6.47 6.47,-16.959 0,-23.429 l -23.429,-23.428 c -0.077,-0.078 -0.161,-0.142 -0.239,-0.217 6.486,-6.24 16.796,-6.177 23.189,0.217 L 0,-23.429 C 6.47,-16.959 6.47,-6.47 0,0"
             style="fill:#ffbb00;fill-opacity:1;fill-rule:nonzero;stroke:none"
             id="path9332" /></g><g
           id="g9334"
           transform="translate(239.4331,454.7998)"><path
             d="m 0,0 c 0,-9.149 7.417,-16.566 16.567,-16.566 9.149,0 16.566,7.417 16.566,16.566 V 33.134 C 33.133,42.283 25.716,49.7 16.567,49.7 7.417,49.7 0,42.283 0,33.134 Z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9336" /></g><g
           id="g9338"
           transform="translate(239.4331,24.0664)"><path
             d="m 0,0 c 0,-9.149 7.417,-16.566 16.567,-16.566 9.149,0 16.566,7.417 16.566,16.566 V 33.134 C 33.133,42.283 25.716,49.7 16.567,49.7 7.417,49.7 0,42.283 0,33.134 Z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9340" /></g><g
           id="g9342"
           transform="translate(454.7998,272.5664)"><path
             d="m 0,0 c -9.149,0 -16.566,-7.417 -16.566,-16.566 0,-9.15 7.417,-16.567 16.566,-16.567 h 33.134 c 9.149,0 16.566,7.417 16.566,16.567 C 49.7,-7.417 42.283,0 33.134,0 Z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9344" /></g><g
           id="g9346"
           transform="translate(24.0669,272.5664)"><path
             d="m 0,0 c -9.15,0 -16.567,-7.417 -16.567,-16.566 0,-9.15 7.417,-16.567 16.567,-16.567 h 33.133 c 9.15,0 16.567,7.417 16.567,16.567 C 49.7,-7.417 42.283,0 33.133,0 Z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9348" /></g><g
           id="g9350"
           transform="translate(161.1587,371.0527)"><path
             d="m 0,0 c 25.773,21.271 58.815,34.047 94.841,34.047 82.346,0 149.1,-66.754 149.1,-149.1 0,-82.345 -66.754,-149.099 -149.1,-149.099 -82.345,0 -149.1,66.754 -149.1,149.099 0,35.577 12.461,68.243 33.256,93.873"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9352" /></g><g
           id="g9354"
           transform="translate(384.8584,408.2871)"><path
             d="m 0,0 c -6.47,-6.47 -6.47,-16.959 0,-23.429 6.47,-6.469 16.959,-6.469 23.429,0 L 46.857,0 c 6.47,6.47 6.47,16.959 0,23.429 -6.469,6.469 -16.959,6.469 -23.428,0 z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9356" /></g><g
           id="g9358"
           transform="translate(80.2842,103.7129)"><path
             d="m 0,0 c -6.47,-6.47 -6.47,-16.959 0,-23.429 6.47,-6.469 16.959,-6.469 23.429,0 L 46.857,0 c 6.47,6.47 6.47,16.959 0,23.429 -6.469,6.469 -16.959,6.469 -23.428,0 z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9360" /></g><g
           id="g9362"
           transform="translate(408.2871,127.1416)"><path
             d="m 0,0 c -6.47,6.47 -16.959,6.47 -23.429,0 -6.469,-6.47 -6.469,-16.959 0,-23.429 L 0,-46.857 c 6.47,-6.47 16.959,-6.47 23.429,0 6.469,6.469 6.469,16.959 0,23.428 z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9364" /></g><g
           id="g9366"
           transform="translate(103.7129,431.7158)"><path
             d="m 0,0 c -6.47,6.47 -16.959,6.47 -23.429,0 -6.469,-6.47 -6.469,-16.959 0,-23.429 L 0,-46.857 c 6.47,-6.47 16.959,-6.47 23.429,0 6.469,6.469 6.469,16.959 0,23.428 z"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9368" /></g><g
           id="g9370"
           transform="translate(179.9243,439.6592)"><path
             d="M 0,0 -6.34,15.306"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9372" /></g><g
           id="g9374"
           transform="translate(338.4189,57.0186)"><path
             d="M 0,0 -6.34,15.306"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9376" /></g><g
           id="g9378"
           transform="translate(72.3462,332.0576)"><path
             d="M 0,0 -15.306,6.34"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9380" /></g><g
           id="g9382"
           transform="translate(454.9863,173.5625)"><path
             d="M 0,0 -15.306,6.34"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9384" /></g><g
           id="g9386"
           transform="translate(72.3628,179.9023)"><path
             d="M 0,0 -15.306,-6.34"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9388" /></g><g
           id="g9390"
           transform="translate(455.0029,338.3975)"><path
             d="M 0,0 -15.306,-6.34"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9392" /></g><g
           id="g9394"
           transform="translate(179.9639,72.3242)"><path
             d="M 0,0 -6.34,-15.306"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9396" /></g><g
           id="g9398"
           transform="translate(338.459,454.9648)"><path
             d="M 0,0 -6.34,-15.306"
             style="fill:none;stroke:#000000;stroke-width:15;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
             id="path9400" /></g></g></g></g></svg>
        </span>
        <span :class="[enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out', 'absolute inset-0 flex size-full items-center justify-center transition-opacity']" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="512" height="512" x="0" y="0" viewBox="0 0 100 100" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,0.0004682540893412579,100.00000381469728)"><linearGradient id="a" x1="-4.98" x2="86.622" y1="11.52" y2="103.454" gradientUnits="userSpaceOnUse"><stop offset=".184" stop-color="#29abe2"></stop><stop offset=".821" stop-color="#6200d2"></stop></linearGradient><path fill="url(#a)" d="M2.5 48.423c-.004 27.1 21.961 49.073 49.062 49.077 20.318.003 38.536-12.516 45.818-31.485a1.684 1.684 0 0 0-2.189-2.189 45.152 45.152 0 0 1-16.37 3.037c-25.22-.028-45.656-20.465-45.684-45.684a45.151 45.151 0 0 1 3.037-16.37 1.684 1.684 0 0 0-2.189-2.189A49.316 49.316 0 0 0 2.5 48.423z" opacity="1" data-original="url(#a)" class=""></path></g></svg>
        </span>
      </span>
    </Switch>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Switch } from '@headlessui/vue'
  import { TransitionRoot } from '@headlessui/vue'
  
  const enabled = ref(false)
  import { useColorMode } from '@vueuse/core'

    const colorMode = useColorMode();
    const toggleDarkMode = () => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
    console.log(colorMode.value)
}

  </script>