document.addEventListener('keydown', function(event) {
    const key = event.key;
    let button = null;

    switch (key) {
      case '1':
        button = document.querySelector('input[value="1"]');
        break;
      case '2':
        button = document.querySelector('input[value="2"]');
        break;
      case '3':
        button = document.querySelector('input[value="3"]');
        break;
      case '4':
        button = document.querySelector('input[value="4"]');
        break;
      case '5':
        button = document.querySelector('input[value="5"]');
        break;
      case '6':
        button = document.querySelector('input[value="6"]');
        break;
      case '7':
        button = document.querySelector('input[value="7"]');
        break;
      case '8':
        button = document.querySelector('input[value="8"]');
        break;
      case '9':
        button = document.querySelector('input[value="9"]');
        break;
      case '0':
        button = document.querySelector('input[value="0"]');
        break;
      case '+':
        button = document.querySelector('input[value="+"]');
        break;
      case '-':
        button = document.querySelector('input[value="-"]');
        break;
      case '*':
        button = document.querySelector('input[value="*"]');
        break;
      case '/':
        button = document.querySelector('input[value="/"]');
        break;
      case '.':
        button = document.querySelector('input[value="."]');
        break;
      case '=':
        button = document.querySelector('input[value="="]');
        break;
      case 'Enter':
        button = document.querySelector('input[value="="]');
        break;
      case 'Backspace':
        button = document.querySelector('input[value="Clear"]');
        break;
    }

    if (button) {
      button.click();
      event.preventDefault(); // Prevent default key behavior
    }
  });