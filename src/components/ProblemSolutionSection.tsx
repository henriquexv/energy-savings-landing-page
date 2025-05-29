
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check, Zap, Leaf, TrendingUp, ShieldCheck } from 'lucide-react';

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-trust-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Por que sua conta de luz está tão cara?
          </h2>
          <p className="text-xl text-gray-600">
            Entenda a diferença entre o modelo tradicional e nossa solução inovadora
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Modelo Tradicional */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <CardTitle className="text-2xl text-red-700">Modelo Tradicional</CardTitle>
              <Badge className="bg-red-500 text-white mx-auto">Caro e Ineficiente</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Energia de fontes poluentes (carvão, petróleo)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Preços controlados por monopólios regionais</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Bandeiras tarifárias que aumentam o custo</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Falta de transparência nos preços</span>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Nenhum incentivo para economia</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Nossa Solução */}
          <Card className="border-2 border-eco-green-200 bg-eco-green-50">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-eco-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-eco-green-600" />
              </div>
              <CardTitle className="text-2xl text-eco-green-700">Nossa Solução</CardTitle>
              <Badge className="bg-eco-green-500 text-white mx-auto">Sustentável e Econômico</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-eco-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">100% energia limpa (solar, eólica, hídrica)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-eco-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Preços competitivos do mercado livre</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-eco-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Imunidade às bandeiras tarifárias</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-eco-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Total transparência e previsibilidade</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-eco-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Economia real de 5% a 40% na conta</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-eco-green-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-eco-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Sustentável</h3>
            <p className="text-sm text-gray-600">Energia 100% renovável</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-trust-blue-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-trust-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Econômico</h3>
            <p className="text-sm text-gray-600">Até 40% de economia</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-energy-orange-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-energy-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Fácil</h3>
            <p className="text-sm text-gray-600">Processo 100% digital</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Seguro</h3>
            <p className="text-sm text-gray-600">Regulamentado ANEEL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
