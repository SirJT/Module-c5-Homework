<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Приложение</title>
</head>
<body>
  <input type="number" id="numberInput" placeholder="Введите число от 1 до 10">
  <button id="submitButton">Отправить</button>
  <div id="resultContainer"></div>

  <script>
    function makeRequest(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            callback(null, response);
          } else {
            callback(new Error('Произошла ошибка при выполнении запроса'));
          }
        }
      };
      xhr.send();
    }

    function handleClick() {
      const numberInput = document.getElementById('numberInput');
      const inputValue = parseInt(numberInput.value);
      const resultContainer = document.getElementById('resultContainer');

      if (inputValue >= 1 && inputValue <= 10) {
        const url = `https://picsum.photos/v2/list?limit=${inputValue}`;
        makeRequest(url, function(error, response) {
          if (error) {
            resultContainer.textContent = 'Произошла ошибка  запроса';
          } else {
            resultContainer.textContent = JSON.stringify(response);
          }
        });
      } else {
        resultContainer.textContent = 'Число вне диапазона от 1 до 10';
      }
    }

    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', handleClick);
  </script>
</body>
</html>