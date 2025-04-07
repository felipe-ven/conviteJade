// Salvar confirmação no localStorage
function confirmarPresenca() {
    let nome = document.getElementById("nome").value.trim();
    let acompanhante = document.getElementById("acompanhante").value.trim();

    if (nome === "") {
        alert("Por favor, digite seu nome.");
        return;
    }

    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

    convidados.push({
        nome: nome,
        email: acompanhante || "Nenhum"
    });

    localStorage.setItem("convidados", JSON.stringify(convidados));

    alert("Presença confirmada com sucesso!");
    document.getElementById("formulario").reset();

    listarConvidados(); // Atualiza a tabela imediatamente
}

// Listar convidados em formato de tabela
function listarConvidados() {
    let convidados = JSON.parse(localStorage.getItem("convidados")) || [];

    let tabela = document.getElementById("lista-convidados");
    tabela.innerHTML = ""; // Limpa a tabela antes de carregar os dados

    convidados.forEach(convidado => {
        let linha = document.createElement("tr");

        let colunaNome = document.createElement("td");
        colunaNome.textContent = convidado.nome;

        let colunaEmail = document.createElement("td");
        colunaEmail.textContent = convidado.email || "Nenhum";

        linha.appendChild(colunaNome);
        linha.appendChild(colunaEmail);
        tabela.appendChild(linha);
    });
}

// Carrega a tabela automaticamente ao abrir a página
window.onload = listarConvidados;


const botao = document.getElementById("botaoConfirmar");

if (botao) {
    const textoOriginal = "Confirmar Presença";
    const textoEmoji = "👍 Eu vou!";

    botao.addEventListener("mouseenter", () => {
        botao.textContent = textoEmoji;
    });

    botao.addEventListener("mouseleave", () => {
        botao.textContent = textoOriginal;
    });

    botao.addEventListener("mousedown", () => {
        botao.textContent = "🎉 Vamos lá!";
    });

    botao.addEventListener("mouseup", () => {
        botao.textContent = textoEmoji;
    });
}

const botaoLocal = document.getElementById("botaoLocal");

if (botaoLocal) {
    const textoOriginalLocal = "Ver Local";
    const textoEmojiLocal = "📍 Onde é?";

    botaoLocal.addEventListener("mouseenter", () => {
        botaoLocal.textContent = textoEmojiLocal;
    });

    botaoLocal.addEventListener("mouseleave", () => {
        botaoLocal.textContent = textoOriginalLocal;
    });

    botaoLocal.addEventListener("mousedown", () => {
        botaoLocal.textContent = "🚗 Partiu!";
    });

    botaoLocal.addEventListener("mouseup", () => {
        botaoLocal.textContent = textoEmojiLocal;
    });
}

