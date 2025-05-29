
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingDown, Leaf, Phone } from 'lucide-react';

const EconomySimulator = () => {
  const [monthlyBill, setMonthlyBill] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [results, setResults] = useState(null);

  const calculateSavings = () => {
    const bill = parseFloat(monthlyBill.replace(/[^\d,]/g, '').replace(',', '.'));
    if (bill && bill > 0) {
      const minSavings = bill * 0.05; // 5%
      const maxSavings = bill * 0.40; // 40%
      const avgSavings = bill * 0.22; // 22% média
      
      setResults({
        currentBill: bill,
        minSavings,
        maxSavings,
        avgSavings,
        newBillAvg: bill - avgSavings,
        yearlyAvg: avgSavings * 12
      });
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleBillChange = (e) => {
    let value = e.target.value;
    // Remove caracteres não numéricos exceto vírgula
    value = value.replace(/[^\d,]/g, '');
    setMonthlyBill(value);
  };

  useEffect(() => {
    if (monthlyBill && parseFloat(monthlyBill.replace(',', '.')) > 0) {
      calculateSavings();
    } else {
      setResults(null);
    }
  }, [monthlyBill]);

  return (
    <section id="simulator" className="py-16 bg-gradient-to-br from-trust-blue-600 via-trust-blue-700 to-eco-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-energy-orange-500 text-white text-lg px-6 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5 mr-2" />
            Simulador Gratuito
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Descubra Quanto Você Pode Economizar
          </h2>
          <p className="text-xl text-blue-100">
            Simule agora e veja sua economia real na conta de luz
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulário */}
            <Card className="bg-white/95 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">
                  💡 Calcule Sua Economia
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Qual o valor da sua conta de luz mensal?
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      R$
                    </span>
                    <Input
                      type="text"
                      placeholder="0,00"
                      value={monthlyBill}
                      onChange={handleBillChange}
                      className="pl-10 text-lg h-12"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CEP (para verificar cobertura)
                  </label>
                  <Input
                    type="text"
                    placeholder="00000-000"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
                
                <Button 
                  className="w-full bg-energy-orange-500 hover:bg-energy-orange-600 text-white text-lg py-3 h-auto rounded-full"
                  onClick={calculateSavings}
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  CALCULAR ECONOMIA
                </Button>
              </CardContent>
            </Card>
            
            {/* Resultados */}
            <Card className="bg-white/95 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-800">
                  📊 Seus Resultados
                </CardTitle>
              </CardHeader>
              <CardContent>
                {results ? (
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="bg-eco-green-50 rounded-xl p-4">
                        <div className="text-sm text-gray-600">Sua economia média mensal</div>
                        <div className="text-3xl font-bold text-eco-green-600">
                          {formatCurrency(results.avgSavings)}
                        </div>
                        <div className="text-sm text-gray-500">
                          (aproximadamente 22% de desconto)
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500">Conta Atual</div>
                          <div className="text-lg font-semibold text-red-600">
                            {formatCurrency(results.currentBill)}
                          </div>
                        </div>
                        <div className="bg-eco-green-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500">Nova Conta</div>
                          <div className="text-lg font-semibold text-eco-green-600">
                            {formatCurrency(results.newBillAvg)}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-energy-orange-50 rounded-xl p-4">
                        <div className="text-sm text-gray-600">Economia anual estimada</div>
                        <div className="text-2xl font-bold text-energy-orange-600">
                          {formatCurrency(results.yearlyAvg)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-eco-green-500 hover:bg-eco-green-600 text-white">
                        📄 RECEBER ANÁLISE COMPLETA GRÁTIS
                      </Button>
                      <Button variant="outline" className="w-full border-2 border-trust-blue-500 text-trust-blue-600">
                        <Phone className="w-4 h-4 mr-2" />
                        FALAR COM ESPECIALISTA
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4 py-8">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                      <Calculator className="w-10 h-10 text-gray-400" />
                    </div>
                    <p className="text-gray-500">
                      Preencha o valor da sua conta para ver sua economia estimada
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
          
          {results && (
            <div className="mt-8 text-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center space-x-4 text-white">
                  <Leaf className="w-6 h-6 text-eco-green-400" />
                  <span className="text-lg">
                    Além da economia, você estará contribuindo para um planeta mais sustentável!
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EconomySimulator;
