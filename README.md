# Lettore — leitor de textos com voz por IA

Leitor de textos em voz alta, em **português e outros idiomas**, com **destaque
acompanhando a leitura** (karaokê). Funciona **offline**, direto no navegador,
sem instalar nada e sem chave de API.

## Como usar

1. **Abra o `index.html`** com duplo-clique (Chrome ou Edge recomendados).
2. Cole/digite o texto, ou clique em **Abrir arquivo** (`.txt`, `.pdf`, `.docx`).
3. Escolha **idioma** e **voz**, ajuste **velocidade** e **tom**.
4. Clique em **Reproduzir**. A palavra sendo lida fica destacada.
   - **Pausar / Continuar / Parar** controlam a leitura.
   - Clique em qualquer **palavra** no texto para começar a ler a partir dela.

Suas preferências (idioma, voz, velocidade, tema…) ficam salvas para a próxima vez.

## Aparência (com memória)

No painel lateral você personaliza a leitura, e tudo fica salvo:

- **Tamanho do texto** — de Pequeno a Enorme.
- **Fonte da leitura** — Serifa (clássica), Sem serifa, Humanista (mais legível)
  ou Monoespaçada.
- **Cor de destaque** — 6 cores predefinidas (verde, turquesa, azul, roxo, rosa,
  âmbar) **ou uma cor personalizada** (seletor arco-íris). A cor recolore botões,
  realces e o destaque do karaokê, mantendo o contraste legível nos temas claro e
  escuro.
- **Tema claro/escuro** — botão no canto superior direito.

## Modo teleprompter

O Lettore também serve como teleprompter (texto grande com destaque acompanhando,
para você ler em voz alta no seu ritmo):

- **Modo teleprompter** — caixa no topo do menu. Desliga o áudio e o texto rola
  sozinho com a palavra destacada, movido por temporizador (não depende da voz).
  Ao ativar, aparece o controle **Velocidade do texto** (palavras por minuto).
  Ideal para gravar/apresentar lendo pela tela.
- **Ocultar o menu** — botão no canto superior direito (ícone de painel). O menu
  some e o texto ocupa a tela toda. Uma **barra flutuante** aparece embaixo com
  Reproduzir / Pausar / Parar / Mostrar menu.
- **Barra de espaço** — Reproduzir/Pausar sem tirar as mãos (quando não se está
  digitando no texto).
- O modo silencioso e o menu oculto ficam **salvos**.

## Vozes e idiomas

As vozes disponíveis vêm do **seu sistema/navegador**. Para adicionar idiomas
(ex.: inglês) no Windows:
**Configurações → Hora e idioma → Fala → Adicionar vozes**.

### 🌟 Voz mais natural (grátis)

Abra o Lettore no **Microsoft Edge**. Ele expõe, pela mesma tecnologia e sem
custo, as vozes neurais **“Online (Natural)”** da Microsoft — muito mais
humanas. Em português aparecem, por exemplo, **Francisca**, **Antonio** e
**Thalita** (Online / Natural). O app **marca essas vozes com ✨** e as
seleciona por padrão. Precisam de internet. O Chrome não mostra essas vozes.

> **Se uma voz ✨ não tocar:** o Edge lista o catálogo inteiro da Microsoft,
> mas algumas vozes "Online" não respondem (dependem dos servidores/rede).
> O Lettore espera alguns segundos e, se a voz não iniciar, **avisa e volta ao
> editor** — é só escolher outra voz ✨ ou uma local (**Daniel**/**Maria**, que
> sempre funcionam offline).

> **Filtro "Ocultar vozes multilíngue":** as vozes *Multilingual* / *multilíngue*
> são as mais instáveis. O app traz um interruptor (**ligado por padrão**) que as
> esconde da lista. Desligue-o se quiser ver todas as vozes disponíveis. A
> preferência fica salva.

## Instalar como app (Android / PWA)

O Lettore é um **PWA**: pode ser instalado no celular como app (ícone, tela
cheia, offline). Hospede a pasta `dist/Lettore` num serviço HTTPS grátis e
instale pelo Chrome do Android. Passo a passo em **[COMO-PUBLICAR.md](COMO-PUBLICAR.md)**.

## Estrutura

```
index.html   interface
styles.css   estilos (tema claro/escuro, responsivo)
app.js       lógica (leitura, karaokê, arquivos, preferências)
lib/         bibliotecas offline: pdf.js (PDF) e mammoth.js (Word)
docs/        especificação do design
```

## Observações

- **PDF digitalizado (imagem)** não tem texto extraível — o app avisa quando isso ocorre.
- O motor de voz é a **Web Speech API** nativa. É gratuita e offline; as vozes do
  sistema são boas, mas não tão humanas quanto serviços pagos (ElevenLabs/OpenAI).
  O código já está preparado para, no futuro, plugar um modo premium se quiser.
- Para o carregamento de PDF mais robusto, abrir via um servidor local também
  funciona: `python -m http.server` na pasta e acesse `http://127.0.0.1:8000`.
