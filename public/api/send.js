import { EmailTemplate } from "../../src/app/components/EmailTemplate";
import ReactDOMServer from "react-dom/server"; // Assurez-vous d'avoir react-dom installé
import sgMail from "@sendgrid/mail";

// Configurez SendGrid avec votre clé API
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const {
      prenom,
      nom,
      email,
      telephone,
      entreprise,
      pays,
      message,
      newDate,
    } = req.body;

    const emailContent = ReactDOMServer.renderToString(
      <EmailTemplate
        nom={nom}
        email={email}
        telephone={telephone}
        newDate={newDate}
        // Vous pouvez ajouter 'date' dans les props de EmailTemplate si nécessaire
      />
    );

    const msg = {
      to: ["atlantique@groupeduval.com"], // Assurez-vous que cette adresse est valide
      from: "contact@chateaudutruch.com",
      subject: "Nouvelle demande reçue depuis votre site web !",
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
    res.status(400).json({ message: error.message, stack: error.stack });
  }
};
