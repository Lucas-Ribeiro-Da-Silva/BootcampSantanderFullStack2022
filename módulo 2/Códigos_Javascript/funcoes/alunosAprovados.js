const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media) {
	let aprovados = [];

	for (let i = 0; i < alunos.length; i++) {
		//object destructing
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
		/*
		if (arr[i].nota >= media) {
			aprovados.push(arr[i].nome);
		}
		*/
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));
