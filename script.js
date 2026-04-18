function calculate() {
    const p = Number(document.getElementById("principal").value);
    const r = Number(document.getElementById("rate").value);
    const t = Number(document.getElementById("time").value);

    const result = (p * r * t) / 100;

    document.getElementById("result").innerText = "Interest: " + result;
}