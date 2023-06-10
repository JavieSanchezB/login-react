import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const initialValues = {
    codigo: '',
    fechaMatricula: '',
    primerNombre: '',
    segundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    fechaNacimientoDia: '',
    fechaNacimientoMes: '',
    fechaNacimientoAnio: '',
    municipioNacimiento: '',
    departamentoNacimiento: '',
    identificacionTipo: '',
    identificacionNumero: '',
    sexo: '',
    departamentoExpedicion: '',
    municipioExpedicion: '',
    zonaResidencia: '',
    estrato: '',
    sisben: '',
    direccionResidencia: '',
    telefono: '',
    barrio: '',
    municipio: '',
    gradoSolicitado: '',
    grupo: '',
    repitente: '',
    continuidadGrupo: '',
    continuidadAnio: '',
    jornada: '',
    alumnoProvieneSectorPrivado: '',
    provieneOtroMunicipio: '',
    alumnoVictimaConflictoArmado: '',
    codigoDepartamentoExpulsor: '',
    codigoMunicipioExpulsor: '',
    alumnoTieneDiscapacidad: '',
    alumnoPerteneceEtnia: '',
    institucionFamiliar: '',
    acudienteNombre: '',
    acudienteApellidos: '',
    acudienteIdentificacionTipo: '',
    acudienteIdentificacionNumero: '',
    acudienteTelefono: '',
    acudienteDireccion: '',
    observaciones: '',
  };

  const validationSchema = Yup.object().shape({
    codigo: Yup.string().required('Este campo es obligatorio'),
    fechaMatricula: Yup.date().required('Este campo es obligatorio'),
    primerNombre: Yup.string().required('Este campo es obligatorio'),
    segundoNombre: Yup.string(),
    primerApellido: Yup.string().required('Este campo es obligatorio'),
    segundoApellido: Yup.string(),
    fechaNacimientoDia: Yup.number().required('Este campo es obligatorio'),
    fechaNacimientoMes: Yup.number().required('Este campo es obligatorio'),
    fechaNacimientoAnio: Yup.number().required('Este campo es obligatorio'),
    municipioNacimiento: Yup.string().required('Este campo es obligatorio'),
    departamentoNacimiento: Yup.string().required('Este campo es obligatorio'),
    identificacionTipo: Yup.string().required('Este campo es obligatorio'),
    identificacionNumero: Yup.string().required('Este campo es obligatorio'),
    sexo: Yup.string().required('Este campo es obligatorio'),
    departamentoExpedicion: Yup.string().required('Este campo es obligatorio'),
    municipioExpedicion: Yup.string().required('Este campo es obligatorio'),
    zonaResidencia: Yup.string().required('Este campo es obligatorio'),
    estrato: Yup.string().required('Este campo es obligatorio'),
    sisben: Yup.string().required('Este campo es obligatorio'),
    direccionResidencia: Yup.string().required('Este campo es obligatorio'),
    telefono: Yup.string().required('Este campo es obligatorio'),
    barrio: Yup.string().required('Este campo es obligatorio'),
    municipio: Yup.string().required('Este campo es obligatorio'),
    gradoSolicitado: Yup.string().required('Este campo es obligatorio'),
    grupo: Yup.string().required('Este campo es obligatorio'),
    repitente: Yup.string().required('Este campo es obligatorio'),
    continuidadGrupo: Yup.string(),
    continuidadAnio: Yup.string(),
    jornada: Yup.string().required('Este campo es obligatorio'),
    alumnoProvieneSectorPrivado: Yup.string().required('Este campo es obligatorio'),
    provieneOtroMunicipio: Yup.string().required('Este campo es obligatorio'),
    alumnoVictimaConflictoArmado: Yup.string().required('Este campo es obligatorio'),
    codigoDepartamentoExpulsor: Yup.string(),
    codigoMunicipioExpulsor: Yup.string(),
    alumnoTieneDiscapacidad: Yup.string().required('Este campo es obligatorio'),
    alumnoPerteneceEtnia: Yup.string().required('Este campo es obligatorio'),
    institucionFamiliar: Yup.string(),
    acudienteNombre: Yup.string().required('Este campo es obligatorio'),
    acudienteApellidos: Yup.string().required('Este campo es obligatorio'),
    acudienteIdentificacionTipo: Yup.string().required('Este campo es obligatorio'),
    acudienteIdentificacionNumero: Yup.string().required('Este campo es obligatorio'),
    acudienteTelefono: Yup.string().required('Este campo es obligatorio'),
    acudienteDireccion: Yup.string().required('Este campo es obligatorio'),
    observaciones: Yup.string(),
  });

  const handleSubmit = (values) => {
    console.log(values);
    toast.success('Formulario enviado exitosamente');
  };

  return (
    <div>
      <ToastContainer />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => toast.info('Mostrar Formulario')}
      >
        Mostrar Formulario
      </button>
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <h3>Corporación Politécnico de Magangué</h3>
              <h4>BACHILLERATO 2023</h4>

              <div className="form-group">
                <label>CÓDIGO:</label>
                <Field type="text" name="codigo" className="form-control" />
                <ErrorMessage name="codigo" component="div" className="text-danger" />
              </div>

              <div className="form-group">
                <label>FECHA DE MATRICULA:</label>
                <Field type="date" name="fechaMatricula" className="form-control" />
                <ErrorMessage name="fechaMatricula" component="div" className="text-danger" />
              </div>

              {/* Resto de los campos del formulario */}

              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </CSSTransition>
    </div>
  );
};

export default Home;
