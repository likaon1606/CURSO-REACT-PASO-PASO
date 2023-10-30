import { useContext } from 'react';
import Context from './context/Context';
import { datos2 } from './datos';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
    watch,
  } = useForm();
  const { etapas, setEtapas, misDatos } = useContext(Context);

  const obtener = (data) => {
    console.table(data);
    misDatos[etapas] = data.valor;
    setEtapas(etapas + 1);
    setFocus('valor');
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(obtener)}>
        <h2>{datos2[etapas].texto}</h2>
        <input
          autoFocus
          autoComplete='off'
          {...register('valor', {
            required: datos2[etapas].obligatorio,
            min: datos2[etapas].minimo,
            max: datos2[etapas].maximo,
          })}
        />
        {errors.valor?.type === 'required' && <p>Este dato es obligatorio</p>}
        {errors.valor?.type === 'min' && (
          <p>Muy corto, mínimo {datos2[etapas].minimo} caracteres</p>
        )}
        {errors.valor?.type === 'max' && (
          <p>Demasiado largo, máximo {datos2[etapas].maximo} caracteres</p>
        )}

        <hr />
        <input type='submit' value='Enviar' />
      </form>
    </>
  );
};

export default Form;
