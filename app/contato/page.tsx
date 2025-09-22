"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function ContatoPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_mwffari", // substitua pelo ID do serviço
        "template_4agwdpx", // substitua pelo ID do template
        formRef.current,
        "QvMxdeGWbNHTTY172" // substitua pela sua chave pública
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Mensagem enviada com sucesso!");
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Ocorreu um erro ao enviar a mensagem.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">SAGE</span>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Início
              </Link>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sobre Nós
              </Link>
              <Link href="/contato" className="text-blue-600 font-medium">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Fale Conosco: Estamos Aqui para Ajudar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Tem alguma dúvida, sugestão ou quer agendar uma demonstração do
            SAGE? Entre em contato com nossa equipe.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envie-nos uma Mensagem
            </h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato o
              mais breve possível.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Assunto *
                  </label>
                  <Input
                    id="assunto"
                    type="text"
                    placeholder="Qual o motivo do seu contato?"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva sua dúvida ou interesse..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section> */}
      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Envie-nos uma Mensagem
            </h2>
            <p className="text-lg text-gray-600">
              Preencha o formulário abaixo e nossa equipe entrará em contato o
              mais breve possível.
            </p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nome Completo *
                    </label>
                    <Input
                      id="nome"
                      type="text"
                      name="nome"
                      placeholder="Seu nome completo"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Assunto *
                  </label>
                  <Input
                    id="assunto"
                    type="text"
                    name="assunto"
                    placeholder="Qual o motivo do seu contato?"
                    className="w-full"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mensagem *
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Descreva sua dúvida ou interesse..."
                    className="w-full min-h-[120px]"
                    required
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </div>
                {status && (
                  <p className="mt-4 text-center text-sm text-green-600">
                    {status}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Other Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ou Encontre-nos Através de:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Direct Contact Info */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Informações de Contato Direto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">E-mail</p>
                      <ul>
                        <li>
                          {" "}
                          <a
                            href="mailto:alanfranciscos@gmail.com"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            alanfranciscos@gmail.com
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            href="mailto:carlos_eduardo_a.r@outlook.com"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            carlos_eduardo_a.r@outlook.com
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            href="mailto:leandroleite@fai-mg.br"
                            className="text-blue-600 hover:text-blue-700 font-medium"
                          >
                            leandroleite@fai-mg.br
                          </a>
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Endereço</p>
                      <p className="text-gray-900">
                        FAI - Centro de Ensino Superior
                        <br />
                        Av. Antônio de Cássia, 472 - Jardim Santo Antônio
                        <br />
                        Santa Rita do Sapucaí - MG, 37537-348
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Redes Sociais
                </h3>
                <p className="text-gray-600 mb-6">
                  Conecte-se conosco nas redes sociais para ficar por dentro das
                  novidades e atualizações do SAGE.
                </p>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/sageoficial"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Instagram</p>
                      <p className="text-sm text-gray-600">
                        Veja nosso dia a dia
                      </p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">SAGE</span>
              </div>
              <p className="text-gray-400 mb-4">
                Sistema de Alerta e Gerenciamento de Emergências para
                Instituições de Longa Permanência para Idosos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Início
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sobre"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contato"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacidade"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SAGE - Sistema de Alerta e Gerenciamento de Emergências.
              Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
