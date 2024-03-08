// markdown-parser.js

class MarkdownParser {
    constructor() {
      this.result = '';
    }
  
    parse(text) {
      this.result = '';
  
      // Split text into lines
      const lines = text.split('\n');
  
      // Parse each line
      for (let line of lines) {
        // Handle headings
        if (line.startsWith('#')) {
          const level = line.indexOf(' ');
          this.result += `<h${level}>${line.slice(level + 1)}</h${level}>\n`;
        }
        // Handle bold and italic text
        else {
          line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
          line = line.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
          this.result += `<p>${line}</p>\n`;
        }
      }
  
      return this.result;
    }
  }
  
  module.exports = MarkdownParser;
  