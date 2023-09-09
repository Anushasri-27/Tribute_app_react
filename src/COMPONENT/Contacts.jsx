import '../styles/App.scss';
function Contacts(){
return(
    <div className="form">
        <label  className='label'>name</label>
        <input type='text' placeholder='ENTER NAME HERE'></input> 
        <label  className='label'>Surname</label>
        <input type='text' placeholder='ENTER NAME LAST NAME HERE'></input> 
        <label  className='label'>Email  </label>
        <input type='email' placeholder='ENTER Email HERE'></input> 
        <label className='label' >contact number </label>
        <input type='text' placeholder='ENTER Contact number'></input> 
        <button type='submit'>Submit</button>
    </div>
)

} ;

export default Contacts;