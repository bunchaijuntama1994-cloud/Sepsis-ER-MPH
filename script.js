function mark(id) {
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
    document.getElementById('t-' + id).innerText = timeStr;
}

function copyFull() {
    const getVal = (id) => document.getElementById(id).value || '-';
    const getTime = (id) => document.getElementById('t-' + id).innerText;

    let r = `📌 บันทึก Sepsis Fast Track (ER เมืองปาน)\n`;
    r += `⏱ เวลามาถึง: ${getTime('visit')} | Triage: ${getVal('lv-first')}\n`;
    r += `🌡 VS: T ${getVal('vs-t')}, PR ${getVal('vs-pr')}, RR ${getVal('vs-rr')}, BP ${getVal('vs-bp')}, Sat ${getVal('vs-sat')}%\n`;
    r += `------------------------\n`;
    r += `🔬 Lab: ${getVal('lab-stat')} (${getVal('lab-res')}) เวลา: ${getTime('lab')}\n`;
    r += `🔬 UA/UC: ${getVal('ua-stat')} (${getVal('ua-res')}) เวลา: ${getTime('ua')}\n`;
    r += `🩻 CXR: ${getVal('cxr-stat')} เวลา: ${getTime('cxr')}\n`;
    r += `------------------------\n`;
    r += `💉 Fluid: ${getTime('fluid')} | ATB: ${getTime('atb')}\n`;
    
    const el = document.createElement('textarea');
    el.value = r; document.body.appendChild(el); el.select();
    document.execCommand('copy'); document.body.removeChild(el);

    alert("คัดลอกข้อมูลครบถ้วนแล้วครับคุณหมอ!");
}
function copyFullReport() {
    const v = (id) => document.getElementById(id).value || '-';
    
    let r = `📌 บันทึก Sepsis Fast Track (ER เมืองปาน)\n`;
    r += `⏱ เวลามาถึง: ${v('startTime')} | Triage: ${v('triageLevel')}\n`;
    r += `🌡 VS: T ${v('temp')}, PR ${v('pr')}, RR ${v('rr')}, BP ${v('bp')}, Sat ${v('sat')}%\n`;
    r += `------------------------\n`;
    r += `🧪 Lab: ${v('labStatus')} (${v('labResult')}) เวลา: ${v('labTime')}\n`;
    r += `🧪 UA/UC: ${v('uaStatus')} (${v('uaResult')}) เวลา: ${v('uaTime')}\n`;
    r += `🩻 CXR: ${v('cxrResult')} เวลา: ${v('cxrTime')}\n`;
    
    navigator.clipboard.writeText(r).then(() => {
        alert("คัดลอกรายงานฉบับสมบูรณ์เรียบร้อย!");
    });
}
