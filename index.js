function submitContactForm() {
  let modal = document.getElementsByClassName('modal')[0]
  console.log("ckldmslcmdsl")

  let fn = document.getElementById('fname').value;
  let sn = document.getElementById('sname').value;
  let em = document.getElementById('email').value;
  let m = document.getElementById('msg').value;

  console.log(fn + " - " + sn + " - " + em + " - " + m)

  // if any field is empty or email format is invalid
  if (fn === '' || sn === '' || em === '' || m === '' || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(em)) return;

  let values = modal.getElementsByClassName('value')

  values[0].innerHTML = fn + '\n';
  values[1].innerHTML = sn + '\n';
  values[2].innerHTML = em + '\n';
  values[3].innerHTML = m + '\n';

  modal.style.display = "block"
}

function dialogDismiss() {
  let modal = document.getElementsByClassName('modal')[0]
  modal.style.display = "none"

  document.getElementById('fname').value = "";
  document.getElementById('sname').value = "";
  document.getElementById('email').value = "";
  document.getElementById('msg').value = "";
}

function confirmContactForm() {
  // todo show success toast

  dialogDismiss()
}
