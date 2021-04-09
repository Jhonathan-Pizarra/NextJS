export default function Title(props) {
    return(
       <div>
           <h1>{props.children}</h1>
           <style jsx>
               {`
                  h1 {
                    margin: 0;
                    font-size: 3rem;
                    text-align: center;
                  }
                `}
           </style>
       </div>
    )
}