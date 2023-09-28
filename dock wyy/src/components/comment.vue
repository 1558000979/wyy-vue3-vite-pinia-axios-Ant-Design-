<script setup>

</script>

<template>
  <div style="padding: 0 30px">
    <a-textarea
        v-model:value="value2"
        :auto-size="{ minRows: 5, maxRows: 15 }"
        placeholder="Autosize height with minimum and maximum number of lines"
    />
  </div>
</template>

<style lang="less" scoped>

</style>
