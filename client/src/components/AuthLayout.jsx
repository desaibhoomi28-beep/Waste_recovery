import "../styles/Auth.css";

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-page">

      <div className="auth-left">

        <div className="overlay">

          <h1>🌿 EcoBridge</h1>

          <h2>{title}</h2>

          <p>{subtitle}</p>

        </div>

      </div>

      <div className="auth-right">

        <div className="auth-card">

          {children}

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;