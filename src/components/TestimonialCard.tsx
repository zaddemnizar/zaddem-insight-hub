import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({ name, role, content, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-6 hover-lift border-border">
      <div className="space-y-4">
        <div className="flex gap-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground italic leading-relaxed">
          "{content}"
        </p>
        <div className="pt-4 border-t border-border">
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;