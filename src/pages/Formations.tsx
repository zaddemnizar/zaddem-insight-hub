import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Search, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import formationsData from "@/data/formations.json";

const Formations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  // Extract unique categories
  const categories = ["Toutes", ...Array.from(new Set(formationsData.map((f) => f.category)))];

  // Filter formations based on search and category
  const filteredFormations = useMemo(() => {
    return formationsData.filter((formation) => {
      const matchesSearch = 
        formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formation.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formation.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "Toutes" || formation.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Nos Formations | Zaddem Consulting</title>
        <meta name="description" content="Découvrez nos formations professionnelles en Excel, Power BI, ERP et gestion textile. Développez vos compétences avec Zaddem Consulting." />
      </Helmet>

      <div className="min-h-screen bg-background pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Nos Formations
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Développez vos compétences avec nos formations professionnelles animées par des experts. 
              Excel, Power BI, ERP et solutions métier adaptées à vos besoins.
            </p>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Formations Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFormations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation) => (
                <Card 
                  key={formation.id} 
                  className="h-full flex flex-col hover-lift overflow-hidden group"
                  style={{ boxShadow: "var(--shadow-soft)" }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {formation.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {formation.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground line-clamp-2">
                      {formation.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>{formation.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={16} />
                      <span>{formation.location}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-2xl font-display font-bold text-primary">
                        {formation.price} {formation.currency}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formation.duration}
                      </p>
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Link to={`/formations/${formation.slug}`} className="w-full">
                      <Button className="w-full group/btn">
                        En savoir plus
                        <ArrowRight size={18} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">
                Aucune formation ne correspond à votre recherche.
              </p>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Une formation sur mesure ?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Nous pouvons adapter nos formations à vos besoins spécifiques ou créer un programme personnalisé pour votre entreprise.
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Contactez-nous
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Formations;
