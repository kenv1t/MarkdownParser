\`\`\`markdown
# Markdown Parser

A simple Markdown parser implemented in JavaScript that converts Markdown text to HTML.

## Installation

You can install the Markdown Parser package via npm:

\`\`\`bash
npm install markdown-parser-js
\`\`\`

## Usage

```javascript
const MarkdownParser = require('markdown-parser-js');

const markdownText = `
# Hello, World!

This is a **Markdown Parser** example.

## Usage

You can use this parser to convert Markdown text to HTML.

**Enjoy parsing!**
`;

const parser = new MarkdownParser();
const htmlText = parser.parse(markdownText);
console.log(htmlText);
```

## Features

- Supports parsing headings (up to h6)
- Supports parsing bold and italic text
- Lightweight and easy to use

## Example

Input Markdown:

```
# Hello, World!

This is a **Markdown Parser** example.

## Usage

You can use this parser to convert Markdown text to HTML.

**Enjoy parsing!**
```

Output HTML:

```html
<h1>Hello, World!</h1>
<p>This is a <strong>Markdown Parser</strong> example.</p>
<h2>Usage</h2>
<p>You can use this parser to convert Markdown text to HTML.</p>
<p><strong>Enjoy parsing!</strong></p>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
\`\`\`
