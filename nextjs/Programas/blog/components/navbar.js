import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href='/'>
                <a>Bibliografía</a>
            </Link>
            <Link href='/home'>
                <a>Home</a>
            </Link>
            <Link href='/users'>
                <a>Users</a>
            </Link>
            <Link href='/posts'>
                <a>Posts</a>
            </Link>
            <Link href='/tasks'>
                <a>Tasks</a>
            </Link>
        {/*    <Link href='/posts/[id]' as={`/posts/${3}`}>
                <a>PostID#3</a>
            </Link>*/}
            <style jsx>
                {`
                  nav {
                    padding-top: 10px;
                  }
                  a {
                    padding: 0 10px;
                  }
                `}
            </style>
        </nav>
    )

}