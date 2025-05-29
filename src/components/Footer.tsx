
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Leaf } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-eco-green-500 rounded-full flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EcoEnergia</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Energia sustentável e mais barata para todos. 
              Conectando você ao futuro da energia limpa.
            </p>
          </div>
          
          {/* Contato */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-eco-green-400" />
                <span className="text-gray-400">(11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-eco-green-400" />
                <span className="text-gray-400">contato@ecoenergia.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-eco-green-400 mt-0.5" />
                <span className="text-gray-400">
                  São Paulo, SP<br />
                  Brasil
                </span>
              </div>
            </div>
          </div>
          
          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Úteis</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                Como Funciona
              </a>
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                Simulador
              </a>
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                FAQ
              </a>
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                Blog
              </a>
            </div>
          </div>
          
          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Legal</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block text-gray-400 hover:text-eco-green-400 transition-colors">
                LGPD
              </a>
            </div>
            
            <div className="pt-4 space-y-2">
              <div className="text-xs text-gray-500">
                CNPJ: 00.000.000/0001-00
              </div>
              <div className="text-xs text-gray-500">
                Empresa regulamentada pela ANEEL
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-gray-400">
            © 2024 EcoEnergia. Todos os direitos reservados.
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Desenvolvido com ❤️ para um planeta mais sustentável</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
