const times = {};

function mark(id) {
    const now = new Date();
    times[id] = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    const display = document.getElementById('t-' + id);
    if (display) display.innerText = times[id];
    update();
}

function calculateNEWS2() {
    let score = 0;
    const rr = parseInt(document.getElementById('vs-rr').value) || 0;
    const sat = parseInt(document.getElementById('vs-sat').value) || 100;
    const temp = parseFloat(document.getElementById('vs-t').value) || 37;
    const pr = parseInt(document.getElementById('vs-pr').value) || 0;
    const o2 = parseInt(document.getElementById('vs-o2-score').value) || 0;
    const avpu = document.getElementById('vs-avpu').value;

    if (rr <= 8 || rr >= 25) score += 3; else if (rr >= 21) score += 2; else if (rr <= 11) score += 1;
    if (sat <= 91) score += 3; else if (sat <= 93) score += 2; else if (sat <= 95) score += 1;
    score += o2;
    if (temp <= 35.0) score += 3; else if (temp >= 39.1) score += 2; else if (temp <= 36.0 || temp >= 38.1) score += 1;
    if (pr <= 40 || pr >= 131) score += 3; else if (pr >= 111) score += 2; else if (pr <= 50 || pr >= 91) score += 1;
    if (avpu === 'VPU') score += 3;
    return score;
}

function update() {
    const newsScore = calculateNEWS2();
    let text = `[SEPSIS FAST TRACK RECORD - MUANGPAN HOSPITAL]\n`;
    text += `------------------------------------------\n`;
    text += `- Triage: ${document.getElementById('lv-first').value} (Arrival: ${times.visit || '--:--'} / Assess: ${times.assess || '--:--'})\n`;
    text += `- VS: T ${document.getElementById('vs-t').value || '-'}, PR ${document.getElementById('vs-pr').value || '-'}, RR ${document.getElementById('vs-rr').value || '-'}, BP ${document.getElementById('vs-bp').value || '-'}, Sat ${document.getElementById('vs-sat').value || '-'}%\n`;
    text += `- NEWS2 SCORE: ${newsScore}\n`;
    text += `------------------------------------------\n`;
    text += `- Activated FT: ${times.active || '--:--'} | Dx Sepsis: ${times.dx || '--:--'}\n`;
    text += `- IV Fluid: ${times.fluid || '--:--'} | ATB: ${times.atb || '--:--'}\n`;
    text += `- Blood Lactate: ${document.getElementById('val-lac').value || '-'} mmol/L (${times['lac-res'] || '--:--'})\n`;
    text += `- Investigation: Lab ${document.getElementById('lab-stat').value} (${times.lab || '--:--'})\n`;
    text += `- CXR: ${document.getElementById('cxr-res').value} (${times.cxr || '--:--'})\n`;
    text += `- Load IVF Total: ${document.getElementById('ivf-total').value || '0'} ml (Done: ${times['ivf-done'] || '--:--'})\n`;
    
    const summaryEl = document.getElementById('summary-text');
    if (summaryEl) summaryEl.innerText = text;
}

function copyText() {
    const text = document.getElementById('summary-text').innerText;
    navigator.clipboard.writeText(text).then(() => alert('คัดลอกข้อมูลเรียบร้อยแล้วครับ!'));
}

update();
