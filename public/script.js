document.querySelector("button").addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            new Notification("Example notification", {
                body: "This is more text",
                data: { hello: "world" },
                icon: "https://winbot.tech/img/logo-web.png"
            })
        }
    })
});