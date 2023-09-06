import '../styles/navbar.scss';
export default function AppTitel(props){

   const{
             title="LOST STAR"  ,
             subtitle= "live forever",
   } =props;

   return(
        <div className='app-title'>
            <h1 className='title'>{title}</h1>
            <p className="subtitle">{subtitle}</p>
        </div>
   )
};