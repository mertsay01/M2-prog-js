class App
{
    runApplication()
    {
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d")
        g.fillRect(0,0,10,10);
        console.log(canvas)
        let title = document.getElementById("canvasId")
        let randomGetal = Math.random()
        console.log(randomGetal);
        if (randomGetal == 0){
            title.style.backgroundColor = "#ffff00"
        } 
        else if (randomGetal <= 0.2){
            title.style.backgroundColor = "#ff8000"
        }
        else if (randomGetal <= 0.6){
            title.style.backgroundColor = "#00bfff"
        }
        else if (randomGetal <= 1){
            title.style.backgroundColor = "#0040ff"
        }


        //dak
        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(300, 100);
        g.lineTo(200, 300);
        g.lineTo(600, 400);
        g.lineTo(700, 200);
        g.closePath();
        g.stroke();
        g.fill()
        //dak 2
        g.beginPath()
        g.fillStyle = "black";
        g.moveTo(700, 200);
        g.lineTo(600, 400);
        g.lineTo(800, 300);
        g.closePath();
        g.stroke();
        g.fill()
        //huis zijkant groot
        g.beginPath()
        g.fillStyle = "grey";
        g.moveTo(200, 300);
        g.lineTo(200, 500);
        g.lineTo(600, 600);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill()
        //zijkant huis klein
        g.beginPath()
        g.fillStyle = "blue";
        g.moveTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(800, 500);
        g.lineTo(800, 300);
        g.closePath();
        g.stroke();
        g.fill()
        //raam 1
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(300, 400);
        g.lineTo(300, 450);
        g.lineTo(350, 450);
        g.lineTo(350, 400);
        g.closePath();
        g.stroke();
        g.fill()
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(300, 400);
        g.lineTo(300, 450);
        g.lineTo(350, 450);
        g.lineTo(350, 400);
        g.closePath();
        g.stroke();
        g.fill()
        //raam 2
        g.beginPath()
        g.fillStyle = "red";
        g.moveTo(500, 500);
        g.lineTo(500, 450);
        g.lineTo(450, 450);
        g.lineTo(450, 500);
        g.closePath();
        g.stroke();
        g.fill()

   
       
    }
}

let app = new App();
app.runApplication();
