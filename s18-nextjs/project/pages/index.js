import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>Hola</p>
      <Link href="/pruebas"> Ir a subpagina</Link>
    </div>
  );
}
