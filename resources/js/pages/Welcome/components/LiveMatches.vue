<script setup>
const matches = [
    { user1: 'KnightKiller', user2: 'RookQueen', stake: 20, status: 'In Progress' },
    { user1: 'PawnStorm', user2: 'Checkmatic', stake: 50, status: 'Completed' },
    { user1: 'QueenTrap', user2: 'DarkHorse', stake: 10, status: 'In Progress' },
    { user1: 'BlunderBeast', user2: 'GMwannabe', stake: 100, status: 'Completed' },
]
</script>

<template>
    <section class="live-matches">
        <h2 class="section-title">Live Matches</h2>
        <div class="matches-grid">
            <div v-for="(match, index) in matches" :key="index" class="match-card" :class="match.status.toLowerCase()">
                <div class="players">
                    <span class="user">{{ match.user1 }}</span>
                    <span class="vs">vs</span>
                    <span class="user">{{ match.user2 }}</span>
                </div>
                <div class="details">
                    <span class="stake">{{ match.stake }} Tokens</span>
                    <span class="status">{{ match.status }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.live-matches {
    padding: 4rem 2rem;
    background-color: var(--bg-main);
}

.section-title {
    text-align: center;
    font-size: 2rem;
    color: var(--accent-red);
    margin-bottom: 2rem;
}

.matches-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
}

.match-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;

    &.in\ progress {
        border-color: var(--accent-baby-blue);
    }

    &.completed {
        border-color: var(--accent-green);
        opacity: 0.85;
    }
}

.players {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
    font-weight: 600;
    font-size: 1.1rem;

    .user {
        color: var(--accent-orange);
    }

    .vs {
        color: var(--text-muted);
    }
}

.details {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-top: 0.5rem;

    .stake {
        font-weight: bold;
        color: var(--accent-lime);
    }

    .status {
        text-transform: uppercase;
    }
}
</style>
