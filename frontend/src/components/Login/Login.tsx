import React, { useState } from "react";
import "./Login.scss";
import { LoginCredentials, LoginProps } from "./models/LoginModels";

const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Login submitted:", credentials);

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError("Neuspešna prijava. Proverite korisničko ime i lozinku.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <h2 className="login__title">Prijava</h2>

      {error && <div className="login__error">{error}</div>}

      <form onSubmit={handleSubmit} className="login__form">
        <div className="login__form-group">
          <label htmlFor="username" className="login__label">
            Korisničko ime
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="login__input"
            placeholder="Unesite korisničko ime"
            required
            disabled={isLoading}
          />
        </div>

        <div className="login__form-group">
          <label htmlFor="password" className="login__label">
            Lozinka
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="login__input"
            placeholder="Unesite lozinku"
            required
            disabled={isLoading}
          />
        </div>

        <button type="submit" className="login__button" disabled={isLoading}>
          {isLoading ? "Prijavljivanje..." : "Prijavi se"}
        </button>
      </form>
    </div>
  );
};

export default Login;
