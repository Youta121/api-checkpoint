import {useRef,useState,useEffect} from 'react';


const login =() =>{
    const userRef = useRef () ;
    const errRef = useRef () ;

    const [user,setUser]= useState('');
    const [pwd,setPwd]= useState('');
    const [errmsg,setErrmsg]= useState('');
    const [success,setSuccess]= useState(false);
    useEffect(() => {
        userRef.current.focus();
    },[])
    useEffect(() => {
        setErrmsg('');
    },[user,pwd])

    return (
        <section>
            <p ref={errRef} className={errmsg? "errmsg ": "offscreen"}aria-live="assertive"> {errmsg}</p>
            <h1>Sign In </h1>
            <form>
                <label htmlFor="Username">Username :</label>
                <input 
                type='text'  id="username" 
                ref={userRef} autoComplete="off" 
                onChange={(e)=>setUser(e.target.value)} value={user}
                required />

                <label htmlFor="password"><br></br>Password:</label>
                <input 
                type="password"  id="passwrod" 
                
                onChange={(e)=>setPwd(e.target.value)} value={pwd}
                required />
                <button>Sign In</button>
            </form>

        </section>
    )
}



export default login;