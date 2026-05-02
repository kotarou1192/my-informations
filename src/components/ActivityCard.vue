<script setup lang="ts">
import type {Activity} from '../data/activities';
import {trackClick} from '../composables/useTracking';

defineProps<{activity: Activity}>();
</script>

<template>
  <component
    :is="activity.url ? 'a' : 'div'"
    v-bind="
      activity.url
        ? {href: activity.url, target: '_blank', rel: 'noopener noreferrer'}
        : {}
    "
    class="activity-card"
    @click="activity.url && trackClick(activity.title, activity.url)"
  >
    <div class="activity-meta">
      <span class="activity-label">{{ activity.label }}</span>
      <span class="activity-date">{{ activity.date }}</span>
    </div>
    <p class="activity-title">{{ activity.title }}</p>
  </component>
</template>

<style scoped>
.activity-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 14px 16px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease;
}

a.activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.11);
}

.activity-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.activity-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #6c63ff;
  background: #f0eeff;
  padding: 2px 8px;
  border-radius: 999px;
}

.activity-date {
  font-size: 0.78rem;
  color: #aaa;
}

.activity-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: #222;
  margin: 0;
  line-height: 1.4;
}
</style>
