<script setup>
// No logic, just smoke and drama
</script>

<template>
    <section class="hero">
        <div class="hero-content">
            <h1 class="headline">The Future of Chess Is Peer to Peer</h1>
            <p class="tagline">
                Stake your tokens. Play real games. Win something that matters.
            </p>

            <div class="hero-buttons">
                <a href="/login" class="btn btn-orange">Sign In</a>
                <a href="/register" class="btn btn-outline-blue">Get Started</a>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@import '@/utils/theme.scss';

.hero {
    padding: 6rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle at center, #222 0%, transparent 60%);
        z-index: 0;
        opacity: 0.4;
        transform: rotate(25deg);
    }
}

.hero-content {
    position: relative;
    z-index: 1;
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
}

.headline {
    font-size: 2.75rem;
    font-weight: 700;
    color: var(--accent-baby-blue);
    line-height: 1.2;
}

.tagline {
    font-size: 1.2rem;
    color: var(--text-muted);
    max-width: 500px;
}

.hero-buttons {
    margin-top: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: var(--transition-fast);
    font-size: 1rem;
}
.btn-orange {
    background-color: var(--accent-orange);
    color: #0d0d0d;

    &:hover {
        background-color: darken(#ff914d, 5%);
    }
}
.btn-outline-blue {
    border: 1px solid var(--accent-baby-blue);
    color: var(--accent-baby-blue);
    background: transparent;

    &:hover {
        background: var(--accent-baby-blue);
        color: #0d0d0d;
    }
}
</style>
