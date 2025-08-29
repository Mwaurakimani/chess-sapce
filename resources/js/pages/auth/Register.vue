<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const submit = () => form.post('/register')
</script>

<template>
    <div class="auth-wrap">
        <div class="auth-card">
            <h1 class="title">Create your account</h1>
            <p class="subtitle">It’s free. Bring your rating. Leave with tokens.</p>

            <form @submit.prevent="submit" novalidate>
                <!-- Name -->
                <div class="field" :class="{'has-error': !!form.errors.name}">
                    <label class="label" :class="{ filled: form.name }">Full name</label>
                    <input v-model="form.name" type="text" class="input" required />
                    <transition name="fade">
                        <p v-if="form.errors.name" class="error">{{ form.errors.name }}</p>
                    </transition>
                </div>

                <!-- Username -->
                <div class="field" :class="{'has-error': !!form.errors.username}">
                    <label class="label" :class="{ filled: form.username }">Username</label>
                    <input v-model="form.username" type="text" class="input" required />
                    <transition name="fade">
                        <p v-if="form.errors.username" class="error">{{ form.errors.username }}</p>
                    </transition>
                </div>

                <!-- Email -->
                <div class="field" :class="{'has-error': !!form.errors.email}">
                    <label class="label" :class="{ filled: form.email }">Email</label>
                    <input v-model="form.email" type="email" class="input" required />
                    <transition name="fade">
                        <p v-if="form.errors.email" class="error">{{ form.errors.email }}</p>
                    </transition>
                </div>

                <!-- Password -->
                <div class="field" :class="{'has-error': !!form.errors.password}">
                    <label class="label" :class="{ filled: form.password }">Password</label>
                    <input v-model="form.password" type="password" class="input" required />
                    <transition name="fade">
                        <p v-if="form.errors.password" class="error">{{ form.errors.password }}</p>
                    </transition>
                </div>

                <!-- Confirm -->
                <div class="field" :class="{'has-error': !!form.errors.password_confirmation}">
                    <label class="label" :class="{ filled: form.password_confirmation }">Confirm password</label>
                    <input v-model="form.password_confirmation" type="password" class="input" required />
                    <transition name="fade">
                        <p v-if="form.errors.password_confirmation" class="error">{{ form.errors.password_confirmation }}</p>
                    </transition>
                </div>

                <button class="btn btn-primary" :disabled="form.processing">
                    <span v-if="!form.processing">Create Account</span>
                    <span v-else class="spinner"></span>
                </button>
            </form>

            <p class="alt">Already have an account? <a href="/login" class="link">Sign in</a></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '@/utils/theme.scss';

.auth-wrap {
    min-height: 100vh;
    background: var(--bg-main);
    display: grid;
    place-items: center;
    padding: 2rem;
}
.auth-card {
    width: 100%;
    max-width: 480px;
    background: var(--card-bg);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-md);
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,.35);
    animation: rise .5s ease-out;
}
.title {
    color: var(--accent-baby-blue);
    margin-bottom: .25rem;
    font-size: 1.75rem;
    font-weight: 700;
}
.subtitle {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.field {
    position: relative;
    margin-bottom: 1.1rem;

    .label {
        position: absolute;
        top: 50%;
        left: .9rem;
        transform: translateY(-50%);
        color: var(--text-muted);
        font-size: .95rem;
        pointer-events: none;
        transition: transform .18s ease, color .18s ease, font-size .18s ease;
        padding: 0 .25rem;
        background: #0e0e0e;
    }

    .input {
        width: 100%;
        background: #0e0e0e;
        border: 1px solid var(--border-light);
        color: var(--text-main);
        border-radius: var(--radius-sm);
        padding: .9rem .9rem;
        outline: none;
        transition: border-color .18s ease, box-shadow .18s ease;

        &:focus {
            border-color: var(--accent-baby-blue);
            box-shadow: 0 0 0 3px rgba(173,216,230,.12);
        }
    }

    &:focus-within .label,
    .label.filled {
        transform: translateY(-2.1rem) scale(.92);
        color: var(--accent-baby-blue);
    }

    .error {
        color: var(--accent-red);
        margin-top: .4rem;
        font-size: .86rem;
        animation: shake .28s ease;
    }

    &.has-error .input {
        border-color: var(--accent-red);
        box-shadow: 0 0 0 3px rgba(255,111,97,.12);
    }
}

.btn {
    width: 100%;
    padding: .85rem 1.2rem;
    border-radius: var(--radius-md);
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: transform .12s ease, background .18s ease, opacity .18s ease;

    &.btn-primary {
        background: var(--accent-orange);
        color: #0d0d0d;
    }
    &:hover { transform: translateY(-1px); }
    &:active { transform: translateY(0); }
    &:disabled { opacity: .65; cursor: not-allowed; }
}

.alt { margin-top: 1rem; color: var(--text-muted); }
.link { color: var(--accent-baby-blue); }

.spinner {
    width: 18px; height: 18px;
    border: 2px solid #0d0d0d;
    border-top-color: transparent;
    border-radius: 50%;
    display: inline-block;
    animation: spin .6s linear infinite;
}

.fade-enter-active, .fade-leave-active { transition: opacity .15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@keyframes spin { to { transform: rotate(360deg); } }
@keyframes shake {
    0% { transform: translateX(0); }
    35% { transform: translateX(-3px); }
    70% { transform: translateX(3px); }
    100% { transform: translateX(0); }
}
@keyframes rise {
    from { transform: translateY(8px); opacity: 0; }
    to   { transform: translateY(0); opacity: 1; }
}
</style>
