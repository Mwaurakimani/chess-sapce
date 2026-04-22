<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Link } from '@inertiajs/vue3'
import { route } from 'ziggy-js';

// simple dropdown state
const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = (e) => {
    if (!e.target.closest?.('#user-menu')) open.value = false
}
onMounted(() => document.addEventListener('click', close))
onBeforeUnmount(() => document.removeEventListener('click', close))
</script>

<template>
    <div class="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] flex flex-col">
        <!-- Top Bar -->
        <header class="sticky top-0 z-20 border-b border-[var(--border-light)] bg-[var(--card-bg)]/80 backdrop-blur">
            <div class="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
                <!-- Brand -->
                <Link :href="route('dashboard')" class="font-semibold text-[var(--accent-baby-blue)] tracking-wide">
                    ChessCyber
                </Link>

                <!-- Page title slot (optional) -->
                <div class="text-sm opacity-60">
                    <slot name="title"></slot>
                </div>

                <!-- User menu -->
                <div id="user-menu" class="relative">
                    <button @click="toggle"
                            class="flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[#111] px-2 py-1 hover:bg-[#141414]">
                        <!-- avatar placeholder -->
                        <span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-baby-blue)] text-black font-bold">
              U
            </span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.232l3.71-4a.75.75 0 111.08 1.04l-4.24 4.57a.75.75 0 01-1.08 0l-4.24-4.57a.75.75 0 01.02-1.06z" clip-rule="evenodd"/>
                        </svg>
                    </button>

                    <div v-show="open"
                         class="absolute right-0 mt-2 w-44 overflow-hidden rounded-md border border-[var(--border-light)] bg-[var(--card-bg)] shadow-xl">
                        <Link :href="route('profile.edit')" class="block px-3 py-2 text-sm hover:bg-[#171717]">
                            Profile
                        </Link>
                        <Link :href="route('logout')" method="post" as="button"
                              class="block w-full text-left px-3 py-2 text-sm text-[var(--accent-red)] hover:bg-[#171717]">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </header>

        <!-- Content -->
        <main class="flex-1">
            <div class="mx-auto max-w-6xl px-4 py-6">
                <slot />
            </div>
        </main>

        <!-- Bottom Nav (Notifications lives here) -->
        <nav class="sticky bottom-0 z-20 border-t border-[var(--border-light)] bg-[var(--card-bg)]">
            <div class="mx-auto max-w-6xl grid grid-cols-4">
                <Link :href="route('dashboard')"
                      class="flex flex-col items-center gap-1 py-3 text-xs hover:bg-[#121212]">
                    <span>🏠</span><span>Dashboard</span>
                </Link>
                <Link :href="route('matches.index')"
                      class="flex flex-col items-center gap-1 py-3 text-xs hover:bg-[#121212]">
                    <span>♟</span><span>Matches</span>
                </Link>
                <Link :href="route('account.index')"
                      class="flex flex-col items-center gap-1 py-3 text-xs hover:bg-[#121212]">
                    <span>💰</span><span>Account</span>
                </Link>
                <Link :href="route('notifications.index')"
                      class="flex flex-col items-center gap-1 py-3 text-xs hover:bg-[#121212]">
                    <span>🔔</span><span>Notifications</span>
                </Link>
            </div>
        </nav>
    </div>
</template>
