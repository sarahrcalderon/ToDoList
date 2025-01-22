export function adicionarTarefa() {
  $('#adicionar-tarefa-btn').click(function () {
    const textoTarefa = $('#tarefa-input').val().trim();

    if (textoTarefa !== '') {
      const itemTarefa = `
        <li class="item-tarefa">
          <span class="texto-tarefa">${textoTarefa}</span>
          <button class="btn-excluir">Excluir</button>
        </li>
      `;

      $('#lista-tarefas').append(itemTarefa);
      $('#tarefa-input').val(''); 
    } else {
      alert('Por favor, insira uma tarefa.');
    }
  });
}

export function marcarTarefaConcluida() {
  $('#lista-tarefas').on('click', '.texto-tarefa', function () {
    $(this).parent().toggleClass('concluida');
  });
}

export function removerTarefa() {
  $('#lista-tarefas').on('click', '.btn-excluir', function () {
    $(this).parent().remove();
  });
}
