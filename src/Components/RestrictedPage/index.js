
function RestrictedPage ({isLoggedIn, user, Login, LogOut }){

    return (
        <div>
        {
        isLoggedIn ? (<div><h1>Bem vindo {user}</h1><button onClick={LogOut}>Exit Page</button></div>)
        :
        (<div><h1>você não pode acessar essa página</h1><button onClick={Login}>Enter Page</button></div>)
        }
        </div>
      
    )
}
export default RestrictedPage;