# Desafio JWT Challenge

Para este desafio usamos:
- jsonwebtoken

Para este desafio creamos:
- verifyToken.js: Metodo que valida el token generado con jsonwebToken.
- config.js: Agregamos secret para cifrar el token.(TODO: Tomar de una variable de entorno).

Test
- Paso 1: llamar a '/registerToken' en Postman para generar un Token (Creamos un usuario hardcodeado con un id).

- Paso 2: llamar a cualquiera de las demas rutas, y en el header en la key poner: x-access-token, y en value el token generado. 

## PLUS
Hicimos en un repo otro ejemplo mas complejo, usando mongoose para mapear los datos en mongodb utilizando(schema), no replicamos esto ya que no sabiamos si era necesario en este challenge. 
En este ejemplo hicimos un log-in y sign-in.

https://github.com/Federico-ort/JWTchallenge.git

## PARTICIPANTES
- Maria de los Angeles Bernardez.
- Tomas Augusto Kouba.
- Mariano Di Modugno. 
- Federico Valentin Loterstein.
