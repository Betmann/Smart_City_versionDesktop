import React from 'react';
import estilos from './Cabecalho.module.css';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa'; // Importando ícones

export function Cabecalho() {
    return (
        <header className={estilos.conteiner}>
            <div className={estilos.tituloContainer}>
                <p className={estilos.titulo}>SmartCity</p> {/* Adicionando classe de estilo para o título */}
            </div>
            <div className={estilos.opcoesContainer}>
                <div className={estilos.perfilContainer}>
                    <FaUserCircle className={estilos.icon} />
                    <p className={estilos.texto}>Nome do Usuário</p> {/* Adicionando classe de estilo para o texto */}
                </div>
                <div className={estilos.opcoesTema}>
                    <FaSun className={estilos.icon} />
                    <FaMoon className={estilos.icon} />
                </div>
            </div>
        </header>
    );
}
