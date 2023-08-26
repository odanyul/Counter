const LoginForm = () => {
    return (
        <form action="">
            <input type="email" placeholder="Enter email" />

            <input type="password" placeholder="Enter password" />

            <div className="login-cta-container">
                <p>
                    No account?
                    <a href="#">Sign up</a>
                </p>

                <button type="submit">Sign in</button>
            </div>
        </form>
    );
};

export default LoginForm;
