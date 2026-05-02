<script setup lang="ts">
import type {LinkItem} from '../data/links';

defineProps<{link: LinkItem}>();
</script>

<template>
  <a :href="link.url" target="_blank" rel="noopener noreferrer" class="link-card">
    <span class="link-icon" :style="{ color: link.color }" v-html="link.icon" />
    <span class="link-label">{{ link.label }}</span>
    <span class="link-arrow">→</span>
  </a>
</template>

<style scoped>
.link-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 1rem;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

.link-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.13);
}

.link-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.link-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.link-label {
  flex: 1;
}

.link-arrow {
  color: #aaa;
  font-size: 1.1rem;
}
</style>
