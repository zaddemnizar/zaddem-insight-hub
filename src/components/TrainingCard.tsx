import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface TrainingCardProps {
  title: string;
  description: string;
  date: string;
}

const TrainingCard = ({ title, description, date }: TrainingCardProps) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="font-display text-xl text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-2 text-primary">
          <Calendar size={18} />
          <span className="font-semibold">{date}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Link to="/contact" className="w-full">
          <Button className="w-full font-semibold">
            S'inscrire
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TrainingCard;
