class App{
    runApplication()
    {
        console.log("hello world")
        let headers = document.getElementsByTagName("h1")
        let arr = ["Cagatay Akman", "Edis", "Ece Mumay"]
        for (let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}

let app = new App()
app.runApplication();