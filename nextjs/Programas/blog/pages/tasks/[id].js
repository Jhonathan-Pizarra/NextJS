import Title from "../../components/title";
import Layout from "../../components/layout";

export default function TaskID({task}) {

    return (
        <div className="card">
            <Layout>
                <Title>Título Tarea</Title>
                <h2>{task.title}</h2>
                <p>Task ID: {task.id}</p>
            </Layout>

        </div>
    )
}

//Server Content Rndering
export async function getServerSideProps({params}) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
    const task = await resp.json();

    return {
        props: {
            task
        }
    }

}