import { format } from "date-fns";
import { fr } from "date-fns/locale";
import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  nom: string;
  email: string;
  telephone: string;
  indicatif?: string;
  date: string;
}

// Ajout du formatage pour inclure l'heure
const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  nom,
  email,
  telephone,
  indicatif,
  date,
}) => {
  return (
    <div>
      <h2>Nouveau Prospect depuis seaven-groupeduval.com:</h2>
      <p>Date: {currentDate}</p>
      <h3>{date}</h3>
      <ul>
        <li>
          Nom: <span className="font-bold">{nom}</span>
        </li>
        <li>
          Email: <span className="font-bold">{email}</span>
        </li>
        <li>
          Téléphone: <span className="font-bold">{telephone}</span>
        </li>
      </ul>
    </div>
  );
};
