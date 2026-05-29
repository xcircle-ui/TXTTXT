const mostlyevents = [
  "★ this is a amazing test! ★",
  "★ boneyard test 101 ★",
  "★ boo ★",
  "★ hatsune miku ★" 
]; 
const someweirdinfoidk = [
  "this is second text ★",
  "elon musk ★",
  "jesus christ ★",
  "sick ahh text test ★" 
]; 
const machineissuesorserverissues = [
  "no maimai 3: ★",
  "no hatsune miku project diva 3: ★",
  "pinball machine broken. stuck ★",
  "someotherissueidk ★"
]; 
const idkwhattotypehere = [
  "jwnwjwuwb ★",
  "jsjsbsisnsj ★",
  "hshsbsjshshsj ★",
  "jsjsjsjsjwjwiuwhsb ★" 
]; const epicquoteorsomethin = [
  "CHECK IT OUT ★",
  "DON’T MISS IT ★",
  "ENTER NOW ★",
  "AVAILABLE TODAY ★"
]; 
function pick(list) {
  
  return list[Math.floor(Math.random() * list.length)];

}

const el = document.getElementById("marqueeText");

const message =
  pick(mostlyevents) + " " +
  pick(someweirdinfoidk) + " " +
  pick(machineissuesorserverissues) + " " +
  pick(idkwhattotypehere) + " " +
  pick(epicquoteorsomethin); el.textContent = message
