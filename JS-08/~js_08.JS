function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano) {
      window.alert('Verifique os dados e tente novamente.');
    } else {
      var fsex = document.getElementsByTagName('input');
      var idade = ano - Number(fano.value);
      res.innerHTML = `Idade calculada: ${idade}`;
      var genero = '';
      var img = document.createElement('img');
      if (fsex[1].checked) {
        genero = 'homen';
        if (idade >= 0 && idade < 15) {
          img.setAttribute('src', 'Criança-m.png');
          
        } else if (idade < 30) {
          img.setAttribute('src', 'Jovem-m.png');
       
        } else if (idade < 50) {
          img.setAttribute('src', 'Adulto-m.png');
        
        } else {
          img.setAttribute('src', 'Idoso-m.png');
        }
      } else if (fsex[2].checked) {
        genero = 'mulher';
        if (idade >= 0 && idade < 10) {
          img.setAttribute('src', 'Criança-f.png');
        
        } else if (idade < 21) {
          img.setAttribute('src', 'Jovem-f.png');
        
        } else if (idade < 50) {
          img.setAttribute('src', 'Adulto-f.png');
        
        } else {
          img.setAttribute('src', 'Idosa-f.png');
        }
      }
      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
      res.appendChild(img);
    }
  }