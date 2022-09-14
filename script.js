function nextForm(){
    let getStageAsNodes = document.querySelectorAll(".input-group");
    /* let stages = Array.from(getStageAsNodes); */
    let lastStep = "";
    let nextStep = "";
    console.log(getStageAsNodes);
    getStageAsNodes.forEach(el => {
        el.classList.forEach((i,index) =>{
            switch (i){
                case "active":
                    lastStep = el; 
                    break;
                case "disable":
                    nextStep = el;
                    break;
            }
            
            
        })
    });

    lastStep.classList.remove('active');
    lastStep.classList.add('disable');
    nextStep.classList.remove('disable');
    nextStep.classList.add('active');

    console.log(lastStep);

/*     lastStep.classList.remove("active")

    console.log(stages); */

/*     var buttons = document.querySelector('.control-button');
    buttons.classList.remove('disable-button')
    var getFields = document.querySelectorAll(".input-group")
    console.log(getFields);
    var convert_to_list = Array.from(getFields);
    console.log(convert_to_list); */
}

function backFunction(){
    var buttons = document.querySelector('.control-button');
    buttons.classList.remove('disable-button')
    console.log(buttons);
}