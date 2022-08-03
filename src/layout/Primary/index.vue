<template>主要布局</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
defineOptions({
  name: 'PrimaryLayout'
});

onMounted(() => {
  console.log('this is primary layout');
});
</script>
<style scoped lang="scss" src="./primary.scss" />
