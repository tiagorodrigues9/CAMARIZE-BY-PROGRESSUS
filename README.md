# 🦐 PROGRESSUS - Projeto CAMARIZE

Bem-vindo ao repositório oficial do projeto **Camarize**, desenvolvido pela equipe **Progressus**. Este projeto tem como missão principal revolucionar a aquicultura sustentável, com foco inicial na região do Vale do Ribeira, utilizando tecnologias avançadas e Internet das Coisas (IoT) para monitorar e otimizar a criação de camarões em cativeiro.

---

## 🎯 Nosso Propósito

A aquicultura tradicional enfrenta diversos desafios em relação à manutenção da qualidade da água, monitoramento de saúde animal e eficiência na alimentação. 

O **Sistema Camarize** foi idealizado para suprir essas necessidades através de:
- **Monitoramento Contínuo**: Uso de sensores especializados para coletar dados críticos do ambiente (pH, temperatura, oxigenação).
- **Automação Inteligente**: Alimentação automatizada baseada na necessidade real da criação.
- **Sustentabilidade e Qualidade**: Otimização de recursos visando uma produção com menor impacto ambiental e focado na alta gastronomia.

---

## 💻 Arquitetura e Tecnologias

A landing page do projeto foi totalmente refatorada e modernizada. Saímos de uma estrutura estática em HTML/JS Vanilla para uma arquitetura baseada em componentes, garantindo alta performance e manutenibilidade.

**Stack Tecnológico Atual:**
*   ⚡ **[Vite](https://vitejs.dev/)**: Ferramenta de build extremamente rápida.
*   ⚛️ **[React 18](https://react.dev/)**: Biblioteca principal para a interface do usuário.
*   📘 **[TypeScript](https://www.typescriptlang.org/)**: Adicionando tipagem estática para maior segurança no desenvolvimento.
*   🎨 **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework utility-first utilizado para todo o sistema de design e responsividade (Configurado via `@theme` no CSS).
*   🎬 **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca responsável pelas animações suaves de entrada, transições complexas e interações visuais (*scroll animations*).
*   🧩 **[Lucide React](https://lucide.dev/)** & **[React Icons](https://react-icons.github.io/react-icons/)**: Coleção de ícones vetoriais modernos.

---

## 📂 Estrutura do Projeto

A aplicação está dividida de forma modular em `src/components`:

```text
CAMARIZE-BY-PROGRESSUS/
├── public/                 # Assets públicos estáticos
│   └── imgs/               # Logos, imagens de background e fotos da equipe
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Barra de navegação com efeito glassmorphism
│   │   ├── Hero.tsx        # Seção principal com partículas e CTA
│   │   ├── About.tsx       # Detalhes sobre a equipe Progressus
│   │   ├── Services.tsx    # Explicação do sistema IoT e vídeo Pitch
│   │   ├── Team.tsx        # Integrantes da equipe
│   │   ├── Contact.tsx     # Informações de contato e redes sociais
│   │   └── Footer.tsx      # Rodapé do site
│   ├── App.tsx             # Agregador de todos os componentes
│   ├── main.tsx            # Ponto de entrada do React
│   └── index.css           # Estilos globais e configuração do Tailwind CSS v4
├── legacy_html/            # Backup da versão anterior (HTML/CSS Vanilla)
├── index.html              # Template principal (Onde o Favicon é definido)
└── package.json            # Dependências e scripts
```

---

## 🚀 Como Executar Localmente

Siga as instruções abaixo para testar o site no seu ambiente de desenvolvimento:

1. **Clone o Repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd CAMARIZE-BY-PROGRESSUS
   ```

2. **Instale as Dependências:**
   Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
   ```bash
   npm install
   ```

3. **Inicie o Servidor de Desenvolvimento:**
   ```bash
   npm run dev
   ```
   > O Vite irá iniciar um servidor local e disponibilizar o link no terminal (geralmente `http://localhost:5173/`).

4. **Gerar Versão de Produção (Build):**
   Para verificar a integridade da aplicação ou preparar para deploy, rode:
   ```bash
   npm run build
   ```

---

## 🎨 Identidade Visual e Personalização

Toda a parte de padronização visual está concentrada na engine do Tailwind v4, definida nativamente dentro de `src/index.css`.

Caso deseje alterar o esquema de cores, basta ajustar as variáveis de tema:
```css
@theme {
  --color-primary: #e74c3c;     /* Vermelho/Laranja principal */
  --color-secondary: #ff6b6b;   /* Gradiente Secundário */
  --color-accent: #ff8a80;
  --font-sans: 'Inter', sans-serif;
}
```

---

## 👥 A Equipe Progressus

O projeto é mantido pelos especialistas:
*   **Tiago Rodrigues** - Responsável pela pesquisa científica, documentação e redação do Artigo.
*   **Leandro Augusto** - Especialista em IoT (Arduíno, Sensores) e Design.
*   **Davi Mathais** - Especialista em Desenvolvimento Full Stack e Design.

---

## 📝 Licença
© 2024 Progressus. Todos os direitos reservados. Este projeto possui fins acadêmicos e de inovação tecnológica.
