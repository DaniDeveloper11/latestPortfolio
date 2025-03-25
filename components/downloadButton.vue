<style scoped>
  .download-btn {
    height: 45px;
    width: 95px;
    cursor: pointer;
    background: white;
    border: none;
    background: #8080ff;
    border-radius: 30px;
    overflow: hidden;
  }

  .button-content {
    transform: translateY(-45px);
    transition: all 250ms ease-in-out;
  }

  .svg-container,
  .text-container {
    height: 45px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-container .text {
    font-size: 13px;
    color: #fff;
    font-weight: 600;
    opacity: 1;
    transition: opacity ease-in-out 250ms;
  }

  .download-icon {
    height: 25px;
    width: 25px;
    fill: #fff;
    opacity: 0;
    transition: opacity ease-in-out 250ms;
  }

  /* hover state for the button */
  .download-btn:hover .button-content {
    transform: translateY(0px);
  }

  .download-btn:hover .text {
    opacity: 0;
  }

  .download-btn:hover .download-icon {
    opacity: 1;
  }

  .download-btn:focus .download-icon {
    -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
    animation: heartbeat 1.5s ease-in-out infinite both;
  }

  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  

  /* hover state for the button */
</style>
<template>
    <a
      href="https://drive.google.com/uc?export=download&id=1Tw9oNwLl45yYpONDOq1lj_3AMyOyU3cF"
      rel="noopener noreferrer"
      download
      @click="triggerDownload"
      class="hidden md:block"
    >
      <button
        class="download-btn pixel-corners"
        :style="{ backgroundColor: isDownloaded ? '#4CAF50' : '#8080ff' }"
      >
        <div class="button-content">
          <div class="svg-container">
            <svg
              v-if="!isDownloaded"
              class="download-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479 6.908l-4-4h3v-4h2v4h3l-4 4z"
                fill="#fff"
              />
            </svg>
            <svg
              v-else
              class="download-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20 8l-1.4-1.4z"
                fill="#fff"
              />
            </svg>
          </div>
          <div class="text-container">
            <div class="text">
              {{ isDownloaded ? "Downloaded!" : "Download CV" }}
            </div>
          </div>
        </div>
      </button>
    </a>
  </template>
  
<script setup>
import { ref } from 'vue'

const isDownloaded = ref(false)

function triggerDownload() {
  isDownloaded.value = true
  setTimeout(() => {
    isDownloaded.value = false
  }, 2000)
}
</script>
