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
        <Image src={Check} alt=""/>
        </Link>

        <Link className='cabecalho-item' href="/pages/paciente/progresso">
        <Image src={Progresso} alt=""/>
        </Link>

        <Link className='cabecalho-item' href="/pages/paciente/perfil">
        <Image src={Perfil} alt=""/>
        </Link>
        
      </nav>
    </header>
    
  )
}