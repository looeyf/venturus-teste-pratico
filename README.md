
# Vue.js Venturus Test


Olá! Seja bem vindo ao teste de Vue.js, vamos juntos desenvolver alguns items do projeto:

 1. **Mostrar o ID do usuário no card**

	Com base na imagem dentro do projeto './design/layout.png' mostrar o id no card de usuário e usar estilos para chegar o mais proximo possível do layout

	<img src="https://github.com/micheldpcarlos/vnt-vue-test/raw/main/design/layout.png" width="300" />




2. **Limitar a lista a apenas 100 elementos**

	Temos uma lista de 1k itens, devemos renderizar apenas 100 elementos exibidos, mas se atente ao fato de que precisaremos aplicar filtros e função de deletar posteriormente considerando o conjunto todo e não só o exibido.



3. **Implementar ordenação por Id**

	Botão de ordenação por id, que deve usar o conjunto todo para ordenar.



4. **Implementar ordenação por Nome**

	Botão de ordenação por nome, que deve usar o conjunto todo para ordenar.



5. **Implementar botão de remoção**
	
	Botão que remove o primeiro item da lista que está sendo exibida, é importante lembrar que temos uma lista total de 1000 items, então ao excluir um ainda seremos capases de mostrar 100.
	- O botão precisa poder deletar mais de uma vez e em qualquer ordenação.
	- Uma vez deletado, o item não deve voltar a ser exibido, mesmo que se mude a ordem.


É importante que não haja conflito entre as funcionalidades, vamos seguir a implementação na ordem proposta.



## Iniciando o projeto

### Instalar dependencias
```
npm install
```

### Iniciar ambiente de desenvolvimento
```
npm run serve
```
