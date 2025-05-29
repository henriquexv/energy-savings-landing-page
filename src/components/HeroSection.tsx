
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Leaf, TrendingDown, Calculator, Phone } from 'lucide-react';

const HeroSection = () => {
  const scrollToSimulator = () => {
    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-trust-blue-600 via-trust-blue-700 to-eco-green-600 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iNyIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <Badge className="bg-energy-orange-500 text-white text-sm px-4 py-2 rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              Energia Sustentável e Mais Barata
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              JÁ IMAGINOU TER UM{' '}
              <span className="text-energy-orange-400">DESCONTO DE 5% A 40%</span>{' '}
              NA SUA CONTA DE LUZ?
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Mude para energia limpa e sustentável <strong>sem investimento inicial</strong>, 
              <strong> sem obras</strong> e com processo 100% digital
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToSimulator}
                size="lg" 
                className="bg-energy-orange-500 hover:bg-energy-orange-600 text-white text-lg px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <Calculator className="w-5 h-5 mr-3" />
                SIMULE SUA ECONOMIA AGORA
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-trust-blue-700 text-lg px-8 py-4 rounded-full transition-all"
              >
                <Phone className="w-5 h-5 mr-3" />
                FALAR COM ESPECIALISTA
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm">
              <div className="flex items-center">
                <TrendingDown className="w-5 h-5 mr-2 text-eco-green-400" />
                <span>Economia Imediata</span>
              </div>
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-2 text-eco-green-400" />
                <span>100% Sustentável</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-energy-orange-400" />
                <span>Sem Investimento</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block animate-scale-in">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-energy-orange-400">40%</div>
                  <div className="text-xl">Economia Máxima</div>
                  <div className="text-sm text-blue-100">
                    Clientes economizam entre R$ 150 a R$ 1.200 por mês
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
