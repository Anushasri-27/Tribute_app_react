
export default function AppTitel(props){

   const{
             title="LOST STAR"  ,
             subtitle= "live forever",
   } =props;

   return(
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
   )
};