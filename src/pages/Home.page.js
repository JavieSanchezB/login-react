import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CSSTransition } from "react-transition-group";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Esquema de validación con Yup
const validationSchema = Yup.object().shape({
  codigo: Yup.string().required("Campo requerido"),
  fechaMatricula: Yup.date().required("Campo requerido"),
  primerNombre: Yup.string().required("Campo requerido"),
  segundoNombre: Yup.string(),
  primerApellido: Yup.string().required("Campo requerido"),
  segundoApellido: Yup.string(),
  fechaNacimiento: Yup.date().required("Campo requerido"),
  municipioNacimiento: Yup.string().required("Campo requerido"),
  departamentoNacimiento: Yup.string().required("Campo requerido"),
  identificacion: Yup.string().required("Campo requerido"),
  sexo: Yup.string().required("Campo requerido"),
  departamentoExpedicion: Yup.string().required("Campo requerido"),
  municipioExpedicion: Yup.string().required("Campo requerido"),
  zonaResidencia: Yup.string().required("Campo requerido"),
  estrato: Yup.string().required("Campo requerido"),
  sisben: Yup.string().required("Campo requerido"),
  direccionResidencia: Yup.string().required("Campo requerido"),
  telefono: Yup.string().required("Campo requerido"),
  barrio: Yup.string().required("Campo requerido"),
  municipio: Yup.string().required("Campo requerido"),
  gradoSolicitado: Yup.string().required("Campo requerido"),
  grupo: Yup.string().required("Campo requerido"),
  jornada: Yup.string().required("Campo requerido"),
  repitente: Yup.string().required("Campo requerido"),
  continuidadGrupo: Yup.string().required("Campo requerido"),
  continuidadAnio: Yup.string().required("Campo requerido"),
  alumnoProvieneSectorPrivado: Yup.string().required("Campo requerido"),
  provieneOtroMunicipio: Yup.string().required("Campo requerido"),
  alumnoVictimaConflictos: Yup.string().required("Campo requerido"),
  codigoDepartamentoExpulsor: Yup.string().required("Campo requerido"),
  codigoMunicipioExpulsor: Yup.string().required("Campo requerido"),
  alumnoDiscapacidad: Yup.string().required("Campo requerido"),
  alumnoPerteneceEtnia: Yup.string().required("Campo requerido"),
  institucionFamiliar: Yup.string().required("Campo requerido"),
  nombreAcudiente: Yup.string().required("Campo requerido"),
  apellidosAcudiente: Yup.string().required("Campo requerido"),
  identificacionAcudiente: Yup.string().required("Campo requerido"),
  telefonoAcudiente: Yup.string().required("Campo requerido"),
  direccionAcudiente: Yup.string().required("Campo requerido"),
  observaciones: Yup.string().required("Campo requerido"),
});

const Home = () => {
  const handleSubmit = (values) => {
    console.log(values);
    toast.success("Formulario enviado correctamente");
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => toast.info("Mostrando formulario")}
      >
        Mostrar Formulario
      </button>

      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Formik
          initialValues={{
            codigo: "",
            fechaMatricula: "",
            primerNombre: "",
            segundoNombre: "",
            primerApellido: "",
            segundoApellido: "",
            fechaNacimiento: "",
            municipioNacimiento: "",
            departamentoNacimiento: "",
            identificacion: "",
            sexo: "",
            departamentoExpedicion: "",
            municipioExpedicion: "",
            zonaResidencia: "",
            estrato: "",
            sisben: "",
            direccionResidencia: "",
            telefono: "",
            barrio: "",
            municipio: "",
            gradoSolicitado: "",
            grupo: "",
            jornada: "",
            repitente: "",
            continuidadGrupo: "",
            continuidadAnio: "",
            alumnoProvieneSectorPrivado: "",
            provieneOtroMunicipio: "",
            alumnoVictimaConflictos: "",
            codigoDepartamentoExpulsor: "",
            codigoMunicipioExpulsor: "",
            alumnoDiscapacidad: "",
            alumnoPerteneceEtnia: "",
            institucionFamiliar: "",
            nombreAcudiente: "",
            apellidosAcudiente: "",
            identificacionAcudiente: "",
            telefonoAcudiente: "",
            direccionAcudiente: "",
            observaciones: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, values, errors }) => (
            <Form>
              <h3>TARJETA ACUMULATIVA DE MATRICULA</h3>
              {/* Resto del formulario */}
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </Form>
          )}
        </Formik>
      </CSSTransition>

      <ToastContainer />
    </div>
  );
};

export default Home;
