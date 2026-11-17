async function scanMessage() {

const message = document.getElementById("message").value.trim();
const result = document.getElementById("result");

if (!message) {
    result.innerHTML = `
        <p style="color:#ff7777">
            Please enter a message to analyze.
        </p>`;
    return;
}

result.innerHTML = `
    <div style="background:#101e32;padding:20px;border-radius:12px;">
        <h3 style="color:#39a9ff">Analyzing Message...</h3>
        <p style="color:#a8bad0;margin-top:10px">
            Preparing message for AI analysis.
        </p>
    </div>`;

// AI integration will be added in the next stage.

}