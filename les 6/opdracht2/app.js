class App{
    runApplication(){

        let myButton = document.getElementById("myButton");

        myButton.addEventListener('click', ()=>{
            const para = document.createElement("button");
            const node = document.createTextNode("button 2");
            para.appendChild(node);

            const element = document.getElementById("div1");
            element.appendChild(para);

        });
        
            
    }

}

let app = new App();
app.runApplication();