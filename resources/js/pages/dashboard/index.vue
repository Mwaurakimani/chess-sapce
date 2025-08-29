<script setup>
const user = {
    name: 'KnightKiller',
    balance: 150,
    tokens: 38,
}
</script>

<template>
    <div class="dashboard-wrapper">
        <h1 class="welcome-text">Welcome back, {{ user.name }} 👋</h1>

        <div class="stats-grid">
            <div class="stat-card">
                <p class="label">Account Balance</p>
                <p class="value">${{ user.balance }}</p>
            </div>
            <div class="stat-card">
                <p class="label">Tokens</p>
                <p class="value">{{ user.tokens }}</p>
            </div>
        </div>

        <div class="quick-actions">
            <RouterLink to="/dashboard/matches" class="action-btn">View Matches</RouterLink>
            <RouterLink to="/dashboard/wallet" class="action-btn">Manage Wallet</RouterLink>
            <RouterLink to="/dashboard/profile" class="action-btn">Edit Profile</RouterLink>
        </div>
    </div>
</template>

<style scoped lang="scss">
.dashboard-wrapper {
    padding: 2rem;
}

.welcome-text {
    font-size: 1.75rem;
    font-weight: 600;
    color: var(--accent-green);
    margin-bottom: 2rem;
}

.stats-grid {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.stat-card {
    background: var(--card-bg);
    border: 1px solid var(--border-light);
    padding: 1.5rem;
    border-radius: var(--radius-md);
    min-width: 200px;
    flex: 1;

    .label {
        color: var(--text-muted);
        font-size: 0.9rem;
        margin-bottom: 0.25rem;
    }

    .value {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--accent-lime);
    }
}

.quick-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.action-btn {
    padding: 0.75rem 1.5rem;
    background-color: var(--accent-orange);
    color: #0d0d0d;
    border-radius: var(--radius-md);
    font-weight: 600;
    transition: var(--transition-fast);

    &
