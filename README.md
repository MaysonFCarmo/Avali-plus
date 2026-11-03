# Avali+

**Pesquisa de satisfação com indicadores CSAT, CES e NPS.**

Aplicação web de portfólio que coleta avaliações de atendimento e apresenta indicadores em um dashboard com filtros por período. Desenvolvida com React e JavaScript, utiliza Supabase para autenticação e persistência em PostgreSQL e ApexCharts para visualização de dados.

[Aplicação publicada](https://maysonfcarmo.github.io/Avali-plus/) · [Código-fonte](https://github.com/MaysonFCarmo/Avali-plus)

## Funcionalidades implementadas

### Pesquisa

- Formulário em etapas, sem exigir login do respondente.
- CSAT de 1 a 5, CES de 1 a 5 e NPS de 0 a 10.
- Pergunta sobre motivo de insatisfação quando CSAT ≤ 3 ou NPS ≤ 6, com opção “Outro”.
- Comentário opcional.
- Envio das respostas para a tabela `avaliacoes` no Supabase.
- Estados de envio, mensagem de erro e confirmação de sucesso.

### Dashboard

- Login com e-mail e senha pelo Supabase Auth e opção de logout.
- Total de avaliações, CSAT, CES e NPS do período selecionado.
- Gráficos de distribuição do NPS, notas de CSAT e motivos de insatisfação.
- Resumo com quantidade e percentual de promotores, neutros e detratores.
- Filtros por data inicial, final ou intervalo, com aviso de intervalo inválido.
- Exibição do mês atual quando os filtros estão vazios; limpar os filtros retorna a esse comportamento.
- Botão para atualizar os dados e mensagens para carregamento, falha de consulta e ausência de dados nos gráficos.

Os comentários são coletados e armazenados, mas a interface atual do dashboard não apresenta uma listagem desses textos.

## Regras dos indicadores

Os cálculos usam as avaliações consideradas pelo filtro no navegador.

| Indicador | Implementação                                                                                            |
| --------- | -------------------------------------------------------------------------------------------------------- |
| CSAT      | Quantidade de notas 4 ou 5 dividida pelo total de avaliações × 100; exibido como percentual inteiro      |
| CES       | Média das notas de facilidade, de 1 (muito difícil) a 5 (muito fácil); exibida com uma casa decimal      |
| NPS       | Percentual de promotores (9–10) menos percentual de detratores (0–6), arredondado; notas 7–8 são neutras |

Sem avaliações no período, os cartões mostram zero e os gráficos exibem mensagens de ausência de dados. O zero nesse caso não representa um resultado medido.

## Tecnologias e organização

| Tecnologia                    | Uso no projeto                                           |
| ----------------------------- | -------------------------------------------------------- |
| React + JavaScript            | Interface, navegação por estado e lógica dos indicadores |
| Vite                          | Desenvolvimento local e build                            |
| Supabase JS                   | Autenticação e acesso aos dados                          |
| PostgreSQL via Supabase       | Persistência das avaliações                              |
| ApexCharts + react-apexcharts | Gráficos do dashboard                                    |
| CSS                           | Estilização da interface                                 |
| Oxlint                        | Análise estática                                         |
| GitHub Actions + Pages        | Build e publicação do frontend                           |

| Arquivo ou diretório            | Responsabilidade                                                  |
| ------------------------------- | ----------------------------------------------------------------- |
| `src/App.jsx`                   | Etapas da pesquisa, envio das respostas e alternância entre telas |
| `src/components/LoginAdmin.jsx` | Formulário de autenticação                                        |
| `src/components/Dashboard.jsx`  | Consulta, filtros, cálculos e gráficos                            |
| `src/components/LogoAvali.jsx`  | Componente da marca                                               |
| `src/lib/supabase.js`           | Inicialização do cliente Supabase                                 |
| `src/App.css` e `src/index.css` | Estilos                                                           |
| `public/images/`                | Logo e favicon                                                    |
| `vite.config.js`                | Configuração do Vite e caminho-base de publicação                 |
| `.github/workflows/deploy.yml`  | Workflow de publicação                                            |

O frontend acessa o Supabase diretamente pelo SDK. Não há servidor próprio neste repositório. O dashboard consulta `avaliacoes`, ordena por `data_avaliacao` e realiza filtros e agregações no cliente; não implementa assinatura de atualizações em tempo real.

## Executar localmente

### Pré-requisitos

- Git, Node.js e npm. O workflow utiliza Node.js 22; use uma versão atualizada dessa linha compatível com as dependências.
- Projeto Supabase configurado, tabela compatível e usuário de autenticação para acessar o dashboard.

```bash
git clone https://github.com/MaysonFCarmo/Avali-plus.git
cd Avali-plus
npm ci
```

Crie `.env.local` na raiz:

```dotenv
VITE_SUPABASE_URL=https://SEU_PROJETO.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=SUA_CHAVE_PUBLICA
```

Use a chave pública do projeto. Variáveis `VITE_` são incorporadas ao frontend; nunca use chave secreta ou `service_role` nessa configuração. `.env.local` está ignorado pelo Git.

```bash
npm run dev
```

Abra o endereço informado pelo Vite, considerando o caminho-base `/Avali-plus/`. Reinicie o servidor após alterar as variáveis de ambiente.

### Dependência do backend

Configurar apenas as variáveis não cria o banco. O código envia os campos `csat`, `ces`, `nps`, `motivo_insatisfacao`, `outro_motivo` e `comentario` para `avaliacoes`; a consulta do dashboard também depende de `data_avaliacao`.

O repositório ainda não inclui migrações SQL, definição completa da tabela ou políticas de Row Level Security (RLS). Para reproduzir o fluxo completo, é necessário provisionar esse backend separadamente, incluindo a geração de `data_avaliacao` e as permissões de inserção e leitura adequadas.

O login utiliza `signInWithPassword`. Não há fluxo de cadastro na interface. A autorização dos dados deve ser definida no Supabase; a alternância de telas no React não substitui políticas de acesso no banco.

## Scripts disponíveis

| Comando           | Resultado                                 |
| ----------------- | ----------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento      |
| `npm run build`   | Gera o build em `dist/`                   |
| `npm run preview` | Serve o build localmente para conferência |
| `npm run lint`    | Executa o Oxlint                          |

Para conferir o build local:

```bash
npm run lint
npm run build
npm run preview
```

Não há script de testes automatizados no estado atual do projeto. Lint e build não substituem testes funcionais.

## Publicação

O workflow `.github/workflows/deploy.yml` executa em pushes para `main` ou por acionamento manual. Utiliza Node.js 22, instala dependências com `npm ci`, verifica a presença das variáveis do Supabase, executa o build e publica `dist/` no GitHub Pages.

Para reproduzir a publicação:

1. Configure o GitHub Pages para publicação por GitHub Actions.
2. Cadastre os secrets `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`, acessíveis ao workflow.
3. Mantenha `base: '/Avali-plus/'` em `vite.config.js` para esse endereço; ajuste se mudar o caminho de hospedagem.
4. Envie as alterações para `main` e acompanhe a execução na aba Actions.

O workflow atual não executa lint nem testes. O GitHub Pages hospeda o frontend; autenticação e persistência dependem do Supabase.

## Próximas melhorias

Itens planejados, ainda não implementados:

- [ ] Versionar o esquema SQL e as políticas RLS para tornar o backend reproduzível.
- [ ] Adicionar `.env.example`.
- [ ] Melhorar a restauração e a validação do estado de autenticação na interface.
- [ ] Adicionar testes dos cálculos, filtros e fluxo da pesquisa.
- [ ] Executar lint e testes no workflow.
- [ ] Exportar relatórios em PDF e CSV.
- [ ] Comparar indicadores entre períodos.
- [ ] Permitir personalização das pesquisas.
- [ ] Exibir e ampliar a análise dos comentários coletados.
- [ ] Melhorar acessibilidade e experiência mobile.
- [ ] Adicionar paginação e filtros na consulta para suportar maior volume de dados.

## Autor

**Mayson Farias** — estudante de Análise e Desenvolvimento de Sistemas.

[GitHub](https://github.com/MaysonFCarmo) · [LinkedIn](https://www.linkedin.com/in/mayson-farias-44376826a/)
