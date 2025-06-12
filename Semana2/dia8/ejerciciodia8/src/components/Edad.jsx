const personas = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 17 },
    { id: 3, nombre: "Carlos", edad: 22 },
    { id: 4, nombre: "Marta", edad: 15 }
  ];
  
  const mayoresDe18 = personas.filter(persona => persona.edad > 18).length;
  
  console.log(`Cantidad de personas mayores de 18 años: ${mayoresDe18}`);