const prefijos = [55, 52, 93];

const validadorJAB = (valor) => {
  const inicio = Number(valor.substring(0, 2));
  const evaluar = prefijos.indexOf(inicio);
  return evaluar >= 0 && valor.length >= 9 && valor.length <= 10;
};
export { validadorJAB };
