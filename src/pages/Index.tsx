import { useState } from "react";
import { RecipeCard } from "@/components/RecipeCard";
import { RecipeModal } from "@/components/RecipeModal";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { ChefHat, Sparkles } from "lucide-react";
import { mockRecipes, Recipe } from "@/data/mockRecipes";
import heroImage from "@/assets/recipe-hero.jpg";

const Index = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);

  const filteredRecipes = mockRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(recipe.category);
    const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(recipe.difficulty);
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ChefHat className="h-12 w-12 text-primary-glow animate-bounce-gentle" />
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Recipe
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Generator</span>
              </h1>
              <Sparkles className="h-8 w-8 text-primary-glow animate-pulse-glow" />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover amazing recipes, explore new flavors, and create culinary masterpieces in your kitchen
            </p>
            
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            >
              Explore Recipes
            </Button>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Recipe</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Search through our collection of delicious recipes tailored to your taste
            </p>
          </div>
          
          <div className="flex justify-center mb-12">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              selectedDifficulties={selectedDifficulties}
              onDifficultyChange={setSelectedDifficulties}
            />
          </div>

          {/* Recipe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecipes.map((recipe, index) => (
              <div 
                key={recipe.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RecipeCard
                  recipe={recipe}
                  onClick={setSelectedRecipe}
                />
              </div>
            ))}
          </div>

          {filteredRecipes.length === 0 && (
            <div className="text-center py-16 animate-fade-in">
              <ChefHat className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No recipes found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Recipe Modal */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={!!selectedRecipe}
        onClose={() => setSelectedRecipe(null)}
      />
    </div>
  );
};

export default Index;
