const form = document.getElementById('LoginForm');
const erro = document.getElementById('erro');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const botao = form.querySelector('button');

  if (!email || !senha) {
    erro.textContent = 'Preencha todos os campos.';
    return;
  }

  botao.disabled = true;
  botao.textContent = 'Entrando...';

  setTimeout(() => {
    const usuarioValido = {
      email: 'email@teste.com',
      senha: '123456',
      id: 1
    };

    if (email === usuarioValido.email && senha === usuarioValido.senha) {
      console.log('Login realizado com sucesso!');
      erro.textContent = '';
    } else {
      erro.textContent = 'Credenciais inválidas.';
    }

    botao.disabled = false;
    botao.textContent = 'Entrar';
  }, 800);
});
