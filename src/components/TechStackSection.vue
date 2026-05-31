<script setup lang="ts">
import CardSection from './CardSection.vue';
import type { TechGroup } from '../data/techstack';

defineProps<{ groups: TechGroup[] }>();
</script>

<template>
  <CardSection title="Tech Stack">
    <div class="tech-group" v-for="group in groups" :key="group.label">
      <span class="group-label">{{ group.label }}</span>
      <div class="tag-list">
        <span class="tag" v-for="item in group.items" :key="item">{{ item }}</span>
      </div>
    </div>
  </CardSection>
</template>

<style scoped>
.tech-group {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.group-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #bbb;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  min-width: 90px;
  flex-shrink: 0;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  display: inline-block;
  padding: 3px 10px;
  font-size: 0.82rem;
  color: #5b51f0;
  background: rgba(108, 99, 255, 0.08);
  border: 1px solid rgba(108, 99, 255, 0.2);
  border-radius: 999px;
}
</style>
