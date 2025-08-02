import { Router, RequestHandler } from "express";
import { sendEmail } from "../utils/mailer";

const contactRouter = Router();

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

const handler: RequestHandler<unknown, unknown, ContactForm> = async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(400).json({ error: "Campos obligatorios faltantes" });
    return;
  }

  try {
    await sendEmail({ name, email, phone, service, message });
    res.status(200).json({ success: true, message: "Mensaje enviado correctamente" });
  } catch (err) {
    console.error("Error al enviar email:", err);
    res.status(500).json({ success: false, message: "Error interno" });
  }
};

contactRouter.post("/", handler);

export default contactRouter;
