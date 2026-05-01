<script setup lang="ts">
import LinkCard from './components/LinkCard.vue'
import { profile, links } from './data/links'
</script>

<template>
  <main class="page">
    <div class="container">
      <section class="profile">
        <img :src="profile.avatarUrl" :alt="profile.name" class="avatar" />
        <h1 class="name">{{ profile.name }}</h1>
        <p class="handle">{{ profile.handle }}</p>
        <p class="bio">{{ profile.bio }}</p>
      </section>

      <section class="links">
        <LinkCard v-for="link in links" :key="link.url" :link="link" />
      </section>
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

.handle {
  font-size: 0.9rem;
  color: #888;
  margin: 0;
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
</style>
