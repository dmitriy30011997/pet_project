// Получение элементов DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Обработчик отправки формы
taskForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Отменить стандартное поведение отправки формы

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    // Создание нового элемента списка задач
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Создание текста задачи
    const taskTextElement = document.createElement('span');
    taskTextElement.classList.add('task-text');
    taskTextElement.textContent = taskText;

    // Создание кнопки удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '&#10006;';

    // Обработчик нажатия на кнопку удаления задачи
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    // Добавление текста задачи и кнопки удаления в элемент списка задач
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    // Добавление элемента списка задач в список
    taskList.appendChild(taskItem);

    // Очистка поля ввода
    taskInput.value = '';
  }
});
