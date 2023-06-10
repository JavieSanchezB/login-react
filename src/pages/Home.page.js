import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    // Aquí se inicializan los valores de los campos del formulario
    codigo: "",
    fechaMatricula: "",
    primerNombre: "",
    segundoNombre: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimientoDia: "",
    fechaNacimientoMes: "",
    fechaNacimientoAnio: "",
    municipioNacimiento: "",
    departamentoNacimiento: "",
    identificacion: "",
    tipoIdentificacion: "",
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
    repitente: false,
    continuidadGrupo: "",
    continuidadAnio: "",
    jornada: "",
    alumnoProvienePrivado: false,
    alumnoProvieneOtroMunicipio: false,
    victimaConflictoArmado: false,
    departamentoExpulsor: "",
    municipioExpulsor: "",
    tieneDiscapacidad: false,
    tipoDiscapacidad: "",
    perteneceEtnia: false,
    tipoEtnia: "",
    institucionFamiliar: false,
    nombreAcudiente: "",
    apellidosAcudiente: "",
    identificacionAcudiente: "",
    telefonoAcudiente: "",
    direccionAcudiente: "",
    observaciones: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales con los datos del formulario
    console.log(formData);
    toast.success("Formulario enviado correctamente");
  };

  return (
    <div>
      <h1>Formulario de Matrícula</h1>
      <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Ocultar Formulario" : "Mostrar Formulario"}
      </button>

      <CSSTransition in={showForm} timeout={300} classNames="form-transition" unmountOnExit>
        <form onSubmit={handleSubmit} className="mt-3">
          {/* Resto de los campos del formulario */}
        </form>
      </CSSTransition>

      <ToastContainer />

      <style jsx>{`
        .form-transition-enter {
          opacity: 0;
          transform: translateY(-20px);
        }

        .form-transition-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 300ms, transform 300ms;
        }

        .form-transition-exit {
          opacity: 1;
          transform: translateY(0);
        }

        .form-transition-exit-active {
          opacity: 0;
          transform: translateY(-20px);
          transition: opacity 300ms, transform 300ms;
        }
      `}</style>
    </div>
  );
};

export default Home;
