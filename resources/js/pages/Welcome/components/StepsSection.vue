<script setup>
const steps = [
    {
        title: 'Challenge',
        description: 'Create or accept challenges, select token amount and game type.',
        number: 1,
    },
    {
        title: 'Play',
        description: 'Game is played on chess.com. We track the result automatically.',
        number: 2,
    },
    {
        title: 'Get Paid',
        description: 'Winner gets the tokens. Escrow handles the rest.',
        number: 3,
    },
]
</script>

<template>
    <section class="steps">
        <h2 class="steps-title">How It Works</h2>
        <div class="steps-flow">
            <div class="step" v-for="step in steps" :key="step.number">
                <div class="step-circle">{{ step.number }}</div>
                <div class="step-texts">
                    <h3 class="step-title">{{ step.title }}</h3>
                    <p class="step-description">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.steps {
    padding: 4rem 2rem;
    background-color: var(--bg-main);
}

.steps-title {
    text-align: center;
    font-size: 2rem;
    color: var(--accent-orange);
    margin-bottom: 3rem;
}

.steps-flow {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 900px;
    margin: 0 auto;
    gap: 2rem;
}

.step {
    flex: 1;
    min-width: 250px;
    text-align: center;
    padding: 1rem;
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    background-color: var(--card-bg);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.02);
        border-color: var(--accent-lime);
    }
}

.step-circle {
    width: 3rem;
    height: 3rem;
    background-color: var(--accent-red);
    color: #0d0d0d;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin: 0 auto 1rem auto;
    font-size: 1.25rem;
}

.step-title {
    font-size: 1.25rem;
    color: var(--accent-baby-blue);
    margin-bottom: 0.5rem;
}

.step-description {
    color: var(--text-muted);
    font-size: 0.95rem;
}
</style>
