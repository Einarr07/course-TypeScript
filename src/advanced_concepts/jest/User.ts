// ==========================================
// TypeScript Classes and Access Modifiers
// ==========================================
// Classes are blueprints for creating objects with properties and methods.
// TypeScript adds access modifiers (public, private, protected) that don't exist in plain JavaScript.

/**
 * The 'export' keyword makes this class available to other files via 'import'.
 * This is part of the ES Module system.
 */
export class Usuario {
    // 'private' means these properties can ONLY be accessed inside this class.
    // They cannot be read or modified from outside (e.g., usuario.nombre would cause an error).
    private nombre: string;
    private apellido: string;
    private activo: boolean;

    /**
     * The constructor runs automatically when you create a new instance with 'new Usuario(...)'.
     * 'activo: boolean = true' is a default parameter — if no value is passed, it defaults to true.
     */
    constructor(nombre: string, apellido: string, activo: boolean = true) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.activo = activo;
    }

    // Public methods (public by default) act as controlled access points
    // to the private properties. This pattern is called "encapsulation".

    /** Returns the user's first name */
    getName(): string {
        return this.nombre;
    }

    /** Returns the user's full name (first + last) */
    getProfile(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    /** Returns whether the user is still active */
    isStillActive(): boolean {
        return this.activo;
    }
}