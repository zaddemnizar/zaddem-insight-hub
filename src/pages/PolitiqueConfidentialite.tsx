import { Helmet } from "react-helmet";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité - Zaddem Consulting</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles de Zaddem Consulting, conforme à la législation tunisienne." />
      </Helmet>
      
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-zaddem-navy mb-8">
            Politique de confidentialité
          </h1>
          
          <div className="bg-card rounded-lg shadow-sm p-8 space-y-8 text-foreground">
            {/* Introduction */}
            <section>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zaddem Consulting accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité a pour but de vous informer de manière claire et transparente sur la façon dont nous collectons, utilisons, partageons et protégeons vos données personnelles, conformément à la <strong className="text-foreground">Loi tunisienne n°2004-63 du 27 juillet 2004 relative à la protection des données à caractère personnel</strong>, ainsi qu'aux bonnes pratiques internationales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En utilisant notre site web www.zaddem-consulting.com, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </section>

            {/* Responsable du traitement */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                1. Responsable du traitement des données
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Raison sociale :</strong> Zaddem Consulting</p>
                <p><strong className="text-foreground">Siège social :</strong> Mahdia, Tunisie</p>
                <p><strong className="text-foreground">Contact :</strong> contact@zaddem-consulting.com</p>
                <p><strong className="text-foreground">Responsable :</strong> Nizar Zaddem</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                2. Données personnelles collectées
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zaddem Consulting collecte et traite différentes catégories de données personnelles selon les services utilisés :
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">2.1. Formulaire de contact</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Sujet et message</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">2.2. Inscription à la newsletter</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Prénom</li>
                    <li>Adresse email</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">2.3. Données de navigation</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages consultées et durée de visite</li>
                    <li>Date et heure de connexion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                3. Finalités de la collecte des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les données personnelles collectées sont utilisées aux fins suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Répondre à vos demandes d'information et de contact</li>
                <li>Gérer votre inscription à notre newsletter et vous envoyer des contenus éducatifs et promotionnels</li>
                <li>Améliorer l'expérience utilisateur et la qualité de nos services</li>
                <li>Réaliser des analyses statistiques et améliorer le fonctionnement du site</li>
                <li>Assurer la sécurité et la protection de notre site contre les abus et les fraudes</li>
                <li>Respecter nos obligations légales et réglementaires</li>
              </ul>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                4. Base légale du traitement
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le traitement de vos données personnelles repose sur les bases légales suivantes :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                <li><strong className="text-foreground">Consentement :</strong> pour l'envoi de la newsletter et l'utilisation de cookies non essentiels</li>
                <li><strong className="text-foreground">Intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
                <li><strong className="text-foreground">Exécution d'un contrat :</strong> pour répondre à vos demandes de services</li>
              </ul>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                5. Durée de conservation des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zaddem Consulting conserve vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Formulaire de contact :</strong> 3 ans à compter de votre dernier contact</li>
                <li><strong className="text-foreground">Newsletter :</strong> jusqu'à votre désinscription</li>
                <li><strong className="text-foreground">Données de navigation :</strong> 13 mois maximum</li>
                <li><strong className="text-foreground">Cookies :</strong> selon la durée spécifique de chaque cookie (maximum 13 mois)</li>
              </ul>
            </section>

            {/* Vos droits */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                6. Vos droits sur vos données personnelles
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conformément à la loi tunisienne n°2004-63, vous disposez des droits suivants concernant vos données personnelles :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                <li><strong className="text-foreground">Droit de rectification :</strong> corriger vos données si elles sont inexactes ou incomplètes</li>
                <li><strong className="text-foreground">Droit de suppression :</strong> demander l'effacement de vos données dans certaines conditions</li>
                <li><strong className="text-foreground">Droit d'opposition :</strong> vous opposer au traitement de vos données pour des raisons légitimes</li>
                <li><strong className="text-foreground">Droit de limitation :</strong> limiter le traitement de vos données dans certains cas</li>
                <li><strong className="text-foreground">Droit de retirer votre consentement :</strong> à tout moment, notamment pour la newsletter</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer vos droits, vous pouvez nous contacter à l'adresse suivante : <a href="mailto:contact@zaddem-consulting.com" className="text-zaddem-gold hover:underline">contact@zaddem-consulting.com</a>. Nous nous engageons à répondre à votre demande dans un délai maximum de 30 jours.
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                7. Sécurité et confidentialité des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zaddem Consulting met en œuvre toutes les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité de vos données personnelles, notamment pour empêcher qu'elles soient déformées, endommagées ou que des tiers non autorisés y aient accès.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ces mesures incluent notamment : le cryptage des données sensibles, l'utilisation de connexions sécurisées (HTTPS), des contrôles d'accès stricts, et des sauvegardes régulières.
              </p>
            </section>

            {/* Partage des données */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                8. Partage et transfert des données
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Zaddem Consulting s'engage à ne jamais vendre, louer ou échanger vos données personnelles avec des tiers à des fins commerciales.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toutefois, vos données peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Prestataires de services :</strong> hébergement web (OVH), outils d'analyse (Google Analytics), service de newsletter, dans le cadre strict de leurs missions</li>
                <li><strong className="text-foreground">Autorités légales :</strong> si requis par la loi ou dans le cadre d'une procédure judiciaire</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Tous nos prestataires sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                9. Cookies et technologies similaires
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site www.zaddem-consulting.com utilise des cookies pour améliorer votre expérience de navigation, réaliser des statistiques de visite et personnaliser le contenu.
              </p>
              
              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Types de cookies utilisés :</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong className="text-foreground">Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                    <li><strong className="text-foreground">Cookies analytiques :</strong> pour mesurer l'audience et améliorer le site (Google Analytics)</li>
                    <li><strong className="text-foreground">Cookies fonctionnels :</strong> pour mémoriser vos préférences</li>
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4">
                Vous pouvez à tout moment désactiver les cookies via les paramètres de votre navigateur. Toutefois, cela peut affecter certaines fonctionnalités du site.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                10. Modifications de la politique de confidentialité
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Zaddem Consulting se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                11. Contact et réclamations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, vous pouvez nous contacter à :
              </p>
              <div className="bg-muted/50 p-4 rounded-md">
                <p className="text-foreground"><strong>Email :</strong> <a href="mailto:contact@zaddem-consulting.com" className="text-zaddem-gold hover:underline">contact@zaddem-consulting.com</a></p>
                <p className="text-foreground mt-2"><strong>Adresse :</strong> Zaddem Consulting, Mahdia, Tunisie</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Si vous estimez que vos droits ne sont pas respectés, vous avez également le droit d'introduire une réclamation auprès de l'Instance Nationale de Protection des Données Personnelles (INPDP) en Tunisie.
              </p>
            </section>

            {/* Dernière mise à jour */}
            <div className="pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground italic">
                Dernière mise à jour : octobre 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
