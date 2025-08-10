javascript:(function(){
  // Проверяем, не добавлены ли уже элементы
  if (document.getElementById('alisa-button')) return;

  // 1. Создаём кнопку (внизу слева)
  const button = document.createElement('button');
  button.id = 'alisa-button';
  button.innerHTML = '👩‍🦰';
  button.title = 'Открыть Алису';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.left = '20px';
  button.style.width = '50px';
  button.style.height = '50px';
  button.style.borderRadius = '50%';
  button.style.border = '2px solid #fff';
  button.style.backgroundColor = '#ff4a75';
  button.style.color = 'white';
  button.style.fontSize = '24px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '9998';
  button.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
  button.style.transition = 'transform 0.2s, box-shadow 0.2s';

  // Эффект при наведении
  button.onmouseover = () => { button.style.transform = 'scale(1.1)'; button.style.boxShadow = '0 6px 15px rgba(0,0,0,0.3)'; };
  button.onmouseout = () => { button.style.transform = 'scale(1)'; button.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)'; };

  // 2. Создаём всплывающее окно (iframe)
  const modal = document.createElement('div');
  modal.id = 'alisa-modal';
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.bottom = '80px';
  modal.style.left = '20px';
  modal.style.width = '320px';
  modal.style.height = '400px';
  modal.style.borderRadius = '12px';
  modal.style.overflow = 'hidden';
  modal.style.zIndex = '9999';
  modal.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
  modal.style.border = '1px solid #ddd';

  // 3. Встраиваем страницу Алисы через iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://alisa.yandex.ru';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.allow = 'microphone'; // если нужен доступ к микрофону

  modal.appendChild(iframe);

  // 4. Добавляем элементы на страницу
  document.body.appendChild(button);
  document.body.appendChild(modal);

  // 5. Обработчик клика по кнопке
  button.addEventListener('click', function() {
    if (modal.style.display === 'none') {
      modal.style.display = 'block';
    } else {
      modal.style.display = 'none';
    }
  });

  // 6. Закрытие при клике вне окна (опционально)
  document.addEventListener('click', function(e) {
    if (!button.contains(e.target) && !modal.contains(e.target)) {
      modal.style.display = 'none';
    }
  });
})();   