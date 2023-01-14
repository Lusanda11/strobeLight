    class strobe
    {
        constructor ()
        {
            setInterval(()=>
            {
                let status = document.body.getAttribute("class");
                document.body.className = ( (status=="lightOff") ? "lightOn" : "lightOff" );
            }, 50);
        }
    }

    new strobe();
