
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Zap, Leaf, ShieldCheck, Clock, FileText, CheckCircle, Globe } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: "Economia Real de 5% a 40%",
      description: "Desconto garantido na sua conta de luz todos os meses",
      color: "bg-eco-green-500",
      bgColor: "bg-eco-green-50"
    },
    {
      icon: Zap,
      title: "Sem Investimento Inicial",
      description: "Zero custos para começar a economizar hoje mesmo",
      color: "bg-energy-orange-500",
      bgColor: "bg-energy-orange-50"
    },
    {
      icon: Leaf,
      title: "100% Energia Limpa",
      description: "Contribua para um planeta mais sustentável com energia renovável",
      color: "bg-eco-green-500",
      bgColor: "bg-eco-green-50"
    },
    {
      icon: ShieldCheck,
      title: "Imunidade às Bandeiras",
      description: "Não pague mais pelas bandeiras tarifárias vermelhas",
      color: "bg-trust-blue-500",
      bgColor: "bg-trust-blue-50"
    },
    {
      icon: Clock,
      title: "Processo 100% Digital",
      description: "Tudo online, sem burocracia e sem perder tempo",
      color: "bg-purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: FileText,
      title: "Sem Obras ou Instalações",
      description: "Nenhuma mudança física na sua propriedade",
      color: "bg-trust-blue-500",
      bgColor: "bg-trust-blue-50"
    },
    {
      icon: CheckCircle,
      title: "Fatura Simplificada",
      description: "Desconto direto na sua conta atual da concessionária",
      color: "bg-eco-green-500",
      bgColor: "bg-eco-green-50"
    },
    {
      icon: Globe,
      title: "Regulamentado ANEEL",
      description: "Total segurança e conformidade com a legislação",
      color: "bg-trust-blue-500",
      bgColor: "bg-trust-blue-50"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-eco-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Quais os Benefícios de Migrar?
          </h2>
          <p className="text-xl text-gray-600">
            Descubra todas as vantagens de escolher energia sustentável e mais barata
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card 
                key={index} 
                className={`${benefit.bgColor} border-2 hover:shadow-lg transition-all transform hover:scale-105 animate-fade-in h-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4 h-full flex flex-col">
                  <div className={`mx-auto w-16 h-16 ${benefit.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-trust-blue-600 to-eco-green-600 text-white border-none">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <Badge className="bg-energy-orange-500 text-white text-lg px-6 py-2 rounded-full">
                  🏆 Garantia de Resultado
                </Badge>
                
                <h3 className="text-2xl lg:text-3xl font-bold">
                  Satisfação 100% Garantida
                </h3>
                
                <p className="text-xl text-blue-100 leading-relaxed">
                  Se não houver economia na sua conta ou se você não ficar satisfeito, 
                  <strong> cancelamos sem custo</strong> e você volta para o modelo tradicional
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-energy-orange-400">0</div>
                    <div className="text-sm text-blue-200">Taxa de Cancelamento</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-energy-orange-400">30 dias</div>
                    <div className="text-sm text-blue-200">Para Ver Resultados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-energy-orange-400">24/7</div>
                    <div className="text-sm text-blue-200">Suporte Disponível</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
