import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <h1 style={{
      border: "2px solid red",
      margin: 0

    }}>hello</h1>
   <Component {...pageProps} /> 
  </div>
  
}

export default MyApp
