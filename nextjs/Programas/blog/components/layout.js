import Navbar from "./navbar";

export default function Layout(props) {
    return(
        <div>
            <Navbar/>
            <main>{props.children}</main>
            <style jsx global>
                {`
                   html,
                    body {
                    padding: 0;
                    margin: 0;
                    }
                    * {
                    box-sizing: border-box;
                    }
                `}
            </style>
            <style jsx>
                {`
                  div {
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items:center;
                  }
                  main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                  }
                `}
            </style>
        </div>
    )



}