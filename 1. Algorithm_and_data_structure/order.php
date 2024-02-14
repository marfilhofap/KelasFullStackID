<?php
// Sample array
$data = array('Fidel', 'Jonas', 'John', 'Maxy', 'Afonso', 'Silvino', 'Lourenco');

// Sorting in ascending order
sort($data);
print_r($data);

echo '<br>';
// Sorting in descending order
rsort($data);
print_r($data);

echo '<br>';
// Bubble sort in ascending order
$length = count($data);

for ($i = 0; $i < $length - 1; $i++) {
    for ($j = 0; $j < $length - $i - 1; $j++) {
        if ($data[$j] > $data[$j + 1]) {
            // Swap elements if they are in the wrong order
            $temp = $data[$j];
            $data[$j] = $data[$j + 1];
            $data[$j + 1] = $temp;
        }
    }
}

print_r($data);

echo '<br>';
// Bubble sort in descending order
$length = count($data);

for ($i = 0; $i < $length - 1; $i++) {
    for ($j = 0; $j < $length - $i - 1; $j++) {
        if ($data[$j] < $data[$j + 1]) {
            // Swap elements if they are in the wrong order for descending order
            $temp = $data[$j];
            $data[$j] = $data[$j + 1];
            $data[$j + 1] = $temp;
        }
    }
}

print_r($data);
