# AWS Hands On - Rest API com AWS Lambda

## Sobre o AWS Lambda

O AWS Lambda é um serviço de computação sem servidor e orientado a eventos que permite executar código para praticamente qualquer tipo de aplicação ou serviço de backend sem provisionar ou gerenciar servidores.

  - **Serverless** - As funções do AWS Lambda ainda são executadas em servidores, mas todo o gerenciamento do servidor é feito pela AWS.
  - **Orientado a eventos** - É possível acionar o Lambda a partir de mais de 200 serviços da AWS.

### Pontos importantes
  - O AWS Lambda oferece suporte nativamente aos códigos Java, Go, PowerShell, Node.js, C#, Python e Ruby, bem como fornece uma API de tempo de execução que permite usar qualquer linguagem de programação adicional para criar suas funções.
  - O código deve ser escrito em estilo "stateless", ou seja, deve assumir que não há afinidade com a infraestrutura de computação adjacente. O acesso ao sistema de arquivo local, processos filhos e itens semelhantes não podem se estender além da duração da solicitação.
  - Para melhorar o desempenho, o AWS Lambda pode escolher reter uma instância de sua função e reutilizá-la para atender a uma solicitação posterior em vez de criar uma nova cópia.
  - As funções do AWS Lambda podem ser configuradas para execução por até 15 minutos de cada vez.
  - O preço do AWS Lambda é baseado em pagamento por uso.
