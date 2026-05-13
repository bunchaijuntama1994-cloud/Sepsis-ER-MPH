function copyReport() {
    const getValue = (id) => document.getElementById(id).value || '-';
    
    let report = `📌 บันทึก Sepsis Fast Track (ER เมืองปาน)\n`;
    report += `Vital Signs: T ${getValue('temp')}, PR ${getValue('pr')}, RR ${getValue('rr')}, BP ${getValue('bp')}, Sat ${getValue('sat')}%\n`;
    report += `------------------------\n`;
    report += `🧪 Lab: ${getValue('labStatus')} | ผล: ${getValue('labResult')} | เวลา: ${getValue('labTime')}\n`;
    report += `🧪 UA/UC: ${getValue('uaStatus')} | ผล: ${getValue('uaResult')} | เวลา: ${getValue('uaTime')}\n`;
    report += `🩻 CXR: ${document.getElementById('cxrResult').value} | เวลา: ${getValue('cxrTime')}\n`;
    
    navigator.clipboard.writeText(report).then(() => {
        alert("คัดลอกรายงานสรุปแล้ว! นำไปวางใน LINE ได้เลยครับ");
    });
}
