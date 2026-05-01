<script setup lang="ts">
import {ref, computed} from 'vue';
import type {Block, ListItem} from '../data/intro';

const props = defineProps<{
  blocks: Block[];
  collapseAfter?: number;
}>();

const expanded = ref(false);

const visibleBlocks = computed(() =>
  props.collapseAfter !== undefined && !expanded.value
    ? props.blocks.slice(0, props.collapseAfter)
    : props.blocks,
);

const collapsible = computed(() =>
  props.collapseAfter !== undefined && props.blocks.length > props.collapseAfter,
);

function itemText(item: ListItem): string {
  return typeof item === 'string' ? item : item.text;
}

function itemChildren(item: ListItem): string[] {
  return typeof item === 'string' ? [] : item.children;
}
</script>

<template>
  <div class="text-block">
    <template v-for="(block, i) in visibleBlocks" :key="i">
      <h1 v-if="block.type === 'heading' && block.level === 1" class="h1">{{ block.text }}</h1>
      <h2 v-else-if="block.type === 'heading' && block.level === 2" class="h2">{{ block.text }}</h2>
      <h3 v-else-if="block.type === 'heading' && block.level === 3" class="h3">{{ block.text }}</h3>
      <ul v-else-if="block.type === 'list'" class="list">
        <li v-for="item in block.items" :key="itemText(item)">
          {{ itemText(item) }}
          <ul v-if="itemChildren(item).length" class="sublist">
            <li v-for="child in itemChildren(item)" :key="child">{{ child }}</li>
          </ul>
        </li>
      </ul>
      <p v-else-if="block.type === 'paragraph'" class="paragraph">{{ block.text }}</p>
    </template>

    <button v-if="collapsible" class="toggle" @click="expanded = !expanded">
      {{ expanded ? '折りたたむ ∧' : 'もっと見る ∨' }}
    </button>
  </div>
</template>

<style scoped>
.text-block {
  background: #fff;
  border-radius: 14px;
  padding: 20px 22px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.h1, .h2, .h3, .paragraph, .list {
  margin: 0;
}

.h1 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111;
}

.h2 {
  font-size: 1rem;
  font-weight: 700;
  color: #333;
}

.h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #555;
}

.paragraph {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.6;
}

.list {
  font-size: 0.9rem;
  color: #444;
  line-height: 1.8;
  padding-left: 1.4em;
  margin: 0;
}

.sublist {
  padding-left: 1.4em;
  margin: 0;
  line-height: 1.8;
}

.toggle {
  align-self: center;
  background: none;
  border: none;
  color: #888;
  font-size: 0.82rem;
  cursor: pointer;
  padding: 2px 8px;
  border-radius: 999px;
  transition: background 0.15s;
}

.toggle:hover {
  background: #f3f3f3;
}
</style>
