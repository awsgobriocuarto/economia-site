const fetchDDJJ = require('./services/fetchDDJJ').default;
const fetchEscalaSalarial = require('./services/fetchEscalaSalarial').default;

async function test() {
  try {
    console.log("Testing fetchDDJJ...");
    const ddjj = await fetchDDJJ.list();
    console.log("DDJJ count:", ddjj.length);
    
    console.log("Testing fetchEscalaSalarial...");
    const escala = await fetchEscalaSalarial.list();
    console.log("Escala count:", escala.length);
  } catch (error) {
    console.error("CRASH:", error);
  }
}

test();
