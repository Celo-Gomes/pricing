function rollUp(){
    document.querySelector('#rectBlue').scrollIntoView({behavior:'smooth'})
}

function rollDown(){
    document.querySelector('#professional').scrollIntoView({behavior:'smooth'})
}

// function btnSign(x){
//     if(x == 'bf'){
//         document.querySelector('#signFree').style.backgroundColor = 'lightblue';
//     }
//     else if(x == 'bb'){
//         document.querySelector('#signBasic').style.backgroundColor = 'lightblue';
//     }
//     else{
//         document.querySelector('#signProfessional').style.backgroundColor = 'lightblue';
//     }
// }

let elements = {
    'free': null,
    'basic': null,
    'professional': null
   }; 
   

   function showForm(cardId){
    const card = document.getElementById(cardId);        

    for(const id in elements){
        //através do laço for, será percorrido todos os elementos do objeto
        if(id != cardId && elements[id]){
            //em cada volta será analizado se o nome do objeto é diferente do parametro da função e se existe algum elemento criado.
            document.getElementById(id).removeChild(elements[id]);//se existir, será removido todo elemento diferente do parametro
            document.getElementById(id).style.scale = 1;
            document.getElementById(id).style.zIndex = 0;
            elements[id] = null; //assumirá null
        }
        //else if{}
    }

    if(elements[cardId]){
        //aqui removera um elemento de mesmo parametro
        card.removeChild(elements[cardId]);
        card.style.scale = 1;
        elements[cardId]= null;
        //usar para voltar a tela limpa quando submit form
    }
    else{
        let option = []
        if(cardId == 'free'){
            option = [
                'Seja bem vindo!!!',
                "Vamos dar os primeiros passos...",
                "FREE"
            ]
        }
        else if(cardId == 'basic'){
            option = [
                'Seja bem vindo ao Básico!!!',
                "Vamos intensificar o conhecimento...",
                "BÁSICO"
            ]
        }
        else{
            option = [
                'Seja bem vindo ao Inferno!!!',
                "Aqui o filho chora e a mãe não vê...",
                "PROFISSIONAL"
            ]
        }
        
        element = document.createElement('div')
        element.innerHTML = `
            <h2>${option[0]}</h2>
            <p>${option[1]}</p>
            <form action="">
                <fieldset>
                    <legend>${option[2]}</legend>
                    <p>
                        <input type="text" name="name" id="name" placeholder="Nome:" onclick="placeHolder('name')">
                    </p>
                    <p>
                        <input type="email" name="mail" id="mail" placeholder="" onclick="placeHolder('mail')">
                    </p>
                    <p>
                        <input type="text" name="address" id="address" placeholder="" onclick="placeHolder('address')">
                    </p>
                    <p>
                        <input type="number" name="phone" id="phone" onclick="placeHolder('')">
                    </p>
                    <p>
                        <button type="button" id="sendBtn" disabled>ENVIAR</button>
                    </p>
                </fieldset>
            </form>
        `;
        element.setAttribute('id','element');
        card.style.scale = 1.5;
        card.style.zIndex  = 1
        card.appendChild(element);
        elements[cardId] = element;
    }
    // aqui será construido o elemento. Em ordem, o 1° a preimeira função a ser executada.
   }

   //F O R M

   function placeHolder(status){
        let field = document.querySelector("fieldset")
        if(status == 'name'){
            document.querySelector('#mail').placeholder = 'E-mail:';
        }
        else if(status == 'mail'){
            document.querySelector('#address').placeholder = "Endereço:";
            field.style.backgroundImage = "url('./assets/icone-mensagem.png')"
        }
        else if(status == 'address'){
            document.querySelector('#phone').placeholder = 'Celular:';
            field.style.backgroundImage = "url('./assets/icone-endereco.png')"
        }
        else{
            document.querySelector('#sendBtn').disabled = false;
            field.style.backgroundImage = "url('./assets/icone-fone.png')"
        }
        //sugestão: ao clicar sobre input mudar background para tema
    }





// function roll(){
//     const arrow = document.querySelector('.arrow')
//     if(arrow.alt == 'arrowDown' ){
//         document.querySelector('#professional').scrollIntoView({behavior:'smooth'})
//         arrow.src = './assets/arrowUp.svg'
//         arrow.alt = 'arrowUp'
//     }
//     else{
//         document.querySelector('#rectBlue').scrollIntoView({behavior:'smooth'})
//         arrow.src = './assets/arrowDown.svg'
//         arrow.alt = 'arrowDown' 
//     }
// }


//if(element.scroll(h,v))
//window.scrollTo(x,y)
//const scrollX = window.pageXOffset;  >> posição horizontal
//const scrollY = window.pageYOffset;

// fazer transições com keyframes e animations
//talvez aja a possibilidade de utilizar o posicionamento real para condicionais... 


