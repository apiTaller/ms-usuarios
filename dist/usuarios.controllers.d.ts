import { UsuariosService } from './usuarios.services';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    obtenerUsuarios(): {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    }[];
    obtenerUsuarioPorId(id: string): {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    };
    crearUsuario(body: {
        nombre: string;
        rol: string;
    }): {
        nombre: string;
        email: string;
        rol: string;
        id: number;
    };
    actualizarUsuario(id: string, body: {
        nombre?: string;
        rol?: string;
    }): {
        id: number;
        nombre: string;
        email: string;
        rol: string;
    };
    eliminarUsuario(id: string): {
        mensaje: string;
        eliminado: {
            id: number;
            nombre: string;
            email: string;
            rol: string;
        };
    };
}
