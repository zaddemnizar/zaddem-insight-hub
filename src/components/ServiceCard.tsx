import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="p-6 hover-lift border-border hover:border-accent hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col items-start gap-4">
        <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
          <Icon size={28} strokeWidth={2} />
        </div>
        <div className="space-y-2">
          <h3 className="font-display font-bold text-xl text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;