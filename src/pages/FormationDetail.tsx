import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { ArrowLeft, Calendar, MapPin, Clock, User, CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import formationsData from "@/data/formations.json";

const FormationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formation = formationsData.find((f) => f.slug === slug);

  if (!formation) {
    return <Navigate to="/formations" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Create mailto link with form data
    const subject = `Inscription - ${formation.title}`;
    const body = `
Nouvelle inscription pour la formation : ${formation.title}

Nom et prénom : ${formData.name}
Email : ${formData.email}
Téléphone : ${formData.phone}
Message : ${formData.message || "Aucun message"}

Formation : ${formation.title}
Date : ${formation.date}
Prix : ${formation.price} ${formation.currency}
    `.trim();

    const mailtoLink = `mailto:contact@zaddem-consulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;

    // Show success message
    toast({
      title: "Demande envoyée !",
      description: "Merci pour votre inscription. Nous vous contacterons sous peu.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>{formation.title} | Zaddem Consulting</title>
        <meta name="description" content={formation.description} />
      </Helmet>

      <div className="min-h-screen bg-background pt-32 pb-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <Link to="/formations">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft size={18} />
              Retour aux formations
            </Button>
          </Link>
        </div>

        {/* Hero Image and Title */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8" style={{ boxShadow: "var(--shadow-large)" }}>
            <img 
              src={formation.image} 
              alt={formation.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
              <div className="p-8 md:p-12 text-primary-foreground">
                <div className="mb-4">
                  <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {formation.category}
                  </span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                  {formation.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-3xl">
                  {formation.description}
                </p>
              </div>
            </div>
          </div>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-6 text-center">
                <Calendar className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm text-muted-foreground mb-1">Date</p>
                <p className="font-semibold">{formation.date}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <Clock className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm text-muted-foreground mb-1">Durée</p>
                <p className="font-semibold">{formation.duration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <MapPin className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm text-muted-foreground mb-1">Lieu</p>
                <p className="font-semibold">{formation.mode}</p>
                <p className="text-xs text-muted-foreground">{formation.location}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <User className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm text-muted-foreground mb-1">Formateur</p>
                <p className="font-semibold">{formation.trainer}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Objectives */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Objectifs de la formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {formation.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-accent flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Program */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Programme détaillé</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {formation.program.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground pt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Prerequisites and Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Prérequis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{formation.prerequisites}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-display text-xl">Public cible</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{formation.targetAudience}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Registration Form */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24" style={{ boxShadow: "var(--shadow-medium)" }}>
                <CardHeader>
                  <div className="text-center mb-4">
                    <p className="text-4xl font-display font-bold text-primary mb-2">
                      {formation.price} {formation.currency}
                    </p>
                    <p className="text-sm text-muted-foreground">{formation.duration}</p>
                  </div>
                  <CardTitle className="font-display text-2xl text-center">
                    Inscription
                  </CardTitle>
                  <CardDescription className="text-center">
                    Remplissez le formulaire pour vous inscrire à cette formation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-foreground mb-1.5 block">
                        Nom et prénom *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-foreground mb-1.5 block">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-medium text-foreground mb-1.5 block">
                        Téléphone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground mb-1.5 block">
                        Message (optionnel)
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Questions ou informations complémentaires..."
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          Je m'inscris à cette formation
                          <Send size={18} className="ml-2" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Nous vous contacterons dans les plus brefs délais pour confirmer votre inscription.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FormationDetail;
