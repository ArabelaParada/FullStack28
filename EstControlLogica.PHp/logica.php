<!DOCTYPE html>
<!-- Define el tipo de documento como HTML5 -->
<html lang="es">
<!-- Especifica que el documento está en español -->

<head>
    <!-- Encabezado del documento -->
    <meta charset="UTF-8">
    <!-- Establece la codificación de caracteres a UTF-8 -->
    <title>Tarea PHP - Estructuras de Control</title>
    <!-- Título de la página que aparecerá en la pestaña del navegador -->
    
    <style>
        /* Estilos CSS para la página */
        body { 
            font-family: Arial, sans-serif; /* Fuente principal */
            margin: 20px; /* Margen alrededor del cuerpo */
        }
        .resultado { 
            background: #f0f0f0; /* Color de fondo gris claro */
            padding: 15px; /* Espaciado interno */
            margin-bottom: 10px; /* Margen inferior */
            border-radius: 5px; /* Bordes redondeados */
        }
    </style>
</head>

<body>
    <!-- Cuerpo principal del documento -->
    <h1>Tarea PHP: Funciones con Estructuras de Control</h1>
    <!-- Título principal de la página -->
    
    <!-- Inclusión del archivo con las funciones PHP -->
    <?php include 'funciones.php'; ?>
    <!-- Importa las funciones desde un archivo externo -->

    <!-- Sección 1: Secuencia de Fibonacci -->
    <div class="resultado">
        <h2>Fibonacci (10 términos):</h2>
        <?php
        // Genera la secuencia Fibonacci con 10 términos
        $fib = generarFibonacci(10);
        // Convierte el array en string separado por comas y lo muestra
        echo implode(', ', $fib);
        ?>
    </div>

    <!-- Sección 2: Verificación de números primos -->
    <div class="resultado">
        <h2>Números Primos:</h2>
        <!-- Usa la función esPrimo() con el operador ternario para mostrar Sí/No -->
        <p>¿7 es primo? <?= esPrimo(7) ? 'Sí' : 'No' ?></p>
        <p>¿12 es primo? <?= esPrimo(12) ? 'Sí' : 'No' ?></p>
        <p>¿29 es primo? <?= esPrimo(29) ? 'Sí' : 'No' ?></p>
    </div>

    <!-- Sección 3: Verificación de palíndromos -->
    <div class="resultado">
        <h2>Palíndromos:</h2>
        <!-- Usa la función esPalindromo() con el operador ternario -->
        <p>¿"Reconocer" es palíndromo? <?= esPalindromo("Reconocer") ? 'Sí' : 'No' ?></p>
        <p>¿"PHP" es palíndromo? <?= esPalindromo("PHP") ? 'Sí' : 'No' ?></p>
        <p>¿"Anita lava la tina" es palíndromo? <?= esPalindromo("Anita lava la tina") ? 'Sí' : 'No' ?></p>
    </div>
</body>
</html>