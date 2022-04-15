const element = document.getElementById('name');

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder('utf-8').encode(message);
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
    return hashHex;
    }
 


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
//
async function demo() {
    for (let i = 0; i < 1000; i++) {
        let b = document.getElementById("name").value;
        sha256(b).then(function(hashHex) {
            let c = document.getElementById("text");
            c.innerHTML= hashHex;
        });
        
        await sleep(i * 5);
    }
};



element.addEventListener("click", () => {
    if(element === document.activeElement){
        demo();
    };
});


