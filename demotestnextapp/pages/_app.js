import "../styles/globals.css";
import Navbar from "../component/Navbar";
import Structure from "../component/Structure";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Structure>
        <Navbar />
        <Component {...pageProps} />
      </Structure>
    </div>
  );
}

export default MyApp;
