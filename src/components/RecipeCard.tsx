import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat } from "lucide-react";
import { Recipe } from "@/data/mockRecipes";

interface RecipeCardProps {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
}

export const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-large hover:scale-105 hover:-translate-y-2 animate-fade-in"
      onClick={() => onClick(recipe)}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          className={`absolute top-3 right-3 ${getDifficultyColor(recipe.difficulty)} transition-transform duration-300 group-hover:scale-110`}
        >
          {recipe.difficulty}
        </Badge>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
          {recipe.title}
        </CardTitle>
        <CardDescription className="text-sm">
          {recipe.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{recipe.cookTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{recipe.servings} servings</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="h-4 w-4" />
            <span>{recipe.category}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};