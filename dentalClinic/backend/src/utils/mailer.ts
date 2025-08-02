import nodemailer from "nodemailer";

interface MailData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

export const sendEmail = async ({ name, email, phone, service, message }: MailData) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", 
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: `"Formulario Clínica" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: `Nuevo mensaje del formulario de contacto`,
    html: `
      <h3>Datos del paciente:</h3>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${phone}</li>
        <li><strong>Servicio de interés:</strong> ${service || "No especificado"}</li>
      </ul>
      <p><strong>Mensaje:</strong><br/>${message}</p>
    `
  };

  await transporter.sendMail(mailOptions);
};
