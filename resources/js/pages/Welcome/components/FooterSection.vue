<script setup>
// Not a single logic was given
const currentYear = new Date().getFullYear()
</script>

<template>
    <footer class="footer">
        <div class="footer-container">
            <p class="footer-title">ChessCyber</p>
            <p class="footer-text">Where rivalries become real.</p>
            <p class="footer-copy">&copy; {{ currentYear }} All rights reserved.</p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    padding: 3rem 1rem;
    background-color: var(--card-bg);
    border-top: 1px solid var(--border-light);
    color: var(--text-muted);
    text-align: center;
}

.footer-container {
    max-width: 800px;
    margin: 0 auto;
}

.footer-title {
    font-size: 1.5rem;
    color: var(--accent-baby-blue);
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.footer-text {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: var(--text-muted);
}

.footer-copy {
    font-size: 0.875rem;
    color: var(--text-muted);
}
</style>
