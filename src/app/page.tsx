import Head from "next/head";
import Image from "next/image";

import logo from "../assets/svg/logo.svg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Auth_login</title>
        <meta aria-description="Pagina de login do site" />
      </Head>
      <main className="bg-center cover bg-login h-screen w-full">
        <section className="w-full h-full flex justify-center px-12 py-8 max-w-[1520px] ">
          <div className="w-[50%] h-full flex py-4 px-20 justify-center items-start backdrop-blur rounded-l-lg max-w-[500px] border-l border-y border-indigo-900">
            <div className="text-slate-100 text-lg flex flex-col items-start text-start">
              <Image src={logo} alt="Imagem logo" />
              <h2 className="font-bold text-3xl">Mesmo...</h2>
              No dia mais claro, Na noite mais densa, O mal sucumbirá ante a
              minha presença Todo aquele que venera o mal há de penar Quando o
              poder do Lanterna Verde enfrentar!
            </div>
          </div>
          <form className="flex flex-col items-center w-[50%] rounded-r-lg bg-slate-100 max-w-[500px]">
            <h1 className="">Bem-vindo</h1>
            <input />
            <input />
            <input />
            <input />
          </form>{" "}
        </section>
      </main>
    </>
  );
}
