import Link from 'next/link'
import Image from 'next/image'

import "./Cabecalho.scss"


import Check from "../../../public/check.png";
import Progresso from "../../../public/relatorio.png";
import Perfil from "../../../public/perfil.png";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
      <nav className='cabecalho-mobile'>
        <Link className='cabecalho-item' href="/pages/paciente/home">
        <Image src={Check} alt="Icone em vetor para o header em formato de check"/>
        </Link>

        <Link className='cabecalho-item' href="/pages/paciente/progresso">
        <Image src={Progresso} alt="Icone em vetor para representar o progresso do paciente"/>
        </Link>

        <Link className='cabecalho-item' href="/pages/paciente/perfil">
        <Image src={Perfil} alt="Icone em vetor para representar o perfil do paciente"/>
        </Link>
        
      </nav>
    </header>
    
  )
}