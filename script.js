setInterval(function()
    {
        let date = new Date().toTimeString()

        consolde.log(date);
        
        let clock = document.getElementById('clock')
        
        clock.innerHTML = date;
    }, 1000)