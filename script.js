
    function encrypt() {
      var originalText = document.getElementById("originalEncrypt").value.toLowerCase();
      var encryptedText = "";

      for (var i = 0; i < originalText.length; i++) {
        var letter = originalText.charAt(i);

        switch (letter) {
          case "e":
            encryptedText += "enter";
            break;
          case "i":
            encryptedText += "imes";
            break;
          case "a":
            encryptedText += "ai";
            break;
          case "o":
            encryptedText += "ober";
            break;
          case "u":
            encryptedText += "ufat";
            break;
          default:
            encryptedText += letter;
            break;
        }
      }

      document.getElementById("encryptedResult").textContent = encryptedText;
    }

    function decrypt() {
      var encryptedText = document.getElementById("encryptedDecrypt").value.toLowerCase();
      var decryptedText = "";

      while (encryptedText.length > 0) {
        var found = false;

        for (var i = 5; i >= 1; i--) {
          var substring = encryptedText.substr(0, i);

          switch (substring) {
            case "enter":
              decryptedText += "e";
              break;
            case "imes":
              decryptedText += "i";
              break;
            case "ai":
              decryptedText += "a";
              break;
            case "ober":
              decryptedText += "o";
              break;
            case "ufat":
              decryptedText += "u";
              break;
            default:
              continue;
          }

          encryptedText = encryptedText.slice(i);
          found = true;
          break;
        }

        if (!found) {
          decryptedText += encryptedText.charAt(0);
          encryptedText = encryptedText.slice(1);
        }
      }

      document.getElementById("decryptedResult").textContent = decryptedText;
    }