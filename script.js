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
