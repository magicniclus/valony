import { format } from "date-fns";
import { fr } from "date-fns/locale";
import * as React from "react";

// Définition des props attendues par le template
interface EmailTemplateProps {
  nom: string;
  email: string;
  telephone: string;
  date: string;
}

// Formatage de la date actuelle
const currentDate = format(new Date(), "dd/MM/yyyy HH:mm", { locale: fr });

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  nom,
  email,
  telephone,
  date,
}) => {
  return (
    <div>
      <h2>Nouveau Prospect depuis Valony :</h2>
      <p>Date : {currentDate}</p>
      <ul>
        <li>
          Nom : <strong>{nom}</strong>
        </li>
        <li>
          Email : <strong>{email}</strong>
        </li>
        <li>
          Téléphone : <strong>{telephone}</strong>
        </li>
      </ul>
    </div>
  );
};
