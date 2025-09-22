import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Clock,
  HelpCircle,
  TrendingDown,
  Shield,
  Bell,
  BarChart3,
  Layers,
  Heart,
  Users,
  Award,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function SageLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
            SAGE: Segurança e Cuidado Imediato ao Alcance de um Botão
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto text-pretty">
            Modernize o atendimento de emergência em sua instituição com nosso
            sistema de alerta inteligente, garantindo uma resposta rápida e
            eficiente para residentes e tranquilidade para sua equipe.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10">
          <img
            src="/caring-nurse-smiling-with-elderly-resident-in-comf.jpg"
            alt="Ambiente de cuidado profissional"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            A Demora no Atendimento Pode Custar Vidas
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto text-pretty">
            Em uma emergência, cada segundo conta. A comunicação manual e a
            dificuldade de localizar a equipe rapidamente podem levar a atrasos
            críticos no atendimento, gerando riscos para os residentes e
            estresse para a equipe.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tempo de Resposta
              </h3>
              <p className="text-gray-600">
                Cada segundo perdido pode ser crucial
              </p>
            </div>
            <div className="text-center">
              <HelpCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Dificuldade de Localização
              </h3>
              <p className="text-gray-600">
                Encontrar a equipe disponível rapidamente
              </p>
            </div>
            <div className="text-center">
              <TrendingDown className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Qualidade do Cuidado
              </h3>
              <p className="text-gray-600">Atrasos comprometem o atendimento</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              A Resposta Imediata que Transforma o Cuidado
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto text-pretty">
              O SAGE é a solução definitiva - um sistema integrado de hardware e
              software projetado para conectar residentes à equipe de saúde
              instantaneamente. Não é apenas um alarme, mas uma plataforma de
              gerenciamento que otimiza todo o fluxo de atendimento emergencial.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-50 p-8 rounded-2xl max-w-4xl">
              <div className="flex items-center justify-center space-x-8 md:space-x-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium">Residente</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full h-1 bg-blue-300 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-l-blue-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium">Central SAGE</p>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full h-1 bg-green-300 relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-4 border-l-green-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm font-medium">Equipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Recursos Pensados para a Eficiência e Segurança
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Bell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Acionamento Simplificado
                </h3>
                <p className="text-gray-600 text-pretty">
                  Alarmes fixos e móveis, fáceis de usar, garantindo que o
                  residente possa pedir ajuda a qualquer momento e de qualquer
                  lugar.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Notificações Inteligentes
                </h3>
                <p className="text-gray-600 text-pretty">
                  Alertas instantâneos enviados diretamente para os dispositivos
                  da equipe de enfermagem e médica, com a localização exata do
                  chamado.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Gestão Centralizada
                </h3>
                <p className="text-gray-600 text-pretty">
                  Painel de controle intuitivo que permite à administração
                  monitorar o tempo de resposta, gerar relatórios e gerenciar a
                  equipe com eficiência.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Layers className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Arquitetura Modular
                </h3>
                <p className="text-gray-600 text-pretty">
                  Sistema projetado para crescer com sua instituição. Adicione
                  novos pontos de alarme e integre com outras tecnologias
                  facilmente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Mais do que um Sistema, um Ecossistema de Cuidado
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Para o Residente
              </h3>
              <p className="text-lg text-gray-700 text-pretty">
                Segurança e autonomia, com a certeza de que a ajuda está sempre
                disponível.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Para a Equipe de Saúde
              </h3>
              <p className="text-lg text-gray-700 text-pretty">
                Redução do estresse, otimização do tempo e foco total no que
                realmente importa: o cuidado ao paciente.
              </p>
            </div>
            <div className="text-center">
              <Award className="w-16 h-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Para a Gestão
              </h3>
              <p className="text-lg text-gray-700 text-pretty">
                Melhora na qualidade do serviço, conformidade com normas de
                segurança, e dados para tomada de decisão estratégica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Quem Usa, Confia
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic text-pretty">
                  "O SAGE transformou completamente nossa operação. O tempo de
                  resposta diminuiu drasticamente e nossa equipe se sente muito
                  mais confiante e organizada."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Maria Rosa Silva
                    </p>
                    <p className="text-sm text-gray-600">
                      Diretora - Casa de Repouso Esperança
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic text-pretty">
                  "A implementação foi surpreendentemente simples e os
                  resultados imediatos. Nossos residentes se sentem mais seguros
                  e independentes."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">João Santos</p>
                    <p className="text-sm text-gray-600">
                      Chefe de Enfermagem - Lar São Francisco
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 italic text-pretty">
                  "Os relatórios detalhados nos ajudam a tomar decisões
                  estratégicas baseadas em dados reais. É uma ferramenta
                  indispensável para a gestão moderna."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-semibold">AC</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Ana Clara Mendes
                    </p>
                    <p className="text-sm text-gray-600">
                      Administradora - Residencial Vida Plena
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Por que escolher o SAGE?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Agilidade</h3>
                <p className="text-gray-700">
                  Processos otimizados e respostas mais rápidas para sua equipe.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Segurança</h3>
                <p className="text-gray-700">
                  Informações centralizadas e protegidas com alto padrão de
                  segurança.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Gestão Estratégica
                </h3>
                <p className="text-gray-700">
                  Relatórios inteligentes para apoiar decisões baseadas em
                  dados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Pronto para Elevar o Padrão de Cuidado da Sua Instituição?
          </h2>
          <p className="text-xl mb-12 text-pretty">
            Entre em contato conosco hoje mesmo para agendar uma demonstração
            personalizada e sem compromisso.
          </p>

          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* <div>
                    <Input placeholder="Nome completo" className="w-full" />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email profissional"
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder="Nome da Instituição"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Telefone"
                      className="w-full"
                    />
                  </div>*/}
                </div>
                <Link href="/contato">
                  <Button
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                  >
                    Contato
                  </Button>
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">SAGE</h3>
              <p className="text-gray-400 text-pretty">
                Sistema de Alerta e Gerenciamento de Emergências para
                instituições de cuidado.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/sobre"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="/contato"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
                <li>
                  <a
                    href="/privacidade"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <span>
                    {" "}
                    <ul>
                      <li>
                        {" "}
                        <a
                          href="mailto:alanfranciscos@gmail.com"
                          className=" hover:text-blue-700 font-medium"
                        >
                          alanfranciscos@gmail.com
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="mailto:carlos_eduardo_a.r@outlook.com"
                          className=" hover:text-blue-700 font-medium"
                        >
                          carlos_eduardo_a.r@outlook.com
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          href="mailto:leandroleite@fai-mg.br"
                          className=" hover:text-blue-700 font-medium"
                        >
                          leandroleite@fai-mg.br
                        </a>
                      </li>{" "}
                    </ul>
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Santa Rita do Sapucaí, MG</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/faitec_sage/"
                  target="_blank"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SAGE. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
