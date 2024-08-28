function Login(){
    return (
        <>
            <h1>LOGIN</h1>

            <fieldset>
                <legend>Insira seus dados</legend>
                <form action="/login">
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" placeholder="nome@email.com" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="Senha123!" required />
                </div>
                <button type="submit">Login</button>
                <button type="button">Cadastre-se grátis</button>
                </form>
            </fieldset>
        </>
    );
}

export default Login;