import Head from "next/head";
import About from "../../components/Home/About/About";
import Body from "../../components/Home/Body/Body";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/Header/Header";

export default function Home() {
  return (
    <>
    <Head>
      <meta property="og:image" content="https://ibb.co/s6wwCg3"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="1024"/>
      <meta property="og:image:height" content="1024"/>
    </Head>
      <Header/>
      <About/>
      <Footer/>
    </>
  )
}
