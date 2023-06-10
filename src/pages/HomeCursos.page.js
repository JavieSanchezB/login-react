import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Home = () => {
  const [formData, setFormData] = useState({
    estudiante: {
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      fechaNacimiento: '',
      edad: '',
      fechaMatricula: '',
      identificacion: '',
      direccion: '',
      barrio: '',
      municipio: '',
      departamento: '',
      email: '',
      ocupacion: '',
      telefono: '',
      estrato: '',
      sisben: '',
      desplazado: '',
      institucionProcedencia: '',
      grado: '',
      jornada: '',
      anio: '',
      estadoCivil: '',
    },
    acudiente: {
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',
      escolaridad: '',
      edad: '',
      sexo: '',
      identificacion: '',
      direccion: '',
      barrio: '',
      municipio: '',
      departamento: '',
      ocupacion: '',
      telefono: '',
      estrato: '',
      sisben: '',
      desplazado: '',
    },
    servicioSolicitado: '',
    observaciones: '',
  });

  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [section, field] = name.split('.');

    setFormData((prevState) => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="container">
      <h1>HOJA DE MATRÍCULA</h1>
      <h2>Corporación Politécnico de Magangué - CURSOS 2023</h2>
      <button className="btn btn-primary mb-3" onClick={handleToggleForm}>
        {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
      </button>
      <CSSTransition
        in={showForm}
        timeout={300}
        classNames="form-transition"
        unmountOnExit
      >
        <form onSubmit={handleSubmit}>
          <h3>1. INFORMACIÓN DEL ESTUDIANTE</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre 1:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.nombre1"
                  value={formData.estudiante.nombre1}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
              <div className="form-group">
                <label>Fecha de nacimiento:</label>
                <input
                  type="date"
                  className="form-control"
                  name="estudiante.fechaNacimiento"
                  value={formData.estudiante.fechaNacimiento}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Edad:</label>
                <input
                  type="number"
                  className="form-control"
                  name="estudiante.edad"
                  value={formData.estudiante.edad}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre 2:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.nombre2"
                  value={formData.estudiante.nombre2}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
              <div className="form-group">
                <label>Fecha de matrícula:</label>
                <input
                  type="date"
                  className="form-control"
                  name="estudiante.fechaMatricula"
                  value={formData.estudiante.fechaMatricula}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>N.º de identificación:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.identificacion"
                  value={formData.estudiante.identificacion}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Dirección:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.direccion"
                  value={formData.estudiante.direccion}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="estudiante.email"
                  value={formData.estudiante.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Institución de procedencia:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.institucionProcedencia"
                  value={formData.estudiante.institucionProcedencia}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Barrio:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.barrio"
                  value={formData.estudiante.barrio}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
              <div className="form-group">
                <label>Ocupación actual:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.ocupacion"
                  value={formData.estudiante.ocupacion}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Grado:</label>
                <input
                  type="text"
                  className="form-control"
                  name="estudiante.grado"
                  value={formData.estudiante.grado}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del estudiante */}
            </div>
          </div>

          <h3>2. INFORMACIÓN DEL ACUDIENTE</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre 1:</label>
                <input
                  type="text"
                  className="form-control"
                  name="acudiente.nombre1"
                  value={formData.acudiente.nombre1}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del acudiente */}
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Nombre 2:</label>
                <input
                  type="text"
                  className="form-control"
                  name="acudiente.nombre2"
                  value={formData.acudiente.nombre2}
                  onChange={handleChange}
                />
              </div>
              {/* Resto de los campos del acudiente */}
            </div>
          </div>

          {/* Resto de los campos del acudiente */}

          <h3>3. SERVICIO SOLICITADO</h3>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="servicioSolicitado"
              value={formData.servicioSolicitado}
              onChange={handleChange}
            />
          </div>

          <h3>Observaciones</h3>
          <div className="form-group">
            <textarea
              className="form-control"
              name="observaciones"
              value={formData.observaciones}
              onChange={handleChange}
            />
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>ESTUDIANTE</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>ACUDIENTE</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>FIRMA AUTORIZADA</label>
                <input
                  type="text"
                  className="form-control"
                  disabled
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </CSSTransition>
    </div>
  );
};

export default Home;
