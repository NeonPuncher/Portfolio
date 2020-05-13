function notifyPerm()
{
    let Name = document.getElementById("pname").value;
    let Status = document.getElementById("pstatus").value;
    if(Status <= 5)
    {
        var StatusText = "Stabiel";
        console.log("It okay");
    }
    else if(Status > 5)
    {
        var StatusText = "Critical";
        console.log("It very bad");
    }


    if(!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
    }

    else if (Notification.permission === "granted") {
        alert("Patient: " +  Name + " Status: " + StatusText);
        var notification = new Notification("Hi there!");
    }

    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                alert("Patient: " +  Name + " Status: " + StatusText);

                var notification = new Notification ('Notification title', {
                    icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
                    body: 'Hey there! You\'ve been notified!',
                });
            }
        });
    }
}

function notifyNoPerm() 
{
    let Name = document.getElementById("pname").value;

    alert("Patient: " +  Name + " Status: " + StatusText);
}

