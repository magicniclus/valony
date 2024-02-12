import * as React from "react";

// Définition de l'interface pour les props
interface EmailTemplateProps {
  nom: string;
  email: string;
  telephone: string;
  indicatif?: string;
date: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  nom,
  email,
  telephone,
    indicatif,
  date
}) => {
    return (
        <div>
            <h2>Nouveau Prospect:</h2>
            <h3>{date}</h3>
            <ul>
                <li>
                    Nom, Prenom: <span className="font-bold">{nom}</span>
                </li>
                <li>
                    Email: <span className="font-bold">{email}</span>
                </li>
                <li>
                    Téléphone: {indicatif ? indicatif : ""} <span className="font-bold">{telephone}</span>
                </li>
            </ul>
        </div>
    );
}