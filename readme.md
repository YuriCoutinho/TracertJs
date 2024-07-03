# TracertJs

TracertJs é um projeto desenvolvido em Node.js que utiliza o módulo `nodejs-traceroute` para identificar a rota percorrida por um pacote na rede até seu destino final.

## O que é o Traceroute?

O Traceroute é uma ferramenta de diagnóstico de rede que permite rastrear o caminho que um pacote percorre até um destino específico na rede. Ele exibe cada hop (salto) pelo qual o pacote passa, incluindo o tempo que leva para cada salto. Isso é útil para identificar problemas de conectividade, latência e roteamento.

## Descrição do Projeto

TracertJs é uma aplicação simples que demonstra como usar o módulo `nodejs-traceroute` para realizar um traceroute para um destino específico (neste caso, `google.com`). Ele exibe informações sobre o processo, incluindo o ID do processo, o endereço de destino e os detalhes de cada hop.

## Pré-requisitos

- Node.js instalado (versão 14 ou superior)
- npm (Node Package Manager) instalado

## Instruções de Instalação

Siga os passos abaixo para configurar e executar o projeto TracertJs:

1. Clone o repositório para a sua máquina local:
    ```bash
    git clone https://github.com/seuusuario/tracertjs.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd tracertjs
    ```

3. Instale as dependências do projeto:
    ```bash
    npm install
    ```

4. Execute a aplicação:
    ```bash
    npm start
    ```

A aplicação irá iniciar e executar o traceroute para `google.com`, exibindo as informações relevantes no console.

## Autoria

Este projeto foi desenvolvido por Yuri Silva Coutinho.

---

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato.