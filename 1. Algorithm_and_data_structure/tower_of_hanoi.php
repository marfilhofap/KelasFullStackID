<?php

function towerOfHanoi($disk, $source, $target, $auxiliary)
{
    if ($disk == 1) {
        echo "Movee disk 1 from $source to $target\n";
    } else {
        towerOfHanoi($disk - 1, $source, $auxiliary, $target);
        echo "Move disk $disk from $source to $target\n";
        towerOfHanoi($disk - 1, $auxiliary, $target, $source);
    }
}

// Contoh penggunaan
towerOfHanoi(3, 'A', 'C', 'B');
