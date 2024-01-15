<?php

function faktorial($n)
{
    if ($n == 0 || $n == 1) {
        return 1;
    } else {
        return $n * faktorial($n - 1);
    }
}

$rejultadu_faktorial = faktorial(5);
echo "Faktorial husi 5: " . $rejultadu_faktorial;
?>

<script>
    const add = (a, b) => a + b;
    console.log(add(1, 2));
</script>