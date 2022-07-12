<script setup lang="ts">
import { ref } from 'vue'
const msg = ref<string>('hello world')

const setMsg = () => {
    msg.value = 'hello R_h_zero'
}
</script>

<template>
    <div id="xx" class="xxx">{{ msg }}</div>
    <button v-if="msg === ''" @click="setMsg">setMsg</button>
</template>

<style scoped lang="scss">
.content {
    background-color: pink;
}
</style>
