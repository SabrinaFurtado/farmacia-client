import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let navbarComponent

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Bem Estar</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Produtos</div>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <div className='hover:underline'>Cadastrar categoria</div>
              <Link to='/cadastrar-categoria' className='hover:underline'>Cadastrar categoria</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
