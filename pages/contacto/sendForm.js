export default function sendForm(form, body) {
  const action = form.action;
  const method = form.method;
  body = JSON.stringify(body);
  fetch(action, {
    method,
    body,
    headers: {
      Accept: 'application/json',
    },
  })
    .then(res => {
      if (res.ok) {
        alert('Mensaje enviado con exito');
        form.reset();
      } else {
        throw res;
      }
    })
    .catch(err => {
      console.log(err);
    });
}
