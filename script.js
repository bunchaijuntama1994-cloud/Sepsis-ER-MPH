function setToday(id){
  const today = new Date().toISOString().split('T')[0];
  document.getElementById(id).value = today;
}

function setNowTime(id){
  const now = new Date();
  const time = now.toTimeString().slice(0,5);
  document.getElementById(id).value = time;
}

function saveNow(id){
  const now = new Date();

  const timestamp =
    now.toLocaleDateString('th-TH') +
    ' ' +
    now.toLocaleTimeString('th-TH');

  document.getElementById(id).innerText = timestamp;
}

function calculateScores(){

  let sirs = 0;
  let news = 0;
  let sos = 0;

  const bt = parseFloat(document.getElementById('bt').value);
  const rr = parseInt(document.getElementById('rr').value);
  const hr = parseInt(document.getElementById('hr').value);
  const sbp = parseInt(document.getElementById('sbp').value);
  const spo2 = parseInt(document.getElementById('spo2').value);

  // SIRS
  if(bt > 38 || bt < 36) sirs++;
  if(hr > 90) sirs++;
  if(rr > 20) sirs++;

  // NEWS2
  if(rr >= 25) news += 3;
  else if(rr >= 21) news += 2;

  if(spo2 <= 91) news += 3;
  else if(spo2 <= 93) news += 2;

  if(sbp <= 90) news += 3;
  else if(sbp <= 100) news += 2;

  if(hr >= 131) news += 3;
  else if(hr >= 111) news += 2;

  // SOS simplified
  if(sbp < 90) sos += 2;
  if(spo2 < 90) sos += 2;
  if(rr > 30) sos += 2;

  document.getElementById('sirsScore').innerText = sirs;
  document.getElementById('newsScore').innerText = news;
  document.getElementById('sosScore').innerText = sos;
}

function addNote(){

  const note = document.getElementById('noteInput').value;

  if(note.trim() === "") return;

  const now = new Date();

  const timestamp =
    now.toLocaleDateString('th-TH') +
    ' ' +
    now.toLocaleTimeString('th-TH');

  const log = document.getElementById('noteLog');

  log.value += `[${timestamp}] ${note}\n`;

  document.getElementById('noteInput').value = "";
}
