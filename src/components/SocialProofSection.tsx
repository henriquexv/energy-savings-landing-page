
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Building, Home } from 'lucide-react';

const SocialProofSection = () => {
  const testimonials = [
    {
      type: 'Residencial',
      before: 'R$ 450',
      after: 'R$ 315',
      savings: 'R$ 135',
      percentage: '30%',
      icon: Home
    },
    {
      type: 'Comercial',
      before: 'R$ 2.800',
      after: 'R$ 1.680',
      savings: 'R$ 1.120',
      percentage: '40%',
      icon: Building
    },
    {
      type: 'Residencial',
      before: 'R$ 680',
      after: 'R$ 544',
      savings: 'R$ 136',
      percentage: '20%',
      icon: Home
    },
    {
      type: 'Comercial',
      before: 'R$ 1.500',
      after: 'R$ 1.200',
      savings: 'R$ 300',
      percentage: '20%',
      icon: Building
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            VEJA AS ECONOMIAS REAIS DOS NOSSOS CLIENTES
          </h2>
          <p className="text-xl text-gray-600">
            Resultados comprovados em contas de energia de todo o Brasil
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon;
            return (
              <Card key={index} className="border-2 border-eco-green-100 hover:border-eco-green-300 transition-all transform hover:scale-105 hover:shadow-lg">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex items-center justify-center space-x-2">
                    <IconComponent className="w-5 h-5 text-trust-blue-600" />
                    <Badge variant="outline" className="text-trust-blue-600 border-trust-blue-600">
                      {testimonial.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Antes</div>
                    <div className="text-lg font-semibold line-through text-red-500">
                      {testimonial.before}
                    </div>
                  </div>
                  
                  <TrendingDown className="w-8 h-8 text-eco-green-500 mx-auto" />
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-500">Agora</div>
                    <div className="text-2xl font-bold text-eco-green-600">
                      {testimonial.after}
                    </div>
                  </div>
                  
                  <div className="bg-energy-orange-50 rounded-lg p-3">
                    <div className="text-sm text-gray-600">Economia mensal</div>
                    <div className="text-lg font-bold text-energy-orange-600">
                      {testimonial.savings}
                    </div>
                    <div className="text-sm font-semibold text-eco-green-600">
                      ({testimonial.percentage} de desconto)
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 text-lg">
            <strong>Mais de 10.000 clientes</strong> já economizam com energia sustentável
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
