// ARROW ROLL

function rollUp(){
    document.querySelector('#rectBlue').scrollIntoView({behavior:'smooth'})
}

function rollDown(){
    document.querySelector('#professional').scrollIntoView({behavior:'smooth'})
}

// FORM CREATE / REMOVE 

let elements = {
    'free': null,
    'basic': null,
    'professional': null
   }; 

 let pop = document.querySelector('#popular')  
   

   function showForm(cardId){    // REMOVE a div,se já criada em qualquer outra div
    const card = document.getElementById(cardId);        

    for(const id in elements){
        
        if(id != cardId && elements[id]){
            
            document.getElementById(id).removeChild(elements[id]);
            document.getElementById(id).style.scale = 1;
            document.getElementById(id).style.zIndex = 0;
            pop.style.opacity = 1;
            elements[id] = null; 
        }
    }

    if(elements[cardId]){
        //REMOVE uma div, se já criada, de mesmo parametro
        card.removeChild(elements[cardId]);
        card.style.scale = 1;
        elements[cardId]= null;
        //usar para voltar a tela quando submit form
    }
    else{  // CRIA a opção de conteudo da nova div 
        let option = []
        if(cardId == 'free'){
            option = [
                'Seja bem vindo!!!',
                "Vamos dar os primeiros passos...",
                "FREE >",
                "free"
            ]
        }
        else if(cardId == 'basic'){
            option = [
                'Seja bem vindo ao Básico!!!',
                "Vamos intensificar o conhecimento...",
                "BÁSICO >",
                "basic"
            ]
            pop.style.opacity = 0;
        }
        else{
            option = [
                'Seja bem vindo ao Inferno!!!',
                "Aqui o filho chora e a mãe não vê...",
                "PROFISSIONAL >",
                "professional"
            ]
        }
        // Cria uma nova div que sobreponha a div pai
        element = document.createElement('div')
        element.innerHTML = `
            <h2>${option[0]}</h2>
            <p>${option[1]}</p>
            <form action="">
                <fieldset>
                    <legend>${option[2]}</legend>
                        <input type="text" name="name" id="name" placeholder="Nome:" onclick="placeHolder('name')">
                    <br>
                        <input type="email" name="mail" id="mail" placeholder="" onclick="placeHolder('mail')">
                    <br>
                        <input type="text" name="address" id="address" placeholder="" onclick="placeHolder('address')">
                    <br>
                        <input type="number" name="phone" id="phone" onclick="placeHolder('')">
                    <br>
                        <button type="button" id="sendBtn" onclick="showForm(${option[3]})" disabled>ENVIAR</button>
                </fieldset>
            </form>
        `;
        element.setAttribute('id','element');
        card.style.scale = 1.2;
        card.style.zIndex  = 1
        card.appendChild(element);
        elements[cardId] = element;
    }
   }

   //ACTION FORM

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
            document.querySelector('#sendBtn').style.opacity = 1;
            field.style.backgroundImage = "url('./assets/icone-fone.png')"
        }
    }
    
 


