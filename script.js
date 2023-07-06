function carregar()
{
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'agora são ${hora} horas'
    if (hora >0 && hora <12)
    {
        img.src = 'https://thumbs.dreamstime.com/z/moinhos-famosos-na-ilha-de-mykonos-e-pessoas-dist%C3%A2ncia-distante-que-faz-foto-manh%C3%A3-bonita-grega-151642442.jpg'
    }

    else if (hora >12 && hora <18)
    {
        img.src = 'https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }

    else
    {
        img.src = 'https://images.pexels.com/photos/771883/pexels-photo-771883.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
}

function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
}