import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Heart, Award, Users, GraduationCap, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Voltar ao Início</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">SAGE</h1>
        </div>
      </nav>

      {/* Hero Section - Introduction */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Por Trás do SAGE: Inovação e Cuidado
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto text-pretty">
            Conheça a equipe e a visão que impulsionaram o desenvolvimento do Sistema de Alerta e Gerenciamento de
            Emergências (SAGE), um projeto da FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação.
          </p>
          <div className="mt-12">
            <img
              src="/team-collaboration-innovation-technology-elderly-c.jpg"
              alt="Equipe colaborando em inovação tecnológica para cuidado de idosos"
              className="mx-auto rounded-2xl shadow-lg max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Nossa Missão: Transformar o Cuidado</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">Missão</h3>
                <p className="text-lg text-gray-700 text-pretty">
                  Desenvolver soluções tecnológicas inovadoras que melhorem a qualidade de vida e a segurança de idosos
                  em instituições de longa permanência, otimizando o trabalho das equipes de saúde e promovendo um
                  ambiente de cuidado mais eficiente e humano.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-green-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-green-900 mb-4">Visão</h3>
                <p className="text-lg text-gray-700 text-pretty">
                  Ser referência no desenvolvimento de sistemas de alerta e gerenciamento de emergências, contribuindo
                  para um futuro onde a tecnologia e a empatia caminham juntas no cuidado à saúde.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">A Gênese de uma Solução Necessária</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 leading-relaxed text-pretty">
                  O SAGE nasceu como um Projeto de Final de Curso na FAI, impulsionado pela observação das lacunas
                  existentes no atendimento de emergências em Instituições de Longa Permanência para Idosos (ILPIs). A
                  equipe de alunos, sob a orientação da Profa. Eunice Gomes de Siqueira, dedicou-se a criar um sistema
                  que não apenas alertasse, mas gerenciasse de forma inteligente as situações críticas, garantindo
                  respostas rápidas e eficazes. Este projeto é o resultado de meses de pesquisa, desenvolvimento e
                  testes, visando impactar positivamente a vida de residentes e profissionais da saúde.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Pilares que Nos Guiam</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Lightbulb className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Inovação</h3>
                <p className="text-lg text-gray-700 text-pretty">
                  Buscamos constantemente novas tecnologias e abordagens para resolver desafios complexos no setor da
                  saúde.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Empatia</h3>
                <p className="text-lg text-gray-700 text-pretty">
                  Colocamos as necessidades dos idosos e das equipes de cuidado no centro de nosso desenvolvimento,
                  criando soluções verdadeiramente úteis.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Excelência</h3>
                <p className="text-lg text-gray-700 text-pretty">
                  Comprometimento com a qualidade, a segurança e a confiabilidade em cada aspecto do sistema SAGE.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">As Mentes por Trás do SAGE</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">AS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Alan Francisco Silva</h3>
                <p className="text-gray-600 text-sm">Desenvolvedor/Pesquisador</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">CE</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carlos Eduardo de Almeida Rosa</h3>
                <p className="text-gray-600 text-sm">Desenvolvedor/Gerente de Projeto</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">LS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Leandro Augusto de Souza Leite</h3>
                <p className="text-gray-600 text-sm">Desenvolvedor/Analista de Requisitos</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Profa. Eunice Gomes de Siqueira</h3>
                <p className="text-gray-600 text-sm">Orientação Acadêmica e Técnica</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAI Institution Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">A FAI: Berço da Inovação</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8 text-pretty">
                O SAGE é um orgulho da FAI - Centro de Ensino Superior em Gestão, Tecnologia e Educação, uma instituição
                comprometida com a formação de profissionais inovadores e com o desenvolvimento de projetos que geram
                impacto social e tecnológico. A FAI oferece um ambiente propício para a pesquisa e a aplicação prática
                do conhecimento, incentivando seus alunos a transformarem ideias em realidade.
              </p>
              <div className="flex items-center space-x-4">
                <Users className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">Formando o futuro da tecnologia</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <div className="text-center">
                  <GraduationCap className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-900">FAI</p>
                  <p className="text-sm text-gray-600">Centro de Ensino Superior</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Junte-se a Nós na Missão de Cuidar Melhor
          </h2>
          <p className="text-xl mb-8 text-pretty">
            Interessado em saber mais sobre o SAGE ou em como podemos colaborar? Entre em contato conosco.
          </p>
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              <Mail className="w-5 h-5 mr-2" />
              Fale Conosco
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">SAGE</h3>
          <p className="text-gray-400 mb-8 text-pretty">
            Sistema de Alerta e Gerenciamento de Emergências para instituições de cuidado.
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2024 SAGE - FAI. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
