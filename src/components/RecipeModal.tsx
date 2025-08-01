import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ChefHat, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Recipe } from "@/data/mockRecipes";

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  if (!recipe) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <DialogHeader>
          <div className="relative mb-4">
            <img 
              src={recipe.image} 
              alt={recipe.title}
              className="h-64 w-full object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge className={getDifficultyColor(recipe.difficulty)}>
                {recipe.difficulty}
              </Badge>
              <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold">{recipe.title}</DialogTitle>
          <DialogDescription className="text-base">
            {recipe.description}
          </DialogDescription>
          
          <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>{recipe.servings} servings</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat className="h-5 w-5" />
              <span>{recipe.category}</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-4 animate-slide-up">
            <h3 className="text-lg font-semibold">Ingredients</h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 p-2 rounded-md hover:bg-accent transition-colors duration-200"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold">Instructions</h3>
            <ol className="space-y-3">
              {recipe.instructions.map((instruction, index) => (
                <li 
                  key={index}
                  className="flex gap-3 p-3 rounded-md hover:bg-accent transition-colors duration-200"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};