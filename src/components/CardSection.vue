<script setup lang="ts">
defineProps<{title: string}>();
</script>

<template>
  <section class="card-section">
    <h2 class="section-title">{{ title }}</h2>
    <div class="card-list">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.card-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #aaa;
  margin: 0;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
