import fs from 'node:fs';

fs.readFile('C:/Users/josel/Documents/GitHub/CASA/dw-abril-2025/dia21/mensaje.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
