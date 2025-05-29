
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, CheckCircle, TrendingDown } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Calculator,
      title: "1. Simule Online",
      description: "Faça sua simulação gratuita em menos de 2 minutos",
      color: "bg-trust-blue-500",
      bgColor: "bg-trust-blue-50"
    },
    {
      icon: FileText,
      title: "2. Receba a Proposta",
      description: "Análise completa personalizada para seu perfil de consumo",
      color: "bg-eco-green-500",
      bgColor: "bg-eco-green-50"
    },
    {
      icon: CheckCircle,
      title: "3. Assine Digitalmente",
      description: "Processo 100% online, sem burocracia e sem obras",
      color: "bg-energy-orange-500",
      bgColor: "bg-energy-orange-50"
    },
    {
      icon: TrendingDown,
      title: "4. Economize Todo Mês",
      description: "Sua conta chega com desconto na mesma fatura",
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Como Funciona? É Muito Simples!
          </h2>
          <p className="text-xl text-gray-600">
            4 passos para começar a economizar na sua conta de luz
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index} 
                className={`${step.bgColor} border-2 hover:shadow-lg transition-all transform hover:scale-105 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 ${step.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-eco-green-50 to-trust-blue-50 rounded-2xl p-8 border border-eco-green-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🎯 Resultado Garantido
            </h3>
            <p className="text-lg text-gray-600">
              Em até <strong>30 dias</strong> você já vê a economia na sua conta de luz, 
              sem nenhum investimento inicial ou obra na sua propriedade!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
