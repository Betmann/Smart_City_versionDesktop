import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import estilos from './Login.module.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schemaLogin = z.object({
    usuario: z.string().min(5, 'Mínimo de 5 caracteres').max(20, 'Máximo de 10 caracteres'),
    senha: z.string().min(8, 'Informe 8 caracteres').max(8, 'Máximo de 8 caracteres'),
});

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schemaLogin)
    });

    async function obterDadosFormulario(data) {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/', {
                username: data.usuario,
                password: data.senha
            });

            const { access, refresh } = response.data;
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            console.log('Login bem-sucedido!');
            navigate('/inicial'); // Redireciona para a página de sensores
        } catch (error) {
            console.error('Erro de autenticação', error);
        }
    }

    return (
        <div className={estilos.conteiner}>
            <p className={estilos.titulo}>Welcome to </p> 
            <p className={estilos.titulo}>Smart City</p>

            <form className={estilos.formulario} onSubmit={handleSubmit(obterDadosFormulario)}>
                <div className={estilos.inputContainer}>
                    <input
                        {...register('usuario')}
                        className={estilos.campo}
                        placeholder="Usuário"
                    />
                    {errors.usuario && (
                        <p className={estilos.mensagem}>{errors.usuario.message}</p>
                    )}
                </div>

                <div className={estilos.inputContainer}>
                    <input
                        {...register('senha')}
                        type="password"
                        className={estilos.campo}
                        placeholder="Senha"
                    />
                    {errors.senha && (
                        <p className={estilos.mensagem}>{errors.senha.message}</p>
                    )}
                </div>

                <button className={estilos.botao}>Entrar</button>
            </form>
        </div>
    );
}
