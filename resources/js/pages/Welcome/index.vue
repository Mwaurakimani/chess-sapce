<script setup>
import HeroSection from './components/HeroSection.vue'
import FeatureSection from './components/FeatureSection.vue'
import StepsSection from './components/StepsSection.vue'
import LiveMatches from './components/LiveMatches.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
    <div class="welcome-page">
        <HeroSection />
        <FeatureSection />
        <StepsSection />
        <LiveMatches />
        <FooterSection />
    </div>
</template>

<style scoped lang="scss">
.welcome-page {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    background-color: var(--bg-main);
    color: var(--text-main);
}
</style>
