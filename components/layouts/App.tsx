import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";

const AppLayout = ({ children }) => (
  <>
    <Head>
      <title>htci.</title>
    </Head>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </>
);
export default AppLayout;
