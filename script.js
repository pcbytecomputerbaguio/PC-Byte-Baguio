    function toggleMessenger() {
      var messengerBox = document.getElementById('messengerBox');
      if (messengerBox.style.display === 'none' || messengerBox.style.display === '') {
        messengerBox.style.display = 'block';
      } else {
        messengerBox.style.display = 'none';
      }
    }

    function closeMessenger() {
      document.getElementById('messengerBox').style.display = 'none';
    }
