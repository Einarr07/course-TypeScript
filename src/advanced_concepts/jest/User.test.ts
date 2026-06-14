// ==========================================
// Unit Testing with Jest and TypeScript
// ==========================================
// Jest is a testing framework. It lets you write tests to verify your code works correctly.
// The 'ts-jest' preset allows Jest to understand TypeScript files directly.

// Import the class we want to test
import {Usuario} from './User';

/**
 * 'describe' groups related tests together under a label.
 * Think of it as a folder for your tests about one specific thing.
 */
describe('Usuario Class', () => {
    // Declare the variable outside so all tests can use it
    let usuario: Usuario;

    /**
     * 'beforeEach' runs BEFORE every single test in this describe block.
     * It's useful for setting up a fresh instance so tests don't affect each other.
     */
    beforeEach(() => {
        usuario = new Usuario('Juan', 'Pérez');
    });

    /**
     * 'test' (or 'it') defines a single test case.
     * 'expect(value).toBe(expected)' checks if value === expected.
     * '.toBe()' is called a "matcher" — it compares using strict equality.
     */
    test('debe regresar el nombre correcto', () => {
        expect(usuario.getName()).toBe('Juan');
    });

    test('debe regresar el perfil correcto', () => {
        expect(usuario.getProfile()).toBe('Juan Pérez');
    });

    /**
     * '.toBeTruthy()' checks if the value is truthy (not false, 0, null, undefined, etc.).
     * It's useful when you just care that something is "true-ish", not exactly 'true'.
     */
    test('debe verificar que el usuario está activo', () => {
        expect(usuario.isStillActive()).toBeTruthy();
    });

    /**
     * '.toBeFalsy()' is the opposite of .toBeTruthy().
     * Here we create a new user with 'activo = false' to test the inactive case.
     */
    test('debe verificar que el usuario está inactivo', () => {
        const usuarioInactivo = new Usuario('Ana', 'García', false);
        expect(usuarioInactivo.isStillActive()).toBeFalsy();
    });
})