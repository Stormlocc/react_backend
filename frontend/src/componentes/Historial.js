import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function Historial() {
  const [users, setUsers] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const res = await axios.get('http://localhost:4000/api/perfil');
      setUsers(res.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  const onChangeUsername = (e) => {
    setNewUsername(e.target.value); // Actualizar el estado con el valor del input
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newPerfil = await axios.post('http://localhost:4000/api/perfil', {
      nombres: newUsername,
      apellidos: 'Ramírez',
      tipo_user: 'Administrador',
      user: {
        email: 'Miche99@example.com',
        password: 'securepassword',
      },
    });
    console.log(newPerfil.data);
    setNewUsername(''); // Limpiar el campo de texto después de registrar
    fetchData(); // Actualizar la lista de perfiles después de registrar
    console.log('registro exitoso');
  };

  return (
    <>
      <div className='content-wrapper row'>
        <div className='col-md-4'>
          <div className='card card-body'>
            <h3>Crear nuevo perfil</h3>
            <form onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control'
                  onChange={onChangeUsername}
                  value={newUsername} // Asignar el valor del input al estado
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Registrar
              </button>
            </form>
          </div>
        </div>
        <div className='col-md-8'>
          <ul className='list-group'>
            {users.map((user) => (
              <li key={user._id} className='list-group'>
                {user.nombres}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
