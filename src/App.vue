<script setup lang="ts">
import { ref } from 'vue';
import LinkCard from './components/LinkCard.vue';
import CardSection from './components/CardSection.vue';
import ActivityCard from './components/ActivityCard.vue';
import TextBlock from './components/TextBlock.vue';
import {profile, links} from './data/links';
import {activities} from './data/activities';
import {intro} from './data/intro';

const showContact = ref(false);
const copied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText(profile.email);
  copied.value = true;
  setTimeout(() => { copied.value = false; }, 2000);
}
</script>

<template>
  <main class="page">
    <div class="container">
      <section class="profile">
        <img :src="profile.avatarUrl" :alt="profile.name" class="avatar" />
        <h1 class="name">{{ profile.name }}</h1>
        <div class="contact-wrapper">
          <button class="contact-btn" @click="showContact = !showContact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Contact Me
          </button>
          <Transition name="slide-down">
            <div v-if="showContact" class="contact-card">
              <a :href="`mailto:${profile.email}`" class="contact-email">{{ profile.email }}</a>
              <button class="copy-btn" :class="{ copied }" @click="copyEmail">
                <svg v-if="!copied" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="copy-icon"><polyline points="20 6 9 17 4 12"/></svg>
                {{ copied ? 'Copied!' : 'Copy' }}
              </button>
            </div>
          </Transition>
        </div>
        <p class="bio">{{ profile.bio }}</p>
      </section>

      <TextBlock :blocks="intro" :collapse-after="4" />

      <section class="links">
        <LinkCard v-for="link in links" :key="link.url" :link="link" />
      </section>

      <CardSection title="Activities">
        <ActivityCard
          v-for="activity in activities"
          :key="activity.title"
          :activity="activity"
        />
      </CardSection>
    </div>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 48px 16px;
}

.container {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.contact-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #6c63ff;
  background: rgba(108, 99, 255, 0.08);
  border: 1.5px solid rgba(108, 99, 255, 0.3);
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.15s, border-color 0.15s;
}

.contact-btn:hover {
  background: rgba(108, 99, 255, 0.15);
  border-color: rgba(108, 99, 255, 0.5);
}

.contact-icon {
  width: 14px;
  height: 14px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  background: #fff;
  border: 1.5px solid rgba(108, 99, 255, 0.2);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(108, 99, 255, 0.1);
}

.contact-email {
  font-size: 0.88rem;
  color: #6c63ff;
  font-family: monospace;
  letter-spacing: 0.01em;
  text-decoration: none;
}

.contact-email:hover {
  text-decoration: underline;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  font-size: 0.78rem;
  font-weight: 500;
  color: #6c63ff;
  background: rgba(108, 99, 255, 0.08);
  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.15s, color 0.15s;
  flex-shrink: 0;
}

.copy-btn:hover {
  background: rgba(108, 99, 255, 0.15);
}

.copy-btn.copied {
  color: #16a34a;
  background: rgba(22, 163, 74, 0.08);
  border-color: rgba(22, 163, 74, 0.25);
}

.copy-icon {
  width: 12px;
  height: 12px;
}

.bio {
  font-size: 0.95rem;
  color: #555;
  margin: 4px 0 0;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
