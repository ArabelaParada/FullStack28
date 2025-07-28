
<?php
/**
 * funciones.php - Implementación de funciones para el proyecto PHP
 * 
 * Contiene las funciones requeridas para:
 * - Generación de secuencia Fibonacci
 * - Detección de números primos
 * - Identificación de palíndromos
 * - Suma de números pares
 * - Cálculo de costos de llamadas internacionales
 */

/**
 * Genera una secuencia Fibonacci con los primeros n términos
 * @param int $n Número de términos a generar (debe ser positivo)
 * @return array Array con la secuencia Fibonacci
 * @throws InvalidArgumentException Si $n es negativo
 */
function generarFibonacci($n) {
    if ($n < 0) {
        throw new InvalidArgumentException("El número de términos debe ser positivo");
    }
    
    if ($n === 0) return [];
    if ($n === 1) return [0];
    
    $fib = [0, 1];
    
    for ($i = 2; $i < $n; $i++) {
        $fib[$i] = $fib[$i-1] + $fib[$i-2];
    }
    
    return array_slice($fib, 0, $n);
}

/**
 * Determina si un número es primo
 * @param int $num Número a evaluar
 * @return bool True si es primo, False si no lo es
 */
function esPrimo($num) {
    if ($num <= 1) return false;
    if ($num == 2) return true;
    if ($num % 2 == 0) return false;
    
    $sqrtNum = sqrt($num);
    for ($i = 3; $i <= $sqrtNum; $i += 2) {
        if ($num % $i == 0) return false;
    }
    
    return true;
}

/**
 * Determina si una cadena es un palíndromo (se lee igual al derecho y al revés)
 * @param string $cadena Cadena a evaluar
 * @return bool True si es palíndromo, False si no lo es
 */
function esPalindromo($cadena) {
    $cadenaLimpia = preg_replace('/[^a-zA-Z0-9]/', '', strtolower($cadena));
    return $cadenaLimpia === strrev($cadenaLimpia);
}

/**
 * Suma todos los números pares en un array de enteros
 * @param array $numeros Array de números enteros
 * @return int Suma de los números pares
 */
function sumarPares($numeros) {
    return array_reduce($numeros, function($suma, $numero) {
        return $suma + ($numero % 2 === 0 ? $numero : 0);
    }, 0);
}

/**
 * Obtiene el precio por minuto según la clave de zona
 * @param int $clave Clave de la zona
 * @return array|null Array con nombre y precio, o null si no existe
 */
function obtenerPrecioPorZona($clave) {
    static $zonas = [
        12 => ['nombre' => 'América del Norte', 'precio' => 2.00],
        15 => ['nombre' => 'América Central', 'precio' => 2.20],
        18 => ['nombre' => 'América del Sur', 'precio' => 4.50],
        19 => ['nombre' => 'Europa', 'precio' => 3.50],
        23 => ['nombre' => 'Asia', 'precio' => 6.00],
        25 => ['nombre' => 'África', 'precio' => 6.00],
        29 => ['nombre' => 'Oceanía', 'precio' => 5.00]
    ];
    
    return $zonas[$clave] ?? null;
}

/**
 * Calcula el costo total de la llamada internacional
 * @param int $clave Clave de zona
 * @param int $minutos Duración en minutos (debe ser positivo)
 * @return array|null Datos del cálculo o null si clave no existe
 * @throws InvalidArgumentException Si minutos no es positivo
 */
function calcularCostoLlamada($clave, $minutos) {
    if ($minutos <= 0) {
        throw new InvalidArgumentException("Los minutos deben ser un valor positivo");
    }
    
    $zona = obtenerPrecioPorZona($clave);
    if (!$zona) return null;
    
    $subtotal = $minutos * $zona['precio'];
    $descuento = ($minutos < 30) ? $subtotal * 0.10 : 0;
    
    return [
        'zona' => $zona['nombre'],
        'precio_minuto' => $zona['precio'],
        'subtotal' => $subtotal,
        'descuento' => $descuento,
        'total' => $subtotal - $descuento
    ];
}
?>