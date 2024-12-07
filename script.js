// Lista de empresas simulada
const empresas = {
    "09.461.639/0001-49": {
        cartao: "Alimentare",
        login: "09.461.639/0001-49",
        senha: "22488004",
        taxaAlimentacao: "2,20%",
        taxaRefeicao: "N/A",
        site: "https://www.alimentarebeneficios.com.br/"
    },
    "09.461.639/0002-20": {
        cartao: "Alimentare",
        login: "09.461.639/0002-20",
        senha: "6628001",
        taxaAlimentacao: "2,20%",
        taxaRefeicao: "N/A"
    },
    "09.461.639/0004-91": {
        cartao: "Alimentare",
        login: "09.461.639/0004-91",
        senha: "17168006",
        taxaAlimentacao: "2,20%",
        taxaRefeicao: "N/A"
    },
    "09.461.639/0005-72": {
        cartao: "Alimentare",
        login: "09.461.639/0005-72",
        senha: "19668001",
        taxaAlimentacao: "2,20%",
        taxaRefeicao: "N/A"
    },
    "09.461.639/0006-53": {
        cartao: "Alimentare",
        login: "09.461.639/0006-53",
        senha: "21588005",
        taxaAlimentacao: "2,20%",
        taxaRefeicao: "N/A"
    },
    "09.461.639/0007-34": {
        cartao: "Alimentare",
        login: "09.461.639/0007-34",
        senha: "23478002",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0008-15": {
        cartao: "Alimentare",
        login: "09.461.639/0008-15",
        senha: "23898006",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0009-04": {
        cartao: "Alimentare",
        login: "09.461.639/0009-04",
        senha: "31798009",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0010-30": {
        cartao: "Alimentare",
        login: "09.461.639/0010-30",
        senha: "28248005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0011-10": {
        cartao: "Alimentare",
        login: "09.461.639/0011-10",
        senha: "35018008",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0012-00": {
        cartao: "Alimentare",
        login: "09.461.639/0012-00",
        senha: "40318007",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0013-82": {
        cartao: "Alimentare",
        login: "09.461.639/0013-82",
        senha: "48558004",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0015-44": {
        cartao: "Alimentare",
        login: "09.461.639/0015-44",
        senha: "50538005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0016-25": {
        cartao: "Alimentare",
        login: "09.461.639/0016-25",
        senha: "53088008",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0017-06": {
        cartao: "Alimentare",
        login: "09.461.639/0017-06",
        senha: "56698002",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0018-97": {
        cartao: "Alimentare",
        login: "09.461.639/0018-97",
        senha: "55438005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0019-78": {
        cartao: "Alimentare",
        login: "09.461.639/0019-78",
        senha: "55448001",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0020-01": {
        cartao: "Alimentare",
        login: "09.461.639/0020-01",
        senha: "55458004",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0021-92": {
        cartao: "Alimentare",
        login: "09.461.639/0021-92",
        senha: "55468009",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0022-73": {
        cartao: "Alimentare",
        login: "09.461.639/0022-73",
        senha: "55478003",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0023-54": {
        cartao: "Alimentare",
        login: "09.461.639/0023-54",
        senha: "55488008",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0024-35": {
        cartao: "Alimentare",
        login: "09.461.639/0024-35",
        senha: "58718005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0025-16": {
        cartao: "Alimentare",
        login: "09.461.639/0025-16",
        senha: "57508000",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0026-05": {
        cartao: "Alimentare",
        login: "09.461.639/0026-05",
        senha: "57518005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0027-88": {
        cartao: "Alimentare",
        login: "09.461.639/0027-88",
        senha: "57528001",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0028-69": {
        cartao: "Alimentare",
        login: "09.461.639/0028-69",
        senha: "56708005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0029-40": {
        cartao: "Alimentare",
        login: "09.461.639/0029-40",
        senha: "57558003",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0030-83": {
        cartao: "Alimentare",
        login: "09.461.639/0030-83",
        senha: "57578002",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0031-64": {
        cartao: "Alimentare",
        login: "09.461.639/0031-64",
        senha: "59068005",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0032-45": {
        cartao: "Alimentare",
        login: "09.461.639/0032-45",
        senha: "62518003",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0033-26": {
        cartao: "Alimentare",
        login: "09.461.639/0033-26",
        senha: "64428001",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0034-07": {
        cartao: "Alimentare",
        login: "09.461.639/0034-07",
        senha: "65108002",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0035-98": {
        cartao: "Alimentare",
        login: "09.461.639/0035-98",
        senha: "65188009",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0036-79": {
        cartao: "Alimentare",
        login: "09.461.639/0036-79",
        senha: "65388006",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0037-50": {
        cartao: "Alimentare",
        login: "09.461.639/0037-50",
        senha: "67418003",
        taxaAlimentacao: "2,20%"
    },
    "09.461.639/0038-30": {
        cartao: "Alimentare",
        login: "09.461.639/0038-30",
        senha: "69838001",
        taxaAlimentacao: "2,20%"
    }
};

// Função para buscar a empresa
function buscarEmpresa() {
    const nomeEmpresa = document.getElementById("nomeEmpresa").value.trim();
    const resultadoDiv = document.getElementById("resultadoBusca");

    // Limpa o resultado anterior
    resultadoDiv.innerHTML = "";

    // Verifica se a empresa existe
    const dadosEmpresa = empresas[nomeEmpresa];

    if (dadosEmpresa) {
        let loginFlexHTML = ""; // Variável para armazenar os campos FLEX

        // Adiciona loginFLEX e senhaFLEX apenas se a empresa for Bonus-0149
        if (nomeEmpresa === "Bonus-0149" && dadosEmpresa.loginFLEX && dadosEmpresa.senhaFLEX) {
            loginFlexHTML = `
                <li><strong>LoginFLEX:</strong> ${dadosEmpresa.loginFLEX}</li>
                <li><strong>SenhaFLEX:</strong> ${dadosEmpresa.senhaFLEX}</li>
            `;
        }

        // Verifica se o site contém a palavra "alimentare" e cria um link clicável
        let siteHTML = dadosEmpresa.site ? `<a href="${dadosEmpresa.site}" target="_blank">${dadosEmpresa.site}</a>` : "N/A";

        // Exibe os dados da empresa
        resultadoDiv.innerHTML = `
            <p class="success">Empresa encontrada: <strong>${nomeEmpresa}</strong></p>
            <ul>
                <li><strong>Cartão:</strong> ${dadosEmpresa.cartao}</li>
                <li><strong>Login:</strong> ${dadosEmpresa.login || "N/A"}</li>
                <li><strong>Senha:</strong> ${dadosEmpresa.senha || "N/A"}</li>
                ${loginFlexHTML} <!-- Campos FLEX adicionados aqui -->
                <li><strong>Taxa de Alimentação:</strong> ${dadosEmpresa.taxaAlimentacao}</li>
                <li><strong>Taxa de Refeição:</strong> ${dadosEmpresa.taxaRefeicao || "N/A"}</li>
                <li><strong>Site:</strong> ${siteHTML}</li> <!-- Link adicionado aqui -->
            </ul>
        `;
    } else {
        // Caso a empresa não seja encontrada
        resultadoDiv.innerHTML = `<p class="error">Nenhum resultado encontrado para "${nomeEmpresa}".</p>`;
    }
}
