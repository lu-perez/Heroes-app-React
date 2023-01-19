import { render, screen } from '@testing-library/react'
import { AuthContext } from '../../src/auth/context/AuthContext'
import PrivateRoute from '../../src/router/PrivateRoute'

describe('Pruebas en <PrivateRoute />', () => { 
  test('debe mostrar el children si está autenticado', () => {
    const contextValue = {
      logged: true,
      user: {
        name: 'Strider',
        id: 'ABC123'
      }
    }
    render(
      <AuthContext.Provider value={contextValue}>
        <PrivateRoute>
          <h1>Ruta privada</h1>
        </PrivateRoute>
      </AuthContext.Provider>
    )
    expect(screen.getByText('Ruta privada')).toBeTruthy()
  })
})
