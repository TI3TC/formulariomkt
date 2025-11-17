 const form = document.getElementById('form-lead');
    const telaForm = document.getElementById('tela-form');
    const telaSucesso = document.getElementById('tela-sucesso');
    const telaErro = document.getElementById('tela-erro');
    const btn = document.getElementById('enviarlead');

    // SIMULAÇÃO: e-mails já cadastrados
    const emailsCadastrados = ['teste@teste.com', 'lead@3tc.com.br'];

    function mostrarTelaSucesso() {
      telaForm.style.display = 'none';
      telaErro.style.display = 'none';
      telaSucesso.style.display = 'block';
    }

    function mostrarTelaErro() {
      telaForm.style.display = 'none';
      telaSucesso.style.display = 'none';
      telaErro.style.display = 'block';
    }

    function voltarParaFormulario() {
      telaSucesso.style.display = 'none';
      telaErro.style.display = 'none';
      telaForm.style.display = 'block';
    }

    // deixa visível pro onclick do botão no HTML
    window.voltarParaFormulario = voltarParaFormulario;

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailDigitado = document.getElementById('email').value.trim().toLowerCase();

      btn.disabled = true;
      const textoOriginal = btn.textContent;
      btn.textContent = 'Validando...';

      setTimeout(() => {
        if (!emailDigitado) {
          alert('Preencha o e-mail.');
          btn.disabled = false;
          btn.textContent = textoOriginal;
          return;
        }

        if (emailsCadastrados.includes(emailDigitado)) {
          // e-mail já existe => tela de erro
          mostrarTelaErro();
        } else {
          // sucesso => adiciona na lista simulando cadastro
          emailsCadastrados.push(emailDigitado);
          form.reset();
          mostrarTelaSucesso();
        }

        btn.disabled = false;
        btn.textContent = textoOriginal;
      }, 600);
    });
