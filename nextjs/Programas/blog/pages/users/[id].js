import {useRouter} from 'next/router';
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function UserID({user}) {
    const router = useRouter();

    if (router.isFallback){
        return <div>Cargando...</div>
    }

    return (
            <Layout>
                <Title>User Detalle</Title>
                <div className='card'>
                    <img src={`/images/${user.id}.jpg`}/>
                    <h2>User ID: {user.id}</h2>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>

                <style jsx>
                    {`
                      .card {
                        margin: 1rem;
                        flex-basis: 45%;
                        padding: 1.5rem;
                        text-align: left;
                        color: inherit;
                        text-decoration: none;
                        border: 1px solid #eaeaea;
                        border-radius: 10px;
                        transition: color 0.15s ease, border-color 0.15s ease;
                      }
              
                      .card:hover,
                      .card:focus,
                      .card:active {
                        color: #0070f3;
                        border-color: #0070f3;
                      }
              
                      .card h3 {
                        margin: 0 0 1rem 0;
                        font-size: 1.5rem;
                      }
              
                      .card p {
                        margin: 0;
                        font-size: 1.25rem;
                        line-height: 1.5;
                      }
                    `}
                </style>
                </div>
            </Layout>
    )
}

export async function getStaticPaths() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await resp.json();

    const paths = users.map(user => {
       return {
           params: {id: `${user.id}` }
       }
    });

    return {
        paths, //esta propiedad determina cuales son los paths que van a ser pre-renderiados
        fallback: true //true le dice a NextJS que primero renderize los paths /user/1 y /users/2
        //Si el usario crea un nuevo usuario, o accede a una ruta que no pre-renderizamos, NextJS va a mostrar un "fallback" mientras se genera el HTML y la información que alimenta a ese path (Como cuando ingresamos por primera vez a FB aparece un Cargando...)
    }
}

export async function getStaticProps({params}) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await resp.json();
    return {
        props: {
            user
        }
    }
}