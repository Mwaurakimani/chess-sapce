<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome/index', []);
})->name('home');

Route::get('dashboard', function () {
    $component = 'dashboard/index';
    return Inertia::render($component,[]);
})->middleware(['auth', 'verified'])->name('dashboard');

// matches section
Route::get('/matches', function () {
    return Inertia::render('dashboard/index');
})->name('matches.index');

// account section
Route::get('/account', function () {
    return Inertia::render('dashboard/index');
})->name('account.index');

// notifications
Route::get('/notifications', function () {
    return Inertia::render('dashboard/index');
})->name('notifications.index');

// profile
Route::get('/profile', function () {
    return Inertia::render('dashboard/index');
})->name('profile.edit');

// logout (must be POST for auth)
Route::post('/logout', function () {
    // stub logout for now
    return redirect()->route('dashboard');
})->name('logout');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
