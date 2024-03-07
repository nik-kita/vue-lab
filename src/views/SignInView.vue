<script
  setup
  lang="ts"
>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

function submit(event: Event) {
  const ev = event as SubmitEvent;
  alert(ev.target)
}

</script>

<template>
  <div class="root">
    <form
      @submit.prevent="submit"
      class="form"
    >
      <input
        v-model="email"
        type="text"
        placeholder="Email"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <button
        class="px-2"
        type="submit"
      >Sign In</button>
    </form>
  </div>
</template>

<style>
@layer sign-in-view;

.root {
  height: 100%;
  width: 100%;
  gap: 2rem;
  display: grid;
  grid-template:
    "header" 1fr
    "content" 10fr
    "footer" 5fr
    / 1fr;
}

.form {
  gap: 1rem;
  grid-area: content;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>