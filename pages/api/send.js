import sgMail from "@sendgrid/mail";
import ReactDOMServer from "react-dom/server";
import { EmailTemplate } from "../../src/components/EmailTemplate";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  try {
    const { name, email, phone, postalCode, message } = req.body;

    if (!name || !email || !phone || !postalCode || !message) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        name={name}
        email={email}
        phone={phone}
        postalCode={postalCode}
        message={message}
      />
    );

    const msg = {
      to: ["atlantique@groupeduval.com"], // Adresse email de destination
      from: "nouveaucontact@prospect-manager.fr", // Adresse email d'envoi
      subject: "Nouvelle demande de contact reçue",
      html: emailContent,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: "Email envoyé avec succès" });
    } catch (error) {
      console.error("Erreur SendGrid:", error.response?.body);
      res.status(400).json({
        message: "Erreur lors de l'envoi de l'email.",
        details: error.response?.body,
      });
      return;
    }
  } catch (error) {
    console.error("Erreur du serveur:", error);
    res.status(500).json({ message: "Erreur du serveur", stack: error.stack });
  }
};
