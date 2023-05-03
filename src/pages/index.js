import Head from "next/head";
import About from "../../components/Home/About/About";
import Body from "../../components/Home/Body/Body";
import Footer from "../../components/Home/Footer/Footer";
import Header from "../../components/Home/Header/Header";

export default function Home() {
  return (
    <>
    <Head>
      <meta property="og:image:type" content="/thumbnail.png"/>
    </Head>
      <Header/>
      <About/>
      <Footer/>
    </>
  )
}
