<?php
class HeightChecker {
    public static function countMismatches(array $heights): int {
        // 1) Inicializar frecuencias (para alturas de 1 a 100)
        $freq = array_fill(0, 101, 0);
        foreach ($heights as $h) {
            $freq[$h]++;
        }

        // 2) Simular el arreglo ordenado y comparar
        $mismatches = 0;
        $i = 0; // índice del arreglo original
        for ($h = 1; $h <= 100; $h++) {
            while ($freq[$h] > 0) {
                if ($heights[$i] !== $h) {
                    $mismatches++;
                }
                $i++;
                $freq[$h]--;
            }
        }
        return $mismatches;
    }
}
