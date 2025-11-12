const arr = ["helo", "bye", "why", "cry"];
const main = document.getElementById("ollist");

const template = document.createElement("template");
for (const item of arr) {
    const li = document.createElement("li");
    li.textContent = item;
    template.content.append(li);
}

main.append(template.content);