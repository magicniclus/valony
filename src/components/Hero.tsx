/* eslint-disable @next/next/no-img-element */
import { addProspect } from "@/firebase/dataManager";
import { stopFocus } from "@/redux/formFocusSlice";
import { startLoading, stopLoading } from "@/redux/loadingSlice";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Nav from "./Nav";

const Hero = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // Références pour animations
  const ref = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  // Sélecteurs Redux
  const { formFocus } = useSelector((state: RootState) => state.focus);
  const language = useSelector((state: any) => state.language.language);

  // États
  const [arrowIsHover, setArrowIsHover] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [formValid, setFormValid] = useState(false);

  // Fonction de validation des champs du formulaire avec Regex
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+33|0)[1-9](\d{2}){4}$/; // Pour la France
    const nameValid = name.trim().length > 0;
    const emailValid = emailRegex.test(email);
    const phoneValid = phoneRegex.test(phone);
    setFormValid(nameValid && emailValid && phoneValid && checkbox);
  };

  // Mettre à jour la validation chaque fois qu'un champ change
  useEffect(() => {
    validateForm();
  }, [name, email, phone, checkbox]);

  // Fonction d'envoi des données du formulaire
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formValid) return;

    dispatch(startLoading());
    try {
      // Ajout des données dans Firebase
      await addProspect({
        nom: name,
        email,
        telephone: phone,
      });

      // Envoi des données à l'API
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          date: new Date().toLocaleString(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erreur lors de l'envoi");
      }

      // Réinitialisation des champs après succès
      dispatch(stopFocus());
      setName("");
      setEmail("");
      setPhone("");
      setCheckbox(false);
      router.push("/merci");
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
    } finally {
      dispatch(stopLoading());
    }
  };
  const fr = () => {
    return (
      <>
        <style jsx>{`
          .backgroundImage {
            position: absolute;
            top: 0; // Positionne l'image de fond pour couvrir uniquement la moitié droite
            right: 0;
            bottom: 0;
            background: url("/background/hero-poitiers-valony-groupe-duval.jpg")
              top center no-repeat;
            background-size: cover;
            min-height: 559px;
            width: 100%;
            // transform: translatey(100%);
            // animation: fadeIn 0.4s ease-in-out forwards;
            z-index: -1; // Assurez-vous que ce z-index permet à l'image d'être en arrière-plan
          }

          .blurEffect {
            filter: blur(8px);
          }

          @media screen and (max-width: 768px) {
            .backgroundImage {
              background: url("/background/hero-SMARTPHONE-poitiers-valony-groupe-duval.jpg")
                top center no-repeat;
              background-size: cover;
            }
          }

          @keyframes fadeIn {
            0% {
              transform: translatey(100%);
            }
            100% {
              transform: translatey(0);
            }
          }
        `}</style>
        <section
          id="hero"
          className="min-h-[559px] w-full flex flex-col relative z-20"
        >
          <div className="flex">
            <div className="absolute left-[67px] top-[470px] p-3 h-[108px] w-[108px] rounded-full border-2 border-[#312F39] bg-[#312F39] justify-center items-center flex-col z-30 lg:flex hidden">
              <p className="text-white font-light text-center font-outfit text-[13px] uppercase -translate-y-2">
                LIVRAISON
              </p>
              <p className=" font-playfair text-[35px] text-white leading-3 -translate-y-2">
                2025
              </p>
            </div>
            <div className="w-[121px] min-h-[559px] bg-white px-4 py-6 hidden lg:flex flex-col items-center justify-between">
              <div className="w-full">
                <img
                  ref={logoRef}
                  src="/logos/logo.png"
                  alt="Logo"
                  className="w-[91px] h-auto"
                  style={{ marginBottom: "20px" }}
                />
                <div className="flex justify-center min-w-max -translate-x-14">
                  <p
                    className="text-or text-[16px] rotate-[270deg] translate-y-28 uppercase font-outfit font-bold"
                    style={{ width: "max-content" }}
                  >
                    &rsaquo; AMBIANCE VERDOYANTE
                  </p>
                </div>
              </div>
              {/* <ForwardLine pourcentage={0} /> */}
            </div>
            <div className="w-full min-h-[559px] overflow-hidden flex flex-col md:items-end items-start  md:justify-between justify-end z-10 relative md:pb-0 pt-28 md:pt-0  md:px-4 relative">
              {/* Appliquez la classe conditionnelle directement à la div backgroundImage */}
              <div
                className={`backgroundImage transition duration-300 ease-in-out ${
                  formFocus ? "blurEffect" : ""
                }`}
              ></div>
              <Nav />
              <div className="h-full bg-or md:mr-20 rounded-tr-[40px] flex flex-col max-w-[320px] md:max-w-[412px] justify-between pb-20">
                <div className="w-full py-2 px-8 md:px-14 bg-white rounded-r-[40px] text-or">
                  <h3 className="text-[10px] font-outfit">Découvrez</h3>
                  <h4 className="text-[20px] font-outfit font-light">
                    Les appartements valony
                  </h4>
                  <h4 className="text-[18px] text-text font-outfit font-light">
                    À POITIERS (86)
                  </h4>
                </div>
                <div className="py-10 px-8 md:px-14 text-white font-outfit font-light">
                  <h3 className="text-[18px]">BESOIN DE RENSEIGNEMENTS ?</h3>
                  <h3 className="text-[18px] md:flex hidden">
                    Laissez-nous vos coordonnées et on vous recontacte !
                  </h3>
                  <h3 className="text-[18px] md:hidden flex">
                    On vous recontacte !
                  </h3>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className=" flex flex-col max-w-[412px] px-8 md:px-14"
                >
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-text placeholder-text font-outfit text-[14px] bg-or border-b-[1px] border-white"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Nom"
                    onChange={(e) => setName(e.target.value)}
                    className="text-text placeholder-text font-outfit text-[14px] bg-or border-b-[1px] border-white mt-4"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Téléphone"
                    onChange={(e) => setPhone(e.target.value)}
                    className="text-text placeholder-text font-outfit text-[14px] bg-or border-b-[1px] border-white mt-4"
                    required
                  />
                  <div className="mt-5">
                    <input
                      checked={checkbox}
                      type="checkbox"
                      onChange={(e) => setCheckbox(e.target.checked)}
                      className="mt-3"
                      required
                    />
                    <label className="ml-3 text-white text-xs">
                      J’ai lu et accepte la politique de confidentialité de ce
                      site.*
                    </label>
                  </div>
                  <div className="w-full flex itms-center md:justify-center justify-end mt-10">
                    <button
                      type="submit"
                      className="bg-or bg-white text-or font-light text-[20px] font-outfit py-2 px-6 mt-5 rounded-full flex items-center"
                      id={"conversion"}
                    >
                      Envoyer
                      <img
                        src="/icons/arrow-or-circle.png"
                        className="ml-2"
                        alt="arrow with circle"
                      />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-gray py-10 px-5 md:mx-0 mx-auto w-full flex md:hidden relative">
            {/* <div className="absolute right-32 md:-top-[70px] -top-[0px] p-2 h-[100px] w-[100px] rounded-full border-2 border-or md:border-[#312F39] bg-or md:bg-[#312F39] justify-center items-center flex-col z-30 md:hidden flex">
              <p className="text-white font-light text-center font-outfit text-[13px] uppercase -translate-y-3">
                LIVRAISON
              </p>
              <p className=" font-playfair text-[35px] text-white leading-3 -translate-y-3">
                2025
              </p>
            </div> */}
          </div>
        </section>
      </>
    );
  };

  return <>{fr()}</>;
};

export default Hero;
