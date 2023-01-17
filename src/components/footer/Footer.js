import React from "react";
import Select from 'react-select';
import { Modal } from "react-bootstrap";

export function Footer({ t }) {
  const style = {
    boxShadow: "none",
    border: 0,
    backgroundColor: "#f3f6f9",
    borderRadius: 0,
    outline: "none",
  };
  const [show, setShow] = React.useState(false);

  return (
    <>
      {/* begin::Footer */}
      {/* doc: add "bg-white" class to have footer with solod background color */}
      <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
        {/* begin::Container */}
        <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* begin::Copyright */}
          <div className="text-dark order-1 order-md-1 mr-3">
            <span className="text-muted font-weight-bold">{new Date().getFullYear()} &copy;</span>
            {` `}
            Mossahamati
          </div>
          {/* end::Copyright */}
          <div className="text-dark order-2 order-md-2 mr-3">
            <span className="text-dark-75 font-weight-bold mr-1" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => setShow(!show)}>
              {t('common:confidentiality_policy')}
            </span>
          </div>
          {/* begin::Language */}
          <div className="dropdown dropdown-language order-3 order-md-3 ml-3">
            <select name="" id="" style={style}>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
            </select>
          </div>
          {/* end::Language */}
        </div>
        {/* end::Container */}
      </div>
      {/* end::Footer */}
      {/* begin::Modal Confidentiality Policy */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        scrollable
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {t('common:confidentiality_policy')}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <p style={{ textAlign: "justify" }}>
              <h4 style={{ textDecoration: "underline", color: "#F39200" }}>
                I. Définition des conditions générales d’utilisation
              </h4>
              <p>
                Les présentes encadrent les modalités d’accès et d’utilisation des services Mossahamati, elles
                définissent les droits et les obligations du fournisseur de services et de l’utilisateur lors de
                l’utilisation de ces services.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                1. Fournisseurs de services :
              </h5>
              <p>
                La solution Mossahamati est gérée, maintenue et administrée par la société Mossahamati Experience,
                société de droit marocain, organisée en Société à Responsabilité Limitée, au capital de
                10 000,00 DHS marocain, dont le siège social est situé à : AMAL 5 AL MASSIRA N 669 CYM
                RABAT.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                2. Utilisateurs autorisés :
              </h5>
              <p>
                La plateforme Mossahamati accompagne les professionnels, quels que soient leurs secteurs
                d'activités, leurs statuts juridiques ou leurs modes d'organisations dans l’ensemble des
                démarches légales et administratives, que ces derniers souhaitent confier à la plateforme
                Mossahamati.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                3. Services proposés :
              </h5>
              <p>
                Mossahamati accompagne les utilisateurs dans leurs démarches administratives et légales par
                le biais d’un panel de services d’assistanat digital, les services prodigués comprennent en
                autres :
                − L’accompagnement aux démarches déclaratives et de paiement ;
                − Le support en cas de situations problématiques ;
                − L’orientation auprès des organismes et autorités compétentes dans le cadre des activités
                confiées à Mossahamati.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                4. Modalités d’inscription aux services Mossahamati :
              </h5>
              <p>
                − L’accès aux services Mossahamati est ouvert à tous les professionnels.
                − L’utilisation de Mossahamati requiert le téléchargement de l’application et l’utilisation d’une
                connexion internet.
                − L’utilisation de la plateforme nécessite la création d’un compte utilisateur par activité
                professionnelle.
                − L’utilisateur, fournit un numéro de téléphone mobile principal valide, lors de son
                inscription à la plateforme, ce dernier servira d’identifiant et sera utilisé pour la
                confirmation des opérations réalisées sur son compte et permettra par la suite de lui
                communiquer les informations et les notifications relatives à la progression de ses
                démarches.
                − Lors de la création de son compte, l’utilisateur reçoit son identifiant unique et un mot de
                passe complexe, au travers d’un sms.
                − L’utilisateur doit veiller à conserver confidentiel son identifiant et son mot de passe.
                − L’utilisateur s’engage à informer immédiatement le support Mossahamati de toute utilisation
                ou soupçon d’utilisation frauduleuse de ces identifiants. Mossahamati ne pourra être tenu
                responsable des dommages causés par utilisation détournée des identifiants.
                − Mossahamati se réserve le droit de résilier tout compte utilisateur impliqué dans des
                utilisations abusives, frauduleuses et qui ne respectent pas les présentes conditions
                d’utilisation et les éventuelles conditions particulières.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                5. Champ de responsabilité Mossahamati
              </h5>
              <p>
                L’utilisation de Mossahamati est consentie aux fins suivantes et se limite aux opérations détaillées
                ci-dessous :
                − Héberger les informations et contenus transmis par l’utilisateur dans le cadre de la
                fourniture des prestations Mossahamati, dans ses serveurs dédiés sécurisés.
                − Analyser les données communiquées afin d’en vérifier la conformité règlementaire.
                − Communiquer à des organismes étatiques toute information nécessaire à la réalisation
                de démarches légales et administratives des utilisateurs.
                − Représenter avec son consentement, l’utilisateur Mossahamati par le biais de délégation de
                pouvoir afin d’accomplir en son nom et pour son compte des actes auprès des
                administrations publiques et des organismes conventionnés.
                3
                − Assurer le suivi et la planification de notifications en faveur du respect de l’obligation
                fiscale et légale de l’utilisateur Mossahamati.
                − Fournir à la demande de l’utilisateur des services complémentaires à l’offre initialement
                souscrite.
                − Collaborer avec les autorités compétentes en cas de procédures légales entamées à
                l’encontre d’un utilisateur de la plateforme.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                6. Règles d’utilisation des services :
              </h5>
              <p>
                Lors de l’utilisation de Mossahamati, l’utilisateur s’engage à :
                − Respecter les présentes conditions et les conditions supplémentaires spécifiques à
                certains services.
                − Communiquer des informations réelles, vérifiables et fondées. L’utilisateur est seul
                responsable des données d’entrées saisies dans les différentes interfaces de Mossahamati.
                − Agir en accord avec les lois et règlements applicables, y compris celles relatives à
                l’utilisation des données à caractère personnel.
                − Se conformer à toutes les ordonnances et décisions des organismes publics desquels
                l’utilisateur dépend.
                − A transmettre, tout élément nécessaire pour dresser une situation fiscale et légale
                conforme à chaque échéance de déclaration.
                − Garantir une utilisation saine des services conformément aux lois et règles applicables à
                l’activité professionnelle exercée et aux règles de droit pénal, civil et de tout autre code
                applicable par défaut aux activités de l’utilisateur.
                4
                II. Les services Mossahamati
                Dès l’ouverture d’un compte Mossahamati, l’utilisateur est consid
              </p>
              <h4 style={{ textDecoration: "underline", color: "#F39200" }}>
                II. Les services Mossahamati
              </h4>
              <p>
                Dès l’ouverture d’un compte Mossahamati, l’utilisateur est considéré responsable de l’utilisation
                qui en est faite et des informations saisies. Mossahamati Experience utilisera les données
                communiquées par l’utilisateur et ne saurait être responsable en cas d’omission ou d’erreur
                de la part de l’utilisateur.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                1. Responsabilités du l’utilisateur
              </h5>
              <p>
                Mossahamati propose des missions d’assistanat, d’accompagnement et de support pour la
                réalisation des démarches relatives à la déclaration et à la gestion de l’obligation fiscale,
                légale ou administrative, toutefois l’utilisateur est seul responsable face aux administrations
                et organismes publics en charge de ces obligations.
                L’utilisateur s’engage à fournir, dans le cadre de l’utilisation des services Mossahamati, des
                informations exactes, vérifiables, et complètes. Dans le cas où l’utilisateur ne respecterait
                pas cette obligation, Mossahamati Experience se réserve le droit de résilier, suspendre, ou
                annuler les démarches réalisées au profit de l’utilisateur et pourra décider de la clôture du
                compte de l’utilisateur ayant failli à cet engagement.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                2. Limite de responsabilité des Mossahamati :
              </h5>
              <p>
                Mossahamati ne peut être tenu responsable de :
                − Pertes de profits, de revenus, de réputation, d’opportunités, de clients ou d’avantages
                quelconque par l’utilisateur.
                − Pénalités, majorations, intérêts punitifs imposés par la loi, les autorités compétentes ou
                mandatées à l’encontre de l’utilisateur de Mossahamati.
                Dans l’éventualité où la responsabilité de Mossahamati Experience serait engagée, par rapport
                à une situation défavorable dans laquelle l’utilisateur se retrouverait. La responsabilité de
                Mossahamati Experience devra être prouvée par une expertise indépendante, demandée par le
                tribunal compétent.
                La responsabilité totale de Mossahamati au titre des présentes conditions, ne saurait dépasser
                le plus élevé des deux montants suivants : 5 000,00 DHS ou 125% des frais payés par
                l’utilisateur durant les 12 derniers mois d’utilisation précédant le différend entre les deux
                parties.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                3. Clause de non-responsabilité :
              </h5>
              <p>
                Mossahamati s’engage à traiter les données utilisateur en accord avec les prérequis
                règlementaires et les bonnes pratiques admises dans les champs d’expertise de Mossahamati.
                Mossahamati contribuera à la création d’une situation favorable à l’atteinte de la conformité de
                l’utilisateur aux obligations auxquelles, il est soumis.
                Cependant, l’ensemble des opérations réalisées, dépendent des informations
                communiquées par l’utilisateur, leur exactitude et véracité relèvera de la responsabilité de
                ce dernier et toutes les actions en découlant seront directement impactées par les
                informations transmises.
                Toute erreur, omission, lacune volontaire ou involontaire est du ressort de l’utilisateur, ce
                dernier déclare l’exactitude des informations qu’il fournit à chaque étape des processus
                d’assistanat digital. La responsabilité de l’utilisateur est et sera engagé en cas de sollicitation
                par les autorités publiques.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                4. Communications liées aux services :
              </h5>
              <p>
                Afin de faire bénéficier l’utilisateur du panel de services offerts par Mossahamati, il est possible
                que les utilisateurs reçoivent des annonces ou des appels à actions soit sous forme d’appels
                téléphoniques, de sms et de mails. Les modalités de l’exercice des droits de nonsollicitation seront détaillées lors de chaque campagne de communication pour chacun des
                canaux.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                5. Données personnelles :
              </h5>
              <p>
                La société Mossahamati Experience, éditrice et gestionnaire de la solution Mossahamati, respecte la
                vie privée de ses utilisateurs, la société s’engage à ce titre à ce que l’ensemble des
                informations recueillies, soient considérées et traitées en tant qu’informations
                confidentielles.
                La société Mossahamati Experience respecte les exigences de la commission nationale de
                protection des données et la loi 09-08 relative à la protection des données à caractère
                personnel, ainsi elle met en place les mesures organisationnelles et techniques nécessaires
                à la protection des informations en sa possession.
                6
                Mossahamati utilise les informations recueillies auprès de ses utilisateurs, pour satisfaire la
                finalité suivante : la fourniture de services d’assistanat digital pour les professionnels.
                Au titre des dispositions de la loi 09-08, les utilisateurs disposent de droits quant à
                l’utilisation de leurs données par la plateforme Mossahamati :
                − Droit d’accès :
                Les utilisateurs peuvent solliciter le système de support Mossahamati afin d’obtenir une copie
                des informations qu’ils ont saisis ou partagés lors de leur utilisation de la plateforme.
                Mossahamati Experience s’engage à remettre dans un délai ne dépassant pas 10 jours ouvrables
                une copie de ses informations.
                − Droit de rectification :
                Les utilisateurs de l’application peuvent solliciter le support Mossahamati pour émettre une
                demande de rectification de leurs informations, cette demande devra intégrer, les
                justificatifs attestant de la justesse des rectifications demandées.
                − Droit à l’oubli :
                Les utilisateurs Mossahamati, peuvent demander la suppression définitive de l’ensemble des informations enregistrées dans la plateforme lors de la désactivation et/ou suppression de leur compte utilisateur.
                Mossahamati Experience confirmera par le biais d’une attestation la prise en compte de la demande et la suppression des informations utilisateurs.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                6. Autorisation d’utilisation des données :
              </h5>
              <p>
                Les services Mossahamati permettent d’importer, d’exporter, de saisir et de stocker les
                informations nécessaires pour la création et la gestion du compte utilisateur, certaines de
                ses informations sont catégorisées en tant que données à caractère personnel, celles-ci
                seront utilisées strictement dans le cadre des services souscrits.
                Les informations, déclarations et contenus demeurent la propriété de l’utilisateur, ce qui
                signifie que, ce dernier est en entièrement responsable. Les présentes régissent les
                modalités d’accès, d’utilisation, de stockage, d’archivage et de suppression de ses données.
                Ne sont pas considérées en tant que données à caractère personnel :
                7
                −Les informations factuelles publiques relatives à l’utilisateur ;
                −Les commentaires et communications échangées entre l’utilisateur et les systèmes de la
                plateforme Mossahamati.
                −Les informations devant être partagées auprès d’organismes étatiques pour la conduite des
                prestations Mossahamati.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                7. Durée de stockage et de conservation des données :
              </h5>
              <p>
                Mossahamati conserve les données de l’utilisateur, tant que celui-ci utilise les services offerts par
                la plateforme, les données importées sont détruites dès que l’utilisateur désactive son
                compte.
                Toute information permettant d’identifier directement ou indirectement une personne
                physique est systématiquement détruite lors de la suppression du compte utilisateur et
                toute copie physique originale en possession de Mossahamati d’un document officiel, sera
                remise par courrier recommandé avec accusé de réception à l’adresse de résidence
                principale communiquée par l’utilisateur.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                8. Frais :
              </h5>
              <p>
                Les frais d’abonnement sont fixés par type d’utilisateur et par type de prestation.
                Toute souscription à un service supplémentaire donnera lieu à la mise en place d’une
                facturation spécifique pour ce service.
                <h6 className="text-dark-50 pt-5">
                  a. Ajustement des frais lors du renouvellement de la souscription
                </h6>
                <p>
                  A la fin du terme initial de service, fixé à douze mois, sauf cas particuliers, les frais de la
                  solution pourront augmenter, afin de refléter les améliorations et les services
                  complémentaires mis en place.
                  Si tel est le cas, Mossahamati Experience informera l’utilisateur, trente jours avant la date
                  anniversaire de sa première souscription, de la modification des tarifs applicables en
                  fonction des services souscrits.
                  Si l’utilisateur s’oppose à cette augmentation, le service sera résilié et le compte utilisateur
                  désactivé, au terme de la période en cours.
                </p>
                <h6 className="text-dark-50 pt-5">
                  b. Paiement
                </h6>
                <p>
                  À la suite de la délivrance par Mossahamati de l’avis de paiement/facture de prestation,
                  l’utilisateur, transmettra dans un délai maximal de 10 jours ouvrables, la confirmation du
                  paiement et l’utilisateur recevra, par la suite, la confirmation de paiement afférant à la
                  prestation réalisée.
                </p>
              </p>
              <h5 style={{color: "#f39200a3"}}>
                9. Force Majeure :
              </h5>
              <p>
                Les cas de force majeure suspendent les obligations de la plateforme Mossahamati envers ses
                utilisateurs. Mossahamati Experience et toute tierce partie participant à la fourniture des services
                ne sont responsables des défaillances, des retards ou des dysfonctionnements dans la
                conduite des services, en cas de concrétisation de situations indépendantes de la volonté
                de Mossahamati Experience.
                Ces situations incluent sans limitation : Actes de autorités civiles ou militaires,
                manifestations, rupture de l’équilibre national ou international, catastrophes naturelles ou
                provoquées, rupture des services des partenaires de la plateforme ou des fournisseurs
                nécessaires à la réalisation des services Mossahamati, ou tout autre événement soustrait au bon
                vouloir des gestionnaires de la solution Mossahamati et entrainant une incapacité à fournir les
                services.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                10. Droits de propriété :
              </h5>
              <p>
                Il est interdit à l’utilisateur, de copier, reproduire, diffuser, vendre, modifier, exploiter de
                quelque manière que ce soit les informations et interfaces des plateformes Mossahamati.
                En conséquence, toute reproduction partielle ou totale ou utilisation non autorisée
                formellement est strictement interdite.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                11. Différends et droit applicable
              </h5>
              <p>
                Les présentes conditions générales d’utilisation obéissent au droit marocain. En cas de
                litige, le tribunal de commerce de Rabat est désigné en tant que tribunal compétent.
                9
                12. Modifications des conditions générales d’utilisation
                Mossahamati Experience se réserve le droit de modifier les présentes cond
              </p>
              <h5 style={{color: "#f39200a3"}}>
                12. Modifications des conditions générales d’utilisation
              </h5>
              <p>
                Mossahamati Experience se réserve le droit de modifier les présentes conditions générales
                d’utilisation, afin notamment, de se conformer à toute évolution légale, jurisprudentielle,
                technique ou organisationnelle. L’utilisateur sera informé des modifications apportées et
                ce dernier devra les accepter ou les refuser.
                Dans l'éventualité où l'utilisateur n'accepterait pas les nouvelles conditions, il ne serait plus
                en mesure d’utiliser les services Mossahamati, et la procédure de désactivation de son compte
                sera systématiquement enclenché.
              </p>
              <h5 style={{color: "#f39200a3"}}>
                13. Intégralité de l’accord
              </h5>
              <p>
                Les présentes conditions générales d’utilisation comportent l’intégralité de l’accord passé
                entre l’utilisateur et Mossahamati Experience.
              </p>
            </p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
