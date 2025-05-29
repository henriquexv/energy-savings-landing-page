
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, Phone, CheckCircle, Clock } from 'lucide-react';

const FinalCTASection = () => {
  const scrollToSimulator = () => {
    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gradient-to-br from-trust-blue-600 via-trust-blue-700 to-eco-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-energy-orange-500 text-white text-lg px-6 py-2 rounded-full">
            ⚡ Última Chance de Economizar
          </Badge>
          
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Não Perca Mais Tempo Pagando Caro na Conta de Luz
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
            Junte-se a <strong>mais de 10.000 clientes</strong> que já economizam até 40% 
            todos os meses com energia 100% sustentável
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-eco-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Sem Investimento</h3>
              <p className="text-blue-100">Zero custos para começar</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <Clock className="w-12 h-12 text-energy-orange-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Resultado em 30 dias</h3>
              <p className="text-blue-100">Economia já na próxima conta</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-eco-green-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">100% Regulamentado</h3>
              <p className="text-blue-100">Segurança total ANEEL</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToSimulator}
                size="lg" 
                className="bg-energy-orange-500 hover:bg-energy-orange-600 text-white text-xl px-12 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg"
              >
                <Calculator className="w-6 h-6 mr-3" />
                SIMULAR ECONOMIA GRÁTIS
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-trust-blue-700 text-xl px-12 py-4 rounded-full transition-all"
              >
                <Phone className="w-6 h-6 mr-3" />
                FALAR COM ESPECIALISTA
              </Button>
            </div>
            
            <p className="text-sm text-blue-200">
              ⏰ <strong>Atenção:</strong> As vagas para migração são limitadas por região. 
              Garante já a sua!
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-eco-green-400" />
                <span>Satisfação Garantida</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-eco-green-400" />
                <span>Empresa Regulamentada ANEEL</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-eco-green-400" />
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
