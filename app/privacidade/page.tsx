import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Users, FileText, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Voltar ao Início</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-green-600" />
              <span className="font-bold text-xl text-gray-900">SAGE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Shield className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Política de Privacidade do SAGE</h1>
          <p className="text-xl text-gray-600 mb-6 text-balance">
            Comprometimento com a Segurança e a Privacidade dos Seus Dados.
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Esta Política de Privacidade descreve como o Sistema de Alerta e Gerenciamento de Emergências (SAGE),
            desenvolvido pela FAI, coleta, usa, armazena e protege as informações pessoais de seus usuários. Nosso
            compromisso é garantir a segurança e a confidencialidade dos dados, em conformidade com a Lei Geral de
            Proteção de Dados (Lei nº 13.709/2018 - LGPD) e outras regulamentações aplicáveis.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            <strong>Última atualização:</strong> 22 de setembro de 2025.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Section 1: Data Collection */}
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Informações Coletadas pelo SAGE</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Para o funcionamento eficaz do SAGE e para garantir a segurança e o atendimento adequado em situações de
                emergência, coletamos os seguintes tipos de informações:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Dados de Identificação:</strong> Nome completo, CPF (para identificação de profissionais de
                    saúde e residentes, se aplicável e com consentimento), data de nascimento.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Dados de Contato:</strong> Endereço de e-mail, número de telefone.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Dados de Localização:</strong> Localização exata do acionamento do alarme dentro da
                    instituição (para direcionar a equipe de resposta).
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Dados de Saúde (Sensíveis):</strong> Informações sobre condições médicas relevantes para o
                    atendimento de emergência (coletadas com consentimento explícito e armazenadas de forma segura).
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Dados de Uso do Sistema:</strong> Registros de acionamento de alarmes, tempos de resposta,
                    interações com o painel de gerenciamento.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 2: Data Usage */}
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Finalidade do Uso dos Dados</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Os dados coletados pelo SAGE são utilizados exclusivamente para as seguintes finalidades:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Prestação de Serviço:</strong> Acionamento e gerenciamento de alertas de emergência,
                    localização de residentes e equipe, comunicação entre usuários.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Melhoria do Serviço:</strong> Análise de desempenho do sistema, otimização de tempos de
                    resposta, desenvolvimento de novas funcionalidades.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Segurança:</strong> Monitoramento para prevenção de fraudes e garantia da integridade do
                    sistema.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Conformidade Legal:</strong> Atendimento a obrigações legais e regulatórias, incluindo a
                    LGPD.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 3: Data Sharing */}
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Com Quem Compartilhamos Seus Dados?</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                O SAGE não compartilha dados pessoais com terceiros, exceto nas seguintes situações e sempre com a
                máxima segurança:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Com a Instituição de Longa Permanência:</strong> Dados relevantes para o gerenciamento
                    interno e atendimento aos residentes.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Com Autoridades Legais:</strong> Em cumprimento a ordens judiciais ou obrigações legais.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Com Prestadores de Serviço:</strong> Apenas dados estritamente necessários para o
                    funcionamento do sistema (ex: serviços de hospedagem de dados), sob contratos que garantem a
                    proteção e confidencialidade.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 4: Data Security */}
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Como Protegemos Suas Informações</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Empregamos medidas de segurança técnicas e administrativas rigorosas para proteger os dados pessoais
                contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Criptografia de dados em trânsito e em repouso.</div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Controles de acesso restrito a informações sensíveis.</div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Monitoramento contínuo de segurança.</div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>Treinamento regular da equipe sobre privacidade e proteção de dados.</div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5: User Rights */}
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Seus Direitos como Titular dos Dados</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou
                    eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Portabilidade:</strong> Solicitar a portabilidade dos dados a outro fornecedor de serviço ou
                    produto.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Revogação do Consentimento:</strong> Revogar o consentimento a qualquer momento.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <strong>Oposição:</strong> Opor-se ao tratamento de dados em determinadas situações.
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Para exercer qualquer um desses direitos, entre em contato conosco através dos canais indicados na seção
                de contato.
              </p>
            </CardContent>
          </Card>

          {/* Section 6: Contact */}
          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Fale Conosco</h2>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Se você tiver dúvidas sobre esta Política de Privacidade ou desejar exercer seus direitos como titular
                dos dados, entre em contato com nosso Encarregado de Dados (DPO) ou equipe de suporte:
              </p>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <span>
                    <strong>E-mail:</strong> privacidade@sage.fai.edu.br
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span>
                    <strong>Telefone:</strong> (11) 3456-7890
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="h-5 w-5 text-green-600 mr-3 mt-0.5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span>
                    <strong>Endereço:</strong> Centro Universitário Assunção - UNIFAI
                    <br />
                    Rua Francisca Júlia, 171 - São Paulo, SP
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 7: Policy Updates */}
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Atualizações da Política de Privacidade</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas
                práticas de privacidade ou em requisitos legais. Recomendamos que você revise esta página regularmente
                para se manter informado. A data da última atualização será sempre indicada no início do documento.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">Tem dúvidas sobre nossa política de privacidade?</p>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/#contato">Entre em Contato</Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-green-400" />
              <span className="font-bold text-xl">SAGE</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 SAGE - Sistema de Alerta e Gerenciamento de Emergências. Desenvolvido pela FAI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
