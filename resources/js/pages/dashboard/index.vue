<script setup>
import { Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js';
</script>

<template>
    <div class="app-bg">
        <!-- Top bar -->
        <header class="sticky top-0 z-20 panel mx-auto max-w-7xl px-4">
            <div class="h-14 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="icon-btn">♟</div>
                    <span class="font-semibold">ChessCyber</span>
                </div>
                <!-- Profile dropdown (placeholder) -->
                <div class="relative">
                    <button class="icon-btn">U</button>
                </div>
            </div>
        </header>

        <!-- Content -->
        <main class="mx-auto mt-6 max-w-7xl px-4 space-y-6">
            <!-- Balances -->
            <div class="grid gap-4 sm:grid-cols-2">
                <div class="panel p-4">
                    <p class="text-sm text-brand-muted">Account Balance (KES)</p>
                    <p class="mt-1 text-2xl font-bold">Ksh 1,247.50</p>
                </div>
                <div class="panel p-4">
                    <p class="text-sm text-brand-muted">Chess Tokens</p>
                    <p class="mt-1 text-2xl font-bold">850</p>
                </div>
            </div>

            <!-- Quick actions -->
            <div class="grid gap-3 sm:grid-cols-3">
                <Link
                    :href="route('matches.index')"
                    class="btn btn-primary w-full text-center"
                >
                    New Challenge
                </Link>
                <Link
                    :href="route('matches.index')"
                    class="btn btn-ghost w-full text-center"
                >
                    Find Match
                </Link>
                <Link
                    :href="route('account.index')"
                    class="btn btn-ghost w-full text-center"
                >
                    Deposit / Buy Tokens
                </Link>
            </div>

            <!-- Recent matches -->
            <div class="panel p-4">
                <div class="flex items-center justify-between mb-3">
                    <h2 class="font-semibold">Recent Matches</h2>
                    <Link :href="route('matches.index')" class="text-sm text-brand-purple hover:underline">
                        View all
                    </Link>
                </div>

                <div class="space-y-3">
                    <div class="glass p-3 flex items-center justify-between">
                        <div>
                            <p class="font-medium">CyberMaster_42</p>
                            <p class="text-sm text-brand-muted">Blitz • 50 tokens</p>
                        </div>
                        <span class="text-xs text-brand-muted">2h ago</span>
                    </div>

                    <div class="glass p-3 flex items-center justify-between">
                        <div>
                            <p class="font-medium">QuantumKnight</p>
                            <p class="text-sm text-brand-muted">Rapid • 100 tokens</p>
                        </div>
                        <span class="badge badge-win">+WIN</span>
                    </div>
                </div>
            </div>
        </main>

        <!-- Bottom nav -->
        <nav class="sticky bottom-0 z-20 border-t border-brand-outline bg-brand-surface2">
            <div class="mx-auto max-w-7xl grid grid-cols-4">
                <Link
                    :href="route('dashboard')"
                    :class="['flex flex-col items-center gap-1 py-3 text-xs',
                   route().current('dashboard') ? 'text-brand-purple' : 'text-brand-muted']"
                >
                    🏠 <span>Dashboard</span>
                </Link>

                <Link
                    :href="route('matches.index')"
                    :class="['flex flex-col items-center gap-1 py-3 text-xs',
                   route().current('matches.*') ? 'text-brand-purple' : 'text-brand-muted']"
                >
                    ♟ <span>Matches</span>
                </Link>

                <Link
                    :href="route('account.index')"
                    :class="['flex flex-col items-center gap-1 py-3 text-xs',
                   route().current('account.*') ? 'text-brand-purple' : 'text-brand-muted']"
                >
                    💰 <span>Account</span>
                </Link>

                <Link
                    :href="route('notifications.index')"
                    :class="['flex flex-col items-center gap-1 py-3 text-xs',
                   route().current('notifications.*') ? 'text-brand-purple' : 'text-brand-muted']"
                >
                    🔔 <span>Notifications</span>
                </Link>
            </div>
        </nav>
    </div>
</template>
