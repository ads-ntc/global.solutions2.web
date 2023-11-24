"use client";

import { useEffect, useState } from "react";


import MyModal from '../../../../components/Alarme/Alarme.jsx';


import Link from "next/link"
import Image from "next/image"

import Lupa from "../../../../../public/lupa.png"
import Adicionar from "../../../../../public/adicionar.png"
import "../../../../components/Styles/profissional-pesquisa.scss"


export default function PesquisarPaciente(){
    

    const [users, setUsers] = useState([]);
    const [inputId, setInputId] = useState('');
    const fetchData = async (url) => {
        try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new Error("Resposta não contém JSON válido");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
            setUsers(data);
        } else if (typeof data === "object" && data !== null) {
            setUsers([data]);
        } else {
            console.error("Erro: Os dados não estão no formato esperado.");
        }
        } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
        }
    };

    const handleInputChange = (event) => {
        setInputId(event.target.value);
    };

    const handleFetchData = () => {
        const url = inputId ? `http://localhost:3000/api/pacientess/${inputId}` : `http://localhost:3000/api/pacientess`;
        fetchData(url);
    };

    const handleShowAll = () => {
        const url = `http://localhost:3000/api/pacientess/[id]`;
        fetchData(url);
    };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  

    return(
        <>
        <section className="container-pesquisar-paciente">
            <div className="container-boasvindas">
                <h1>Olá, Nome do Usuario {} </h1>
                <p>Vamos acompanhar os seus pacientes?</p>
            </div>
             
            <div className="container-pesquisa">
                <input className="pesquisa-paciente" 
                type="search"
                id="inputId"
                value={inputId}
                onChange={handleInputChange}
                placeholder="Digite o ID do Paciente" />
                <Image url={Lupa} alt="Vetor do icone em formato de Lupa para pesquisa"/>

                <div>
                 <button className="search-button" onClick={handleFetchData}>BUSCAR USUÁRIO</button>
                </div>
            </div>
           
            <div className="container-tabela">
                <h1>Dados do Paciente</h1>
                <table className="table-dados-pesquisar">
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <th className="item-titulo-tabela">Nome Completo</th>
                            <td className="item-dado-tabela">{user.nome}</td>
                        </tr>
                        ))}
                    </tbody>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <th  className="item-titulo-tabela">CPF</th>
                            <td className="item-dado-tabela">{user.cpf}</td>
                        </tr>
                         ))}
                    </tbody>
                    <tbody>
                        {users.map((user, index) => (
                         <tr key={index}>
                            <th  className="item-titulo-tabela">ID Paciente</th>
                            <td className="item-dado-tabela">{user.id}</td>
                        </tr>
                         ))}
                    </tbody>
                    <tbody>
                        {users.map((user, index) => (
                         <tr key={index}>
                            <th  className="item-titulo-tabela">Data de Aniversário</th>
                            <td className="item-dado-tabela">{user.dataaniversario}</td>
                        </tr>
                         ))}
                    </tbody>
                   
                </table>
            </div>
            <div className="container-button">
                <button onClick={openModal} className="btn-adicionar">
                    NOVA MEDICAÇÃO
                    <Image src={Adicionar} alt=""/>
                    </button>
            </div>
            <div className="modal-container">
                <MyModal
                    isOpen={modalIsOpen}
                    closeModal={closeModal}
                    contentLabel="Nova Medicação"
                />
            </div>
        </section>
        
        </>
    )

}