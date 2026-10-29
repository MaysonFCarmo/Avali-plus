# Avali+ 📊

**Sua opinião transforma experiências.**

O **Avali+** é uma aplicação web desenvolvida para coletar, organizar e analisar pesquisas de satisfação, transformando respostas dos usuários em indicadores que auxiliam na tomada de decisões.

A plataforma reúne diferentes metodologias de avaliação em uma interface moderna e intuitiva, permitindo acompanhar a experiência dos usuários por meio de um dashboard com gráficos e indicadores.

## 🚀 Demonstração

🌐 **[Acessar Avali+](https://maysonfcarmo.github.io/Avali-plus/)**

💻 **[Repositório no GitHub](https://github.com/MaysonFCarmo/Avali-plus)**

## 🎯 Objetivo do projeto

Desenvolver uma solução que simplifique a coleta e a análise de feedbacks, oferecendo uma visão clara sobre a satisfação e a experiência dos usuários.

O projeto também tem como objetivo aplicar conhecimentos de desenvolvimento web, integração com banco de dados, autenticação e visualização de dados.

## ✨ Funcionalidades

### 📝 Pesquisas de satisfação

- **NPS (Net Promoter Score):** mede a probabilidade de recomendação de um serviço ou produto.
- **CSAT (Customer Satisfaction Score):** avalia a satisfação do usuário com um atendimento ou experiência.
- **CES (Customer Effort Score):** mede o esforço necessário para resolver uma solicitação.
- Coleta de comentários e feedbacks.
- Registro das respostas em banco de dados.

### 📊 Dashboard administrativo

- Visualização de indicadores de satisfação.
- Gráficos interativos.
- Acompanhamento dos resultados das pesquisas.
- Filtros por período.
- Análise de feedbacks e identificação de oportunidades de melhoria.

### 🔐 Gerenciamento

- Autenticação para acesso administrativo.
- Persistência dos dados utilizando Supabase.
- Integração entre frontend e banco de dados PostgreSQL.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| React | Desenvolvimento da interface |
| JavaScript | Lógica e interatividade |
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e responsividade |
| Supabase | Backend como serviço e autenticação |
| PostgreSQL | Armazenamento dos dados |
| ApexCharts | Visualização de gráficos |
| Git e GitHub | Versionamento e hospedagem do código |

## 🏗️ Arquitetura da aplicação

O Avali+ utiliza uma arquitetura web com separação entre interface, serviços de dados e persistência.

**Frontend (React + JavaScript)**

Responsável pela interface, formulários, interatividade e apresentação das informações.

**Backend (Supabase)**

Fornece recursos para autenticação, comunicação com o banco de dados e gerenciamento das informações.

**Banco de dados (PostgreSQL)**

Armazena os registros das pesquisas, respostas e informações necessárias para a análise.

**Visualização (ApexCharts)**

Apresenta os indicadores em gráficos para facilitar a interpretação dos resultados.

### Fluxo simplificado

Usuário responde à pesquisa → Respostas são enviadas ao Supabase → Dados são armazenados no PostgreSQL → Dashboard consulta os registros → Indicadores são apresentados em gráficos.

## 💻 Executando o projeto localmente

**Pré-requisitos**

- Node.js e npm instalados.
- Git instalado.
- Configuração do Supabase para utilizar os serviços de dados.

**1. Clone o repositório**

`git clone https://github.com/MaysonFCarmo/Avali-plus.git`

**2. Acesse a pasta**

`cd Avali-plus`

**3. Instale as dependências**

`npm install`

**4. Configure o ambiente**

Configure as variáveis de ambiente necessárias para a conexão com o Supabase, conforme os arquivos de configuração do projeto.

**5. Inicie a aplicação**

`npm run dev`

Acesse o endereço local informado pelo terminal.

## 📈 Próximas melhorias

- [ ] Exportação de relatórios em PDF e CSV.
- [ ] Comparação de indicadores entre períodos.
- [ ] Personalização das pesquisas.
- [ ] Melhorias de acessibilidade e experiência mobile.
- [ ] Ampliação dos recursos de análise de feedbacks.
- [ ] Implementação de testes automatizados.

## 📌 Status do projeto

**MVP desenvolvido — em evolução.**

O Avali+ é um projeto de portfólio voltado à aplicação prática de conceitos de desenvolvimento web, análise de dados e experiência do usuário.

## 👨‍💻 Desenvolvedor

**Mayson Farias**

Estudante de Análise e Desenvolvimento de Sistemas, com interesse em desenvolvimento web, criação de soluções digitais e integração entre sistemas.

- [GitHub](https://github.com/MaysonFCarmo)
- [LinkedIn](https://www.linkedin.com/in/mayson-farias-44376826a/)

---

**Avali+ — Sua opinião transforma experiências.**
