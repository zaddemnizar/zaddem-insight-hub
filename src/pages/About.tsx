import { Target, Lightbulb, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import nizarPortrait from "@/assets/nizar-portrait.jpg";

const About = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque mission, en apportant des solutions de qualité supérieure.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous restons à la pointe des technologies et méthodologies pour offrir les meilleures pratiques.",
    },
    {
      icon: Target,
      title: "Impact durable",
      description: "Nos solutions créent une valeur mesurable et durable pour nos clients.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="font-display font-extrabold text-5xl md:text-6xl mb-6">
              Zaddem Consulting : l'expertise au service de la performance
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90">
              Transformer les données en décisions, et les décisions en résultats
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 lg:order-1 animate-fade-in">
              <img
                src={nizarPortrait}
                alt="Nizar Zaddem"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              <h2 className="font-display font-bold text-4xl text-foreground">
                Nizar Zaddem
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fondateur de Zaddem Consulting, je mets à votre service{" "}
                <span className="font-semibold text-foreground">18 années d'expérience</span> dans le secteur textile et le contrôle de gestion.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionné par la data et l'optimisation des processus, je me suis spécialisé dans{" "}
                <span className="font-semibold text-foreground">Excel, Power BI, les ERP et le Lean Management</span>.
              </p>
              <div className="p-6 bg-accent/10 rounded-xl border-l-4 border-accent">
                <p className="text-lg font-semibold text-foreground mb-2">Notre Mission</p>
                <p className="text-muted-foreground italic">
                  "Aider 100 000 individus et entreprises à créer de la valeur grâce à la data et à Excel, en transformant leurs opérations et en maximisant leur efficacité."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre travail et notre engagement envers nos clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover-lift border-border hover:border-accent hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-accent/10 text-accent">
                    <value.icon size={32} strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Notre Vision
            </h2>
            <blockquote className="text-2xl md:text-3xl font-display italic leading-relaxed">
              "Transformer les données en décisions, et les décisions en résultats."
            </blockquote>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Nous croyons fermement que chaque organisation possède un potentiel inexploité dans ses données. 
              Notre rôle est de révéler ce potentiel et de vous accompagner dans votre transformation digitale 
              pour créer un avantage compétitif durable.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-bold text-4xl text-center text-foreground mb-12 animate-fade-in">
              Domaines d'expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
              {[
                "Contrôle de gestion",
                "Industrie textile",
                "Excel & Power BI",
                "Implémentation ERP",
                "Lean Management",
                "Business Intelligence",
                "Analyse de données",
                "Formation professionnelle",
              ].map((expertise, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent" />
                  <span className="text-lg text-foreground font-medium">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;