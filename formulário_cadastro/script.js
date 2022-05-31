
function cadastrar() {
    let nomeCad = document.getElementById('nome').value
    let usuarioCad = document.getElementById('usuarioCad').value
    let novaSenha = document.getElementById('novaSenha').value
    let confirmeSenha = document.getElementById('confirmeSenha').value

    if (nomeCad.length == 0 || usuarioCad.length == 0 || novaSenha.length == 0 || confirmeSenha.length == 0) {
      
      alert('[ERRO] Preencha os campos obrigatórios antes de finalizar o cadastro.')
      
    } else if (novaSenha == confirmeSenha) {
      
      localStorage.setItem('nome', nomeCad.replace(/\s+/g, ''))
      localStorage.setItem('usuario', usuarioCad.replace(/\s+/g, ''))
      localStorage.setItem('senha', novaSenha.replace(/\s+/g, ''))
      
      alert('Dados salvos com sucesso!')

      let homeLink = document.getElementById('homeLink')
      homeLink.href = "home.html"
    } else {
      alert('[ERRO] Falha ao confirmar senha.')
    }
  }
  
  function entrar() {
    let usuario = document.getElementById('usuario').value
    let senha = document.getElementById('senha').value
  
    let usuarioCad = localStorage.getItem('usuario')
    let novaSenha = localStorage.getItem('senha')

    if (usuarioCad == null || novaSenha == null) {
      alert('[ERRO] Nenhum cadastro armazenado.')
    } else if (usuario.length == 0 || senha.length == 0) {
        alert('[ERRO] Preencha todos os campos.')
    } else if (usuario.toLowerCase().replace(/\s+/g, '') == usuarioCad.toLowerCase() && senha.replace(/\s+/g, '') == novaSenha) {
        let loginLink = document.getElementById('loginLink')
        loginLink.href = "login.html"
    } else {
        alert('[ERRO] Usuário ou senha incorretos.')
    }
  }