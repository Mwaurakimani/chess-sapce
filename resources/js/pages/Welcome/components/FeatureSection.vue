<script setup>
const features = [
    {
        title: 'Stake Tokens',
        description: 'Put your tokens on the line. Every move counts when there’s something to win.',
        icon: '🎯',
    },
    {
        title: 'Challenge Anyone',
        description: 'Send or accept challenges and play on your preferred platform.',
        icon: '⚔️',
    },
    {
        title: 'Automated Tracking',
        description: 'We verify match outcomes and update your record instantly.',
        icon: '🧠',
    },
    {
        title: 'Win Real Rewards',
        description: 'Victory isn’t just a flex — it’s money, tokens, and reputation.',
        icon: '💰',
    },
]
</script>

<template>
    <section class="features">
        <h2 class="features-title">What Makes ChessCyber Different?</h2>

        <div class="feature-grid">
            <div class="feature-card" v-for="(feature, index) in features" :key="index">
                <div class="feature-icon">{{ feature.icon }}</div>
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-desc">{{ feature.description }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.features {
    padding: 4rem 2rem;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border-light);
}

.features-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: var(--accent-lime);
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.feature-card {
    background-color: var(--bg-main);
    border: 1px solid var(--border-light);
    padding: 2rem;
    border-radius: var(--radius-md);
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: var(--accent-baby-blue);
    }
}

.feature-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--accent-green);
    margin-bottom: 0.5rem;
}

.feature-desc {
    font-size: 0.95rem;
    color: var(--text-muted);
}
</style>
