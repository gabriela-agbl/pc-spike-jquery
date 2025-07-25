
# Estudo de Caso – JQUERY

> **Aluno(a):** Gabriela Rodrigues de Souza
> **Turma:** Desenvolvedor Frontend
> **Data:** 18/06/2025

---

## 1. Introdução

 jQuery é uma biblioteca leve do JavaScript criada para simplificar as linhas de código. Seu lema "escreva menos, faça mais" resume bem sua proposta.

Ao encapsular funcionalidades complexas do JavaScript puro em métodos simples e compatíveis com todos os principais navegadores, o jQuery permite que desenvolvedores construam páginas mais dinâmicas e interativas com agilidade.

Entre os recursos mais utilizados do jQuery estão:
- Manipulação de HTML/DOM
- Manipulação de CSS
- Métodos de Eventos no HTML
- Efeitos e animações
- Requisições AJAX
- Utilitários diversos

Apesar do surgimento de frameworks modernos como React e Vue.js, o jQuery ainda é amplamente utilizado em projetos simples, sistemas legados e por empresas como Google, Netflix, IBM e Microsoft.

Segundo a W3Techs, empresa que realiza estatísticas do uso de tecnologias no mercado de TI, o jQuery é usado por 72,5% de todos os sites na web que usam alguma biblioteca js.

---

## 2. Aplicações e Benefícios

- O Jquery é utilizado em páginas que exigem simplicidade e interatividade

- Ele resolve problemas como sintaxe extensa e complexa do JavaScript puro, dificuldade na manipulação direta do DOM e inconsistência de comportamento entre navegadores diferentes.

- Essa biblioteca possui diversas vantajens, dentre elas temos sintaxe simples, objetiva e fácil de aprender, grande compatibilidade com navegadores antigos e modernos, ampla variedade de plugins disponíveis e utilização consolidada em grandes empresas e sistemas legados.

---

## 3. Diferenças e Comparações

Como já dito antes, o Jquery simplifica e facilita as linhas de código em comparação ao JavaScript puro.

Além disso, também é possível compará-lo a frameworks modernos como React e Vue:

- O Jquery é mais leve, direto e fácil de aprender.

- No entanto, não é ideal para aplicações grandes, complexas ou que exigem controle de dados, onde o React e Vue dominam.

---

## 4. Exemplo Prático

**HTML:**
```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="./script.js" defer></script>
    </head>
    <body>
        <div class='slide_box'>
            Clique aqui!
        </div>
        <div class='box'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, odit?
        </div>
    </body>
    </html>
```

**JavaScript-Jquery:**
```javascript
    $(document).ready(function(){
        $('.slide_box').click(function(){
            $('.box').slideToggle()
        })
    })
```

**Explicação:**
- `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`: Importa a biblioteca jQuery diretamente de uma CDN do Google.

- `$(document).ready(...)`: Garante que o código só será executado após o carregamento completo da página.

- `$('.slide_box').click(...)`: Ação de clique no elemento com a classe `slide_box`.

- `$('.box').slideToggle()`: Exibe ou esconde o elemento com classe `box` com efeito de deslizamento.

---

## 5. Conclusão

Aprender Jquery ajuda a entender melhor o JavaScript e o funcionamento do DOM. É uma ótima ferramenta para projetos pequenos e que necessitam de interação ou animações simples. 

Atualmente são usados muitos frameworks modernos que muitos dizem ter substituido o uso do Jquery, porém, ele ainda é muito utilizado no mercado e continua sendo relevante em muitos contextos. 

Recomendo o estudo do jQuery para quem deseja criar páginas simples com interatividade, busca por facilidade no desenvolvimento front-end e quer aprofundar seus conhecimentos em JavaScript de forma prática.

---

## 6. Fontes utilizadas

- [W3Schools Jquery Tutorial](https://www.w3schools.com/jquery/default.asp)
- [DIO Reflexão sobre Jquery](https://www.dio.me/articles/jquery-um-classico-presente-em-mais-de-70-dos-sites-da-web-vs-frameworks-modernos-b5d5dcee1969)
- [Como usar o Jquery(Vídeo)](https://www.youtube.com/watch?v=HYFkpdt7wT8)
- [Discussão no Reddit](https://www.reddit.com/r/webdev/comments/mwt767/when_is_it_advantageous_to_use_jquery_instead_of/)

---

## 7. Slides da Apresentação

📎 Link para os slides:
[figma.com/gabriela/jquery](https://www.figma.com/deck/h6ikk2N5a3CkIjdKwEbRmG/JQUERY?node-id=2-37)

---

## Checklist de Entrega

- [x] Markdown com conteúdo autoral
- [x] Código funcional incluído
- [x] Fontes listadas
- [x] Slides prontos
- [x] Arquivo no GitHub

