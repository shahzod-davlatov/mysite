<script setup lang="ts">
const formState = useFormState();
</script>

<template>
  <div class="grid w-3/4 auto-rows-min grid-cols-code gap-x-10 pt-28 text-body">
    <span
      v-for="number in 12"
      :key="number"
      class="col-start-1 justify-self-end text-secondary"
    >
      {{ number }}
    </span>
    <p class="col-start-2 row-start-1 text-secondary">
      <span class="text-accent-purple">const </span>
      <span class="text-accent-code">button</span>
      <span class="text-accent-purple"> = </span>
      <span class="text-accent-code">document</span>
      <span>.</span>
      <span class="text-accent-code">querySelector</span>
      <span>(</span>
      <span class="text-accent">'#sendButton'</span>
      <span>);</span>
    </p>
    <p class="col-start-2 row-start-3 text-accent-purple">
      <span>const </span>
      <span class="text-accent-code">message</span>
      <span> = </span>
      <span class="text-secondary">{</span>
    </p>
    <p class="col-start-2 row-start-4 text-secondary">
      <span class="text-accent-code">&nbsp;name</span>
      <span>: </span>
      <span class="text-accent">"{{ formState.name }}"</span>
      <span>,</span>
    </p>
    <p class="col-start-2 row-start-5 text-secondary">
      <span class="text-accent-code">&nbsp;email</span>
      <span>: </span>
      <span class="text-accent">"{{ formState.email }}"</span>
      <span>,</span>
    </p>
    <p class="col-start-2 row-start-6 text-secondary">
      <span class="text-accent-code">&nbsp;message</span>
      <span>: </span>
      <span class="text-accent">"{{ formState.message }}"</span>
      <span>,</span>
    </p>
    <p class="col-start-2 row-start-7 text-secondary">
      <span class="text-accent-code">&nbsp;date</span>
      <span>: </span>
      <span class="text-accent">"Thu 21 Apr"</span>
      <span>,</span>
    </p>
    <p class="col-start-2 row-start-8 text-secondary">
      <span>}</span>
    </p>
    <p class="col-start-2 row-start-10 text-secondary">
      <span class="text-accent-code">button</span>
      <span>.</span>
      <span class="text-accent-code">addEventListener</span>
      <span>(</span>
      <span class="text-accent">'click'</span>
      <span>, </span>
      <span>()</span>
      <span class="text-accent-purple"> => </span>
      <span>{</span>
    </p>
    <p class="col-start-2 row-start-11 text-secondary">
      <span class="text-accent-code">&nbsp;form</span>
      <span>.</span>
      <span class="text-accent-code">send</span>
      <span>(</span>
      <span class="text-accent-code">message</span>
      <span>);</span>
    </p>
    <p class="col-start-2 row-start-12 text-secondary">
      <span>})</span>
    </p>
  </div>
</template>
