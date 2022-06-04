<h1 align="center">Formulário de cadastro e login</h1>

<h3 align="center">Utilizando JavaScript para implementar itens complexos na página web.</h3>

---

<p align="center"><b>Aluno: </b>João Lucas De Assis Oliveira</p>

<p align="center"><b>Professor: </b>Ricardo Mendes Costa Segundo</p>

<p align="center"><b>Turma: </b>cc1m</p>

---

## Sobre

* Desenvolvimento de uma Página Web de acordo com os wireframes criados na matéria de ***Experiência e Interface com o Usuário***.

* Ir para a página inicial do [formulário](https://joaolucasassis.github.io/uvv_csw_1_cc1m/formulário_cadastro).

## Como funciona o JavaScript

* Primeiramente, para o cadastro do usuário, os dados digitados nos inputs da página de cadastro são armazenados no LocalStorage do Browser.

~~~javascript
    let nomeCad = document.getElementById('nome').value
    let usuarioCad = document.getElementById('usuarioCad').value
    let novaSenha = document.getElementById('novaSenha').value
    let confirmeSenha = document.getElementById('confirmeSenha').value
      
    localStorage.setItem('nome', nomeCad.replace(/\s+/g, ''))
    localStorage.setItem('usuario', usuarioCad.replace(/\s+/g, ''))
    localStorage.setItem('senha', novaSenha.replace(/\s+/g, ''))
~~~

* Após a validação do cadastro, o JavaScript retorna o usuário para a página inicial.

* Além disso, são retirados os dados armazenados no LocalStorage e comparados com os dados digitados nos inputs da página inicial.

~~~javascript
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
  
    let usuarioCad = localStorage.getItem('usuario')
    let novaSenha = localStorage.getItem('senha')
    
    if (usuario.toLowerCase().replace(/\s+/g, '') == usuarioCad.toLowerCase() && senha.replace(/\s+/g, '') == novaSenha) {
    ...
    }
~~~

* Com a confirmação, o JavaScript encaminha o usuário para a página principal.
