import {useState} from 'react'

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

async function handleSubmit(e){
    e.preventDefault();
    setError(null);
    // console.log("Hello!");
    if (username.length < 5) {
       setError("Username should be more than 5 characters in length");
       return 
    }
    console.log(password, password.includes("$"));
    if (!password.includes("$")){
        setError("Password should include $");
        return
    }
    try {
    // throw new Error('Parameter is not a number!');
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({username, password}),
      })
      const result = await response.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
        setError(error.message);
    }
}
    return (
    <>    
        <h2 className='header'>Sign Up</h2> 
        {error && <p>{error}</p>}

        <form onSubmit={handleSubmit}>
            <label>Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>Password: <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button>Submit</button>
        </form>
    </>
    )
}