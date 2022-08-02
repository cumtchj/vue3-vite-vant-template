<template>
  <hello-world msg='abc' />
  <br/>
  <PrimaryLayout />
</template>

<script lang='ts' setup>
import HelloWorld from '@components/HelloWorld.vue';
import PrimaryLayout from '@layout/Primary/index.vue';

console.log(import.meta.env);
</script>
