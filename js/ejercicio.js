//Comparar 3 números 
/*
Averiguar que número es mayor de los 3 números
-Si hay números repetidos que también lo imprima
y cuál es el número repetido*/

let num1 = 2;
let num2 = 2;
let num3 = 3;

/*if(num1<num2)
{
    console.log(num1)
}
if(num1<num3)
{
    console.log(num3)
}
if(num2<num1)
{
    console.log(num2)
}
if(num2<num3)
{
    console.log(num2)
}
if(num3<num1)
{
    console.log(num3)
}
if(num3<num2)
{
    console.log(num3)
}*/

if(num1>num2 && num1>num3)
{
    console.log("el numero mayor es:",num1)
}
if(num2>num1 && num2>num3)
{
    console.log("el numero mayor es:",num2)
}
if(num3>num1 && num3>num2)
{
    console.log("el numero mayor es:",num3)
}
if(num1==num2 || num1==num3)
{
    console.log("el numero repetido es:",num1)
}else if(num2==num1 || num2==num3)
{
    console.log("el numero repetido es:",num2)
}else if(num3==num1 || num3==num2)
{
    console.log("el numero repetido es:",num3)
}else{
    console.log("No hay números repetidos")
}


