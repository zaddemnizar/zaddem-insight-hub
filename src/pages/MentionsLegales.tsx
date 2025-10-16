import { Helmet } from "react-helmet";

const MentionsLegales = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales - Zaddem Consulting</title>
        <meta name="description" content="Mentions légales et informations juridiques de Zaddem Consulting, société de consulting basée à Mahdia, Tunisie." />
      </Helmet>
      
      <div className="min-h-screen bg-background py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-zaddem-navy mb-8">
            Mentions légales
          </h1>
          
          <div className="bg-card rounded-lg shadow-sm p-8 space-y-8 text-foreground">
            {/* Identification */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                1. Identification de l'entreprise
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Raison sociale :</strong> Zaddem Consulting</p>
                <p><strong className="text-foreground">Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong className="text-foreground">Fondateur et responsable de la publication :</strong> Nizar Zaddem</p>
                <p><strong className="text-foreground">Siège social :</strong> Mahdia, Tunisie</p>
                <p><strong className="text-foreground">Adresse électronique :</strong> contact@zaddem-consulting.com</p>
                <p><strong className="text-foreground">Site web :</strong> www.zaddem-consulting.com</p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                2. Hébergement du site
              </h2>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Hébergeur :</strong> OVH</p>
                <p><strong className="text-foreground">Registrar du nom de domaine :</strong> OVH</p>
                <p>OVH SAS – 2 rue Kellermann, 59100 Roubaix, France</p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                3. Propriété intellectuelle
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'ensemble du contenu présent sur le site www.zaddem-consulting.com (textes, graphismes, logos, images, vidéos, icônes, mise en page, etc.) est la propriété exclusive de Zaddem Consulting, sauf mention contraire.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Zaddem Consulting.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Toute exploitation non autorisée du site ou de l'un quelconque de ses éléments sera considérée comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions de la législation tunisienne en vigueur.
              </p>
            </section>

            {/* Conditions d'utilisation */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                4. Conditions d'utilisation du site
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'utilisateur du site www.zaddem-consulting.com reconnaît disposer de la compétence et des moyens nécessaires pour accéder et utiliser ce site. Il reconnaît également avoir vérifié que la configuration informatique utilisée ne contient aucun virus et qu'elle est en parfait état de fonctionnement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zaddem Consulting met tout en œuvre pour offrir aux utilisateurs des informations et/ou des outils disponibles et vérifiés, mais ne saurait être tenu pour responsable des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site.
              </p>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                5. Limitation de responsabilité
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler par email à contact@zaddem-consulting.com, en décrivant le problème de la manière la plus précise possible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Zaddem Consulting ne saurait être tenu responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
              </p>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                6. Liens hypertextes
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site www.zaddem-consulting.com peut contenir des liens hypertextes vers d'autres sites présents sur le réseau Internet. Les liens vers ces autres ressources vous font quitter le site www.zaddem-consulting.com.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Il est possible de créer un lien vers la page de présentation de ce site sans autorisation expresse de Zaddem Consulting. Aucune autorisation ou demande d'information préalable ne peut être exigée par l'éditeur à l'égard d'un site qui souhaite établir un lien vers le site de l'éditeur. Il convient toutefois d'afficher ce site dans une nouvelle fenêtre du navigateur.
              </p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                7. Droit applicable et juridiction compétente
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Les présentes mentions légales sont régies par le droit tunisien. Tout litige relatif à l'utilisation du site www.zaddem-consulting.com sera soumis à la compétence exclusive des tribunaux de Mahdia, Tunisie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                En cas de litige, les parties s'efforceront de trouver une solution amiable avant toute action judiciaire.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-zaddem-navy mb-4">
                8. Contact
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Pour toute question ou demande d'information concernant le site, ou tout signalement de contenu ou d'activités illicites, l'utilisateur peut contacter Zaddem Consulting à l'adresse email suivante : <a href="mailto:contact@zaddem-consulting.com" className="text-zaddem-gold hover:underline">contact@zaddem-consulting.com</a>
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

export default MentionsLegales;
