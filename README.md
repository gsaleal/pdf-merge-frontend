
# 📄 PDF Merge Frontend

Frontend do **PDF Merge**, uma aplicação para mesclar arquivos PDF. Desenvolvido com **React**, **TypeScript** e **Tailwind CSS**, proporcionando uma interface moderna e responsiva.

---

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca para construção da UI.
- **TypeScript** - Tipagem estática para um código mais seguro.
- **Vite** - Ferramenta de build rápida e eficiente.
- **Tailwind CSS** - Estilização moderna e responsiva.
- **Axios** - Para comunicação com a API backend.
- **React Hook Form** - Para gerenciamento de formulários.

---

## 🎨 Funcionalidades

✅ Upload de múltiplos arquivos PDF  
✅ Visualização dos arquivos enviados  
✅ Envio dos PDFs para a API de mesclagem  
✅ Exibição do progresso da mesclagem  

---

## 🛠️ Instalação e Configuração

### 📌 Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 18+)
- **npm** ou **yarn**

### 🔧 Passo a Passo para rodar o projeto

1️⃣ Clone o repositório:
   ```sh
   git clone https://github.com/gsaleal/pdf-merge-frontend.git
   cd pdf-merge-frontend
   ```

2️⃣ Instale as dependências:
   ```sh
   npm install
   ```

4️⃣ Inicie a aplicação:
   ```sh
   npm run dev
   ```

Acesse no navegador:  
👉 `http://localhost:5173`

---

## 🖥️ Estrutura do Projeto

```
📦 pdf-merge-frontend
 ┣ 📂 src
 ┃ ┣ 📂 components  # Componentes reutilizáveis
 ┃ ┣ 📂 pages       # Páginas principais
 ┃ ┣ 📂 hooks       # Hooks personalizados
 ┃ ┣ 📂 store       # Gerenciamento de estado (Zustand)
 ┃ ┣ 📂 utils       # Funções auxiliares
 ┃ ┗ 📜 main.tsx    # Ponto de entrada da aplicação
 ┣ 📜 package.json
 ┣ 📜 vite.config.ts
 ┣ 📜 tailwind.config.js
 ┗ 📜 tsconfig.json
```

---

## 🔥 Uso da Aplicação

### 🔹 Upload e Mesclagem de PDFs
1. Clique no botão **"Selecionar os pdfs"** e escolha os PDFs.  
2. Clique em **"Realizar o merge"** para enviar os arquivos ao backend.  
3. Aguarde o processamento e faça o **download do arquivo final**.  

---

## 📦 Build para Produção

Se desejar gerar os arquivos otimizados para produção:

```sh
npm run build
```

Isso criará a versão final dentro da pasta **`dist/`**.

---

Para **Netlify**:

```sh
netlify deploy
```

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## ✨ Autor

👤 **GSALEAL**  
📧 Contato: [LinkedIn](https://www.linkedin.com/in/gabsaleal/)  

---

### 🛠️ Melhorias Futuras
🔹 Adicionar um loader durante o upload  
🔹 Melhorar a UI com animações  
🔹 Implementar testes unitários  
🔹 Criar um modo escuro  

---

📌 **Gostou do projeto? Deixe uma ⭐ no repositório!**
```
