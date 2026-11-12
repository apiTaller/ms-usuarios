export declare class UsuariosService {
    private usuarios;
    obtenerTodos(): {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    }[];
    obtenerPorId(id: number): {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    };
    crear(nuevoUsuario: {
        nombre: string;
        email: string;
        rol: string;
    }): {
        nombre: string;
        email: string;
        rol: string;
        id: number;
    };
    actualizar(id: number, datosActualizados: {
        nombre?: string;
        email?: string;
        rol?: string;
    }): {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    };
    eliminar(id: number): {
        mensaje: string;
        eliminado: {
            id: number;
            nombre: string;
            email: string;
            rol: string;
        };
    };
}
