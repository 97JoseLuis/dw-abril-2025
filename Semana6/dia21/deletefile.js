import { unlink } from 'fs';

const filePath = 'C:/Users/josel/Documents/GitHub/CASA/dw-abril-2025/dia21/mensaje.txt'; 

unlink(filePath, (err) => {
  if (err) {
    console.error(`Error removing file: ${err}`);
    return;
  }

  console.log(`File ${filePath} has been successfully removed.`);
});
