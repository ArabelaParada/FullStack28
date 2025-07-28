<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tarea PHP - Estructuras de Control</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .resultado { background: #f0f0f0; padding: 15px; margin-bottom: 10px; border-radius: 5px; }
        form { margin-bottom: 20px; }
        input[type="text"] { padding: 8px; width: 300px; }
        button { padding: 8px 15px; }
        .error { color: red; }
        .container { max-width: 600px; margin: auto; }
        .form-group { margin-bottom: 15px; }
        label { display: inline-block; width: 150px; }
    </style>
</head>
<body>
    <h1>Tarea PHP: Funciones con Estructuras de Control</h1>
    
    <?php include 'funciones.php'; ?>
    
    <!-- Sección para suma de pares con formulario interactivo -->
    <div class="resultado">
        <h2>Suma de Números Pares</h2>
        <form method="post">
            <label>Ingrese números separados por comas: </label>
            <input type="text" name="numeros" placeholder="Ejemplo: 1, 2, 3, 4, 5">
            <button type="submit" name="calcular_pares">Calcular</button>
        </form>
        
        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['calcular_pares'])) {
            $numerosInput = explode(',', $_POST['numeros']);
            $numerosEnteros = array_map(function($n) {
                return (int) trim($n);
            }, $numerosInput);
            
            $resultado = sumarPares($numerosEnteros);
            
            echo '<div class="resultado">';
            echo '<h3>Resultado del cálculo:</h3>';
            echo '<p>Números ingresados: ' . htmlspecialchars($_POST['numeros']) . '</p>';
            echo '<p>Suma de números pares: <strong>' . $resultado . '</strong></p>';
            echo '</div>';
        }
        ?>
        
        <h3>Ejemplos:</h3>
        <?php
        $arrayEjemplo1 = [1, 2, 3, 4, 5, 6];
        $arrayEjemplo2 = [10, 15, 20, 25, 30];
        $arrayEjemplo3 = [3, 7, 11];
        
        echo "<p>Suma de pares en [1, 2, 3, 4, 5, 6]: ".sumarPares($arrayEjemplo1)."</p>";
        echo "<p>Suma de pares en [10, 15, 20, 25, 30]: ".sumarPares($arrayEjemplo2)."</p>";
        echo "<p>Suma de pares en [3, 7, 11]: ".sumarPares($arrayEjemplo3)."</p>";
        ?>
    </div>

    <!-- Sección de Fibonacci -->
    <div class="resultado">
        <h2>Fibonacci (10 términos):</h2>
        <?php
        $fib = generarFibonacci(10);
        echo implode(', ', $fib);
        ?>
    </div>

    <!-- Sección de números primos -->
    <div class="resultado">
        <h2>Números Primos:</h2>
        <p>¿7 es primo? <?= esPrimo(7) ? 'Sí' : 'No' ?></p>
        <p>¿12 es primo? <?= esPrimo(12) ? 'Sí' : 'No' ?></p>
        <p>¿29 es primo? <?= esPrimo(29) ? 'Sí' : 'No' ?></p>
    </div>

    <!-- Sección de palíndromos -->
    <div class="resultado">
        <h2>Palíndromos:</h2>
        <p>¿"Reconocer" es palíndromo? <?= esPalindromo("Reconocer") ? 'Sí' : 'No' ?></p>
        <p>¿"PHP" es palíndromo? <?= esPalindromo("PHP") ? 'Sí' : 'No' ?></p>
        <p>¿"Anita lava la tina" es palíndromo? <?= esPalindromo("Anita lava la tina") ? 'Sí' : 'No' ?></p>
    </div>

    <!-- Sección de llamadas internacionales -->
    <div class="resultado">
        <h1>Calculadora de Costo de Llamadas</h1>
        
        <form method="post">
            <div class="form-group">
                <label for="clave">Clave de Zona:</label>
                <select name="clave" id="clave" required>
                    <option value="">Seleccione...</option>
                    <option value="12">América del Norte ($2.00/min)</option>
                    <option value="15">América Central ($2.20/min)</option>
                    <option value="18">América del Sur ($4.50/min)</option>
                    <option value="19">Europa ($3.50/min)</option>
                    <option value="23">Asia ($6.00/min)</option>
                    <option value="25">África ($6.00/min)</option>
                    <option value="29">Oceanía ($5.00/min)</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="minutos">Minutos hablados:</label>
                <input type="number" name="minutos" id="minutos" min="1" required>
            </div>
            
            <button type="submit" name="calcular_llamada">Calcular Costo</button>
        </form>
        
        <?php
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['calcular_llamada'])) {
            $clave = (int)$_POST['clave'];
            $minutos = (int)$_POST['minutos'];
            $resultado = calcularCostoLlamada($clave, $minutos);
            
            if ($resultado) {
                echo '<div class="resultado">';
                echo "<h2>Resultado:</h2>";
                echo "<p><strong>Zona:</strong> {$resultado['zona']}</p>";
                echo "<p><strong>Precio por minuto:</strong> \$" . number_format($resultado['precio_minuto'], 2) . "</p>";
                echo "<p><strong>Subtotal ({$minutos} minutos):</strong> \$" . number_format($resultado['subtotal'], 2) . "</p>";
                
                if ($resultado['descuento'] > 0) {
                    echo "<p><strong>Descuento (10% por menos de 30 min):</strong> -\$" . number_format($resultado['descuento'], 2) . "</p>";
                }
                
                echo "<p><strong>TOTAL A PAGAR:</strong> \$" . number_format($resultado['total'], 2) . "</p>";
                echo '</div>';
            } else {
                echo '<div class="error">Error: Clave de zona no válida</div>';
            }
        }
        ?>
    </div>
</body>
</html>