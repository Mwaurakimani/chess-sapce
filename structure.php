<?php

function traverse($dir, $prefix = ''): void
{
    $items = scandir($dir);

    foreach ($items as $item) {
        if ($item === '.' || $item === '..') continue;
        if ($item === 'node_modules' || $item === 'vendor') continue;

        $path = "$dir/$item";
        echo $prefix . $item . (is_dir($path) ? '/' : '') . PHP_EOL;

        if (is_dir($path)) {
            traverse($path, $prefix . '  ');
        }
    }
}

$start = __DIR__.'/resources'; // Or specify a different path
traverse($start);
