import Title from "../../components/title";
import Layout from "../../components/layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Index({tasks}) {

    return(
        <div>
            <Layout>
                <Title>Título ToDo</Title>
                <div className="grid">
                    {tasks.map(task => {
                        return (
                            <Link href={`/tasks/[id]`} as={`/tasks/${task.id}`} key={task.id}>
                                <a className="card">
                                    <h3>{task.title}</h3>
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </Layout>
            <p>Página de Tareas!</p>
        </div>
    )
}

//Server Content Rndering
export async function getServerSideProps() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
    const tasks = await resp.json();

    return {
        props: {
            tasks
        }
    }

}