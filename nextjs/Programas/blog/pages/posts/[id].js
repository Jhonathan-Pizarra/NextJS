import {useRouter} from 'next/router';
import Title from "../../components/title";
import Layout from "../../components/layout";

export default function PostID() {
    const router = useRouter();

    return (
        <div>
            <Layout>
                <Title>Título Posts</Title>
                <h2>Detalle Post</h2>
                <p>Post ID: {router.query.id}</p>
            </Layout>

        </div>
    )
}

