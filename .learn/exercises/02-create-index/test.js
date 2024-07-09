const fs = require("fs");

test("Make sure you have your index.html", function(){
    const indexExists = fs.existsSync(`./index.html`);
    console.log(fs.existsSync);
    expect(indexExists).toBe(true);
})