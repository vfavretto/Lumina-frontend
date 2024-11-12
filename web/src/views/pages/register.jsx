import React from 'react';
import { Link } from "react-router-dom";
import "../../assets/styles/register.css";
 
const Register = () => {
  return (
<main className="profile-page">
<div className="container">
<h1>Complete Seu Perfil</h1>
<form>
<section className="representative-info">

<h2>Cadastro Representante</h2>
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="text" placeholder="Nome" />
    </div>
    </div>
  </div>

  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="email" placeholder="E-mail" />
    </div>
    </div>
  </div>

  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="tel" placeholder="Telefone" />    </div>
    <div class="col">
    <input type="text" placeholder="CPF" />    </div>
  </div>
  </div>

</section>
 
          <section className="company-info">
<h2>Cadastro Empresa</h2>
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="text" placeholder="Nome" />    </div>
    <div class="col-md-3">
    <select>
<option value="">Empresa</option>
<option value="">Fornecedor</option>
<option value="">Ambos</option>
                {}
</select>  </div>
  </div>
  </div>


  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="email" placeholder="E-mail Empresa" />
    </div>
    <div class="col">
    <input type="url" placeholder="Site" />
    </div>
    </div>
  </div>

  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="tel" placeholder="Telefone" />
    </div>
    <div class="col">
    <input type="text" placeholder="CNPJ" />
    </div>
    </div>
  </div>

  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="text" placeholder="Endereço Comercial" />
    </div>
    <div class="col-md-3">
    <input type="text" placeholder="CEP" />
    </div>
    </div>
  </div>

  <div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
    <input type="text" placeholder="Cidade" />
    </div>
    <div class="col">
    <input type="text" placeholder="UF" />
    </div>
    <div class="col">
    <input type="text" placeholder="País" />
    </div>
    </div>
  </div>
  <div class="container text-center">
<textarea placeholder="Descrição Empresa"></textarea>
</div>

</section>
 
          <section className="social-media">
<h2>Redes Sociais</h2>

<div class="container text-center" className="formRedes">
  <div class="row align-items-start" >
    <div class="col">
    <input type="url" placeholder="LinkedIn" />
    </div>
    <div class="col">
    <input type="url" placeholder="Instagram"  />
    </div>
    <div class="col">
    <input type="url" placeholder="Facebook" />
    </div>
  </div>
  </div>



</section>
 <div className='saveButton'>

 <button type="submit" className="save-button">SALVAR</button>

 </div>
 
</form>
</div>
</main>
  );
};
 
export default Register;