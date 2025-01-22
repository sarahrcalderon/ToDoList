import { adicionarTarefa, marcarTarefaConcluida, removerTarefa } from './tarefas.js';

$(document).ready(function () {
  adicionarTarefa();
  marcarTarefaConcluida();
  removerTarefa();
});
