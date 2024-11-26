import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "../../assets/styles/login.css";
import imgbar from "../../assets/images/Perfil/mensagensPerfil.png";

const Login = () => {
  const [loginError, setLoginError] = useState(null);
  const [registrationError, setRegistrationError] = useState(null);
  const [loginUserName, setLoginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);

  const { handleLogin, handleRegister, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = async (e) => {
    e.preventDefault();
    setLoginError(null);

    try {
      const response = await handleLogin(loginUserName, loginPassword);
      const empresaId = response.empresa._id;
      navigate(`/profile/${empresaId}`);
    } catch (error) {
      console.error("Erro no login:", error);
      setLoginError("Não foi possível fazer login. Verifique suas credenciais.");
    }
  };

  const validatePassword = (password) => {
    const errors = [];

    if (password.length < 8) {
      errors.push("Senha deve ter no mínimo 8 caracteres");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Senha deve conter pelo menos uma letra maiúscula");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Senha deve conter pelo menos uma letra minúscula");
    }
    if (!/\d/.test(password)) {
      errors.push("Senha deve conter pelo menos um número");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Senha deve conter pelo menos um caractere especial");
    }

    return errors;
  };

  const onRegister = async (e) => {
    e.preventDefault();
    setRegistrationError(null);

    if (registrationPassword !== confirmPassword) {
      setRegistrationError("As senhas não coincidem!");
      return;
    }

    const passwordErrors = validatePassword(registrationPassword);
    if (passwordErrors.length > 0) {
      setRegistrationError(passwordErrors[0]); // Show first error
      return;
    }

    try {
      const registrationResponse = await handleRegister(
        fullName,
        email,
        registrationPassword
      );
      const empresaId = registrationResponse.empresa?._id;
      navigate(`/register/${empresaId}`);
    } catch (error) {
      console.error("Erro no registro:", error);
      setRegistrationError("Não foi possível realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <div className="body">
      <div className="divMae container-fluid">
        <div className="fundinRegistro row">
          <div className="col divDireita">
            <div className="justify-content-start bemVindo">
              {loginError && <div className="alert alert-danger">{loginError}</div>}
              <div>
                <h2 className="d-flex text-white welcome">BEM-VINDO!</h2>
              </div>
              <div className="row justify-content-center">
                <button
                  type="submit"
                  className="btn btn-light col-sm-8 btnLogin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                  </svg>{" "}
                  Fazer login com o Google
                </button>
              </div>
              <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-light col-sm-8 btnLogin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>{" "}
                  Fazer login com o Facebook
                </button>
              </div>
              <div className="row justify-content-center">
                <button
                  type="button"
                  className="btn btn-light col-sm-8 btnLogin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-twitter-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>{" "}
                  Fazer login com o Twitter-X
                </button>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <hr className="hr-bw risquinho" />
                  </div>
                  <div className="col text-white">
                    <p className="or">OU</p>
                  </div>
                  <div className="col">
                    <hr className="hr-bw risquinho" />
                  </div>
                </div>
              </div>
              <form
                className="d-flex justify-content-center bemVindo"
                onSubmit={onLogin}
              >
                <div className="col-sm-8">
                  <div className="mb-3">
                    <label
                      htmlFor="loginUserName"
                      className="form-label"
                    ></label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail ou nome de usuário"
                      name="userName"
                      id="loginUserName"
                      value={loginUserName}
                      onChange={(e) => setLoginUserName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="loginPassword"
                      className="form-label"
                    ></label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Senha"
                      name="password"
                      id="loginPassword"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>
                  <div className="row justify-content-center">
                    <button type="submit" className="btn btn-success col-sm-4">
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col zikaMargem">
            <div className="justify-content-end formsCadastro">
              <form className="formularioCadastro" onSubmit={onRegister}>
                {registrationError && <div className="alert alert-danger">{registrationError}</div>}
                
                <div className="textCadastro">
                  <h3 className="d-flex text-white">CADASTRE-SE AQUI</h3>
                </div>
                <div className="col-md-12 inputCadastro">
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-8">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="🌐 Nome Completo"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="email"
                      className="col-sm-2 col-form-label"
                    ></label>
                    <div className="col-sm-8">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="✉️ Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3 position-relative">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-8 position-relative">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="🔑 Digite uma senha"
                        value={registrationPassword}
                        onChange={(e) => setRegistrationPassword(e.target.value)}
                        onFocus={() => setShowPasswordTooltip(true)}
                        onBlur={() => setShowPasswordTooltip(false)}
                        required
                      />
                      {showPasswordTooltip && (
                        <div 
                          className="password-tooltip" 
                          style={{
                            position: 'absolute',
                            top: '0',
                            left: '105%',
                            width: '250px',
                            backgroundColor: '#262625',
                            color: '#A0BB9C',
                            padding: '8px',
                            borderRadius: '5px',
                            fontSize: '17px',
                            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                            zIndex: 10,
                            border: '1px solid #A0BB9C'
                          }}
                        >
                          Sua senha deve conter:
                          <ul style={{
                            listStyleType: 'none', 
                            paddingLeft: '10px',
                            margin: '5px 0 0 0'
                          }}>
                            <li>✦ 8 ou mais caracteres</li>
                            <li>✦ 1 maiúscula</li>
                            <li>✦ 1 minúscula</li>
                            <li>✦ 1 número</li>
                            <li>✦ 1 caractere especial</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-8">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="🗝️ Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button type="submit" className="btn btn-success col-sm-5">
                      Cadastrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="d-block imagemBaixo p-0 justify-content-center">
            <img className="baixoImg" src={imgbar} alt="Imagem de fundo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
