import { authReducer } from '../../../src/auth/context/authReducer'
import { types } from '../../../src/auth/types/types'

describe('Pruebas en authReducer', () => { 
  test('debe retornar el estado por defecto', () => {
    const state = authReducer({ logged: false }, {})
    expect(state).toEqual({ logged: false })
  })

  test('debe llamar el login y establecer el user', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Juan',
        id: '123'
      }
    }
    const state = authReducer({ logged: false }, action)
    expect(state).toEqual({
      logged: true,
      user: action.payload
    })
  })

  test('debe llamar el logout y borrar el user y logged en false', () => {
    const state = {
      logged: true,
      user: {
        name: 'Lucas',
        id: '213'
      }
    }
    const action = {
      type: types.logout
    }
    const newState = authReducer(state, action)
    expect(newState).toEqual({ logged: false })
  })
})
