import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, GraduationCap, Code2, ArrowRight, CheckCircle2 } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrainingCard from "@/components/TrainingCard";
import NewsletterPopup from "@/components/NewsletterPopup";
import heroImage from "@/assets/hero-consulting.jpg";

const Landing = () => {
  const services = [
    {
      icon: BarChart3,
      title: "Consulting industriel",
      description: "Optimisation de vos processus textile et contrôle de gestion pour améliorer vos performances opérationnelles.",
    },
    {
      icon: Database,
      title: "Implémentation ERP",
      description: "Déploiement et configuration de solutions ERP adaptées à votre secteur d'activité.",
    },
    {
      icon: GraduationCap,
      title: "Formations Excel & Power BI",
      description: "Maîtrisez Excel et Power BI pour transformer vos données en décisions stratégiques.",
    },
    {
      icon: Code2,
      title: "Développement d'applications",
      description: "Solutions digitales sur mesure pour automatiser vos processus métiers.",
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Ben Ali",
      role: "Directeur Financier, Textile Group",
      content: "Grâce à Zaddem Consulting, nous avons optimisé notre contrôle de gestion et gagné 30% de temps sur nos reportings.",
      rating: 5,
    },
    {
      name: "Leila Mansour",
      role: "Responsable Formation, IndusTech",
      content: "La formation Power BI a transformé notre façon d'analyser les données. Des résultats concrets dès la première semaine.",
      rating: 5,
    },
    {
      name: "Mohamed Trabelsi",
      role: "CEO, Consulting Partners",
      content: "Un expert qui combine parfaitement compétences techniques et vision stratégique. Très recommandé !",
      rating: 5,
    },
  ];

  const partners = [
    "Microsoft Partner",
    "SAP Certified",
    "Textile Excellence",
    "Data Analytics Pro",
  ];

  const trainings = [
    {
      title: "Excel Avancé",
      description: "Améliorez votre maîtrise d'Excel et créez des tableaux de bord professionnels.",
      date: "Novembre 2025",
    },
    {
      title: "Power BI pour Contrôleurs de Gestion",
      description: "Construisez vos reportings automatisés avec Power BI.",
      date: "Décembre 2025",
    },
    {
      title: "ERP et Transformation Digitale",
      description: "Digitalisez vos processus avec des ERP modernes.",
      date: "Janvier 2026",
    },
  ];

  return (
    <div className="min-h-screen">
      <NewsletterPopup />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(210 100% 20% / 0.95) 0%, hsl(210 80% 30% / 0.9) 100%), url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
              Optimisez vos performances avec la data et l'excellence opérationnelle
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Consulting, Formation et Solutions digitales pour transformer vos opérations et booster vos résultats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8">
                  Contactez-nous
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline-light" className="font-semibold text-lg px-8">
                  En savoir plus
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions sur mesure pour répondre à vos enjeux de performance et de transformation digitale
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 text-accent">18+</div>
              <p className="text-lg text-primary-foreground/80">Années d'expérience</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 text-accent">100K</div>
              <p className="text-lg text-primary-foreground/80">Objectif de personnes formées</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-display font-bold mb-2 text-accent">∞</div>
              <p className="text-lg text-primary-foreground/80">Solutions personnalisées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Témoignages clients
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que nos clients disent de notre accompagnement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="font-display font-bold text-2xl text-foreground mb-8">
              Nos certifications et partenariats
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-card rounded-lg border border-border text-muted-foreground font-semibold"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trainings Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Nos formations à venir
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Développez vos compétences avec nos formations pratiques et orientées résultats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {trainings.map((training, index) => (
              <TrainingCard key={index} {...training} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Discutons de vos projets et découvrez comment nous pouvons vous accompagner vers l'excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg px-8">
                  Demander un devis
                </Button>
              </Link>
              <Link to="/newsletter">
                <Button size="lg" variant="outline-light" className="font-semibold text-lg px-8">
                  S'abonner à la newsletter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;