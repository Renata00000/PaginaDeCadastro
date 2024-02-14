function buscarReprovado(alunos) {
  //ordena os aluno pelo numero de problemas resolvidos e
  // por ordem alfabetica e retorn uma lista ordenada
  const alunosOrdenados = alunos.sort((a, b) => {
    if (a.totalProblemas > b.totalProblemas) {
      return -1; // a deve ser colocado antes de b
    } else if (a.totalProblemas < b.totalProblemas) {
      return 1; // a deve ser colocado depois de b
    } else {
      return a.nome.localeCompare(b.nome); // Compara os nomes em ordem crescente
    }
  });

  const { nome, instancia } = alunosOrdenados.slice(-1)[0]; //pega o ultimo elemento(reprovado)

  return {
    nome,
    instancia,
  };
}

function init() {
  //RECEBE A QUANTIDADE ALUNOS
  const totalAlunos = Number(prompt("Digite a quantidade de alunos : "));
  //LISTA ONDE VAI ARMAZENAR OS ALUNOS
  const alunos = [];
  //MAXIMO DE ALUNOS
  const MAX_ALUNOS = 100;
  //MAXIMO DE PROBLEMAS QUE PODEM SER REVOLVIDOS
  const MAX_PROBLEMAS_RESOLVIDOS = 10;

  //VALIDA A ENTRADA DA QUANTIDADE DE ALUNOS
  if (
    (!totalAlunos || totalAlunos > MAX_ALUNOS) &&
    typeof totalAlunos !== "number"
  ) {
    return;
  }

  //faz um loop for para percorrer a quantidade de alunos e preencher as informações
  for (let i = 0; i < totalAlunos; i++) {
    //preenche o nome do aluno
    let nome = String(prompt(`Digite o nome do ${i + 1} aluno : `));

    //valida o tamanho do nome
    if (nome.length > 20) {
      return;
    }

    //preenche a quantidade de problema resolvido
    let totalProblemas = Number(
      prompt(`Digite a quantidade de problemas resolvidos de ${nome} : `)
    );

    //valida a quantidade problemas resolvidos
    if (totalProblemas > MAX_PROBLEMAS_RESOLVIDOS) {
      return;
    }

    //insere o aluno na lista
    alunos.push({
      instancia: i,
      nome,
      totalProblemas,
    });
  }

  //busca pelo aluno reprovado
  const { nome, instancia } = buscarReprovado(alunos);

  //iprimie o nome do aluno
  console.log(`Intancia ${instancia}`);
  //iprimie o nome do aluno
  console.log(`${nome}`);
}

init();
