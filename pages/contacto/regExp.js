const nameRegex = /^([a-zñáéíóúA-ZÁÉÍÓÚÑ]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ]+$/;
const subjectRagex =
  /^([a-zñáéíóúA-ZÁÉÍÓÚÑ0-9-_]+[\s]?)+[A-Za-zñÑáéíóúÁÉÍÓÚ0-9]+$/;
const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const contentRagex = /^.{4,256}$/;

const regExp = { nameRegex, subjectRagex, emailRegex, contentRagex };

export default regExp;
