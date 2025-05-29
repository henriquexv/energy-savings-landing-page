
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "É seguro migrar para o mercado livre de energia?",
      answer: "Sim, é 100% seguro! O mercado livre de energia é regulamentado pela ANEEL (Agência Nacional de Energia Elétrica). A qualidade da energia é exatamente a mesma, o que muda é apenas o fornecedor e o preço. Você continua sendo atendido pela mesma distribuidora local em caso de emergências."
    },
    {
      question: "Preciso fazer alguma obra ou instalação?",
      answer: "Não! A migração é 100% digital e burocrática. Não há necessidade de qualquer obra, instalação ou mudança física na sua propriedade. A energia continua chegando pela mesma rede elétrica de sempre."
    },
    {
      question: "Como funciona a fatura? Vou receber duas contas?",
      answer: "Você continuará recebendo apenas uma conta, da sua distribuidora atual, mas com o desconto já aplicado. Ou seja, o processo é totalmente transparente e você só percebe a economia no valor final."
    },
    {
      question: "E se eu quiser cancelar?",
      answer: "Você pode cancelar a qualquer momento sem custos adicionais. Nós garantimos total flexibilidade. Se não houver economia ou você não ficar satisfeito, basta entrar em contato e voltamos você para o modelo tradicional."
    },
    {
      question: "Qual o prazo para começar a economizar?",
      answer: "Após a assinatura do contrato, o processo leva entre 30 a 60 dias para ser efetivado. Isso porque precisamos fazer a migração junto à ANEEL e à distribuidora local, seguindo todos os protocolos regulamentares."
    },
    {
      question: "A energia é de qualidade inferior?",
      answer: "Absolutamente não! A energia é exatamente a mesma que você recebe hoje. A diferença está apenas no fornecedor e no preço. Inclusive, nossa energia vem de fontes 100% renováveis, sendo mais sustentável que a do mercado tradicional."
    },
    {
      question: "Existe algum custo oculto ou taxa?",
      answer: "Não! Somos totalmente transparentes. Não há taxa de adesão, investimento inicial ou custos ocultos. Você só paga pela energia que consumir, com o desconto aplicado."
    },
    {
      question: "Como vocês conseguem oferecer energia mais barata?",
      answer: "No mercado livre, conseguimos negociar energia diretamente com geradores e comercializadores, eliminando intermediários e obtendo preços mais competitivos. Isso nos permite repassar a economia diretamente para você."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire todas suas dúvidas sobre energia sustentável e economia
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 hover:border-eco-green-300 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-eco-green-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-eco-green-500 hover:bg-eco-green-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-semibold"
            >
              💬 Falar no WhatsApp
            </a>
            <a 
              href="tel:+5511999999999"
              className="bg-trust-blue-500 hover:bg-trust-blue-600 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 font-semibold"
            >
              📞 Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
