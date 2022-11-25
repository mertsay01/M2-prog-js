class App
{
    runApplication()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d")
        g.fillRect(0,0,10,10);
        //dak
        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(100, 260);
        g.lineTo(300,25);
        g.lineTo(500, 260);
        g.closePath();
        g.stroke();
        g.fill();
        //huis
        g.beginPath();
        g.moveTo(100, 260);
        g.lineTo(100, 500);
        g.moveTo(500, 500);
        g.lineTo(100, 500);
        g.moveTo(100, 260);
        g.lineTo(100, 260);
        g.lineTo(500, 260);
        g.moveTo(500,260);
        g.lineTo(500,500);
        g.closePath();
        g.stroke();
        //raam
        g.beginPath();
        g.moveTo(450, 300);
        g.lineTo(450, 400);
        g.moveTo(450, 300);
        g.lineTo(350, 300);
        g.moveTo(350, 300);
        g.lineTo(350, 400);
        g.moveTo(450, 400);
        g.lineTo(350, 400);
        g.moveTo(350, 350);
        g.lineTo(450, 350);
        g.moveTo(400, 400);
        g.lineTo(400, 300);
        g.closePath();
        g.stroke();
        //deur
        g.beginPath();
        g.moveTo(150, 500);
        g.lineTo(150, 400);
        g.moveTo(200, 500);
        g.lineTo(200, 400);
        g.moveTo(150, 400);
        g.lineTo(200, 400);
        g.closePath();
        g.stroke();
        
       

        
        

    }
}

let app = new App();
app.runApplication();