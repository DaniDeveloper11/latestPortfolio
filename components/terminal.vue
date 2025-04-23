<template>
  <div class="container">
    <!-- Barra Superior de la Terminal -->
    <div class="terminal_toolbar">
      <div class="butt">
        <button class="btn btn-color"></button>
        <button class="btn"></button>
        <button class="btn"></button>
      </div>
      <p class="user">danielMV@admin: ~</p>
      <div class="add_tab">+</div>
    </div>

    <!-- Cuerpo de la Terminal -->
    <div class="terminal_body">
      <div v-for="(msg, index) in messages" :key="index" class="terminal_message">
        <span class="terminal_user" v-if="msg.showUser">danielMV@admin:</span>
        <span class="terminal_location" v-if="msg.showUser">~</span>
        <span class="terminal_bling">$ {{ msg.text }}</span>
      </div>

      <!-- Simulación de tipeo del comando principal -->
      <div v-if="isTyping" class="terminal_promt">
        <span class="terminal_user">danielMV@admin:</span>
        <span class="terminal_location">~</span>
        <span class="terminal_bling">$ {{ typedCommand }}</span>
        <span class="terminal_cursor"></span>
      </div>

      <!-- Simulación de tipeo del comando "clear" -->
      <div v-if="isTypingClear" class="terminal_promt">
        <span class="terminal_user">danielMV@admin:</span>
        <span class="terminal_location">~</span>
        <span class="terminal_bling">$ {{ clearCommandTyped }}</span>
        <span class="terminal_cursor"></span>
      </div>

      <!-- Barra de carga -->
      <div v-if="isInstalling" class="loading-bar">
        <div class="progress" :style="{ width: progress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useColorMode } from '@vueuse/core';

const packageName = ref("color-package");
const fullCommand = ref(`npm install ${packageName.value}`);
const typedCommand = ref("");
const clearCommandTyped = ref(""); // Para animar "clear"
const messages = ref([]);
const progress = ref(0);
const isInstalling = ref(false);
const isTyping = ref(true);
const isTypingClear = ref(false);
const colorMode = useColorMode();

onMounted(() => {
  setTimeout(() => {
   startFlow();

  },3000)
});

// **Inicia el flujo completo de la terminal**
function startFlow() {
  resetTerminal(() => {
    typeCommand();
  });
}

// **Simula la escritura del comando `npm install ...`**
function typeCommand() {
  let index = 0;
  typedCommand.value = "";

  const interval = setInterval(() => {
    if (index < fullCommand.value.length) {
      typedCommand.value += fullCommand.value[index];
      index++;
    } else {
      clearInterval(interval);
      isTyping.value = false;
      messages.value.push({ text: typedCommand.value, showUser: true });
      typedCommand.value = "";
      setTimeout(() => startInstallation(), 500);
    }
  }, 100);
}

// **Simula la instalación del paquete**
function startInstallation() {
  messages.value.push({ text: "⏳ Instalando paquetes...", showUser: false });
  isInstalling.value = true;
  let percent = 0;

  const interval = setInterval(() => {
    percent += 20;
    progress.value = percent;
    messages.value.push({ text: `Descargando... ${percent}%`, showUser: false });

    if (percent >= 100) {
      clearInterval(interval);
      messages.value.push({ text: "Instalación completa.", showUser: false });
      isInstalling.value = false;
      setTimeout(() => {
        toggleTheme();
      }, 1000);
    }
  }, 2000);
}

// **Cambia el tema al finalizar la instalación**
function toggleTheme() {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  messages.value.push({ text: `Tema cambiado a ${colorMode.value.toUpperCase()}!`, showUser: false });

  // **Esperar 3 segundos y escribir `clear`**
  setTimeout(() => {
    typeClearCommand();
  }, 3000);
}

// **Escribe `clear` lentamente antes de limpiar la terminal**
function typeClearCommand() {
  isTypingClear.value = true;
  clearCommandTyped.value = "$ "; // Reiniciar con `$ `
  let clearCommand = "clear";
  let index = 0;

  const interval = setInterval(() => {
    if (index < clearCommand.length) {
      clearCommandTyped.value += clearCommand[index];
      index++;
    } else {
      clearInterval(interval);
      isTypingClear.value = false;

      // **Agregar `clear` como un mensaje en la terminal**
      messages.value.push({ text: clearCommandTyped.value, showUser: true });

      // **Simular "Enter" después de 1 segundo**
      setTimeout(() => {
        messages.value.push({ text: "", showUser: true }); // Nueva línea vacía
        setTimeout(() => {
          resetTerminal(() => startFlow());
        }, 1000);
      }, 1000);
    }
  }, 100); // Velocidad de escritura
}

// **Limpia la terminal antes de reiniciar**
function resetTerminal(callback) {
  typedCommand.value = "";
  clearCommandTyped.value = "";
  messages.value = [];
  progress.value = 0;
  isInstalling.value = false;
  isTyping.value = true;
  isTypingClear.value = false;

  setTimeout(() => {
    if (callback) callback();
  }, 500);
}
</script>

<style>
/* Terminal */
.container {
  width: 430px;
  height: 300px; /* Aumentado para evitar problemas de scroll */
  background: black;
  border-radius: 5px;
  color: white;
  font-family: monospace;
  overflow: hidden;
}

.terminal_toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 0 10px;
  background: #212121;
}

.terminal_body {
  padding: 10px;
  font-size: 14px;
  height: 260px; /* Ajustado para dar más espacio */
  overflow-y: auto;
}

/* Cursor parpadeante */
.terminal_cursor {
  display: inline-block;
  width: 6px;
  height: 12px;
  background: white;
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Barra de carga */
.loading-bar {
  width: 95%;
  height: 5px;
  background: #444;
  margin-top: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.progress {
  height: 100%;
  background: #00ff00;
  transition: width 1s ease-in-out;
}
</style>
