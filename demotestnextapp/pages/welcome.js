import Head from "next/head"
import { useState } from "react"

export default function welcome({data}) {
    const [ counter, setCounter] = useState(0);
    console.log(data)
    return (
        <div>
            <Head>
                <title>welcome</title>
            </Head>
           <div>Hello User</div>
           <h1>{counter}</h1>
           <button onClick={() => setCounter((prev) => prev+1)}>increase</button>
        </div>
    )
}
// https://jsonplaceholder.typicode.com/todos
// geting the reponse from the rest api
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return {
        props:{
            data
        }
    }
}


