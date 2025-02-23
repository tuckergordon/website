// Based on https://github.com/joshnuss/shiki-transformer-copy-button
import { h } from 'hastscript';

const DEFAULT_OPTIONS = {
  toggleMs: 3000,
  readyText: 'Copy',
  successText: '👍',
  classes: 'copy',
};

export function addCopyButton({ toggleMs, readyText, successText, classes } = DEFAULT_OPTIONS) {
  return {
    name: 'shiki-transformer-copy-button',
    // @ts-expect-error - node is a hast node and confuses TypeScript
    pre(node) {
      const button = h(
        'button',
        {
          class: classes,
          // @ts-expect-error - this.source comes from shiki
          'data-code': this.source,
          onclick: `
            navigator.clipboard.writeText(this.dataset.code);
            this.textContent = '${successText}';
            this.classList.add('copied');
            setTimeout(() => {
              this.textContent = '${readyText}';
              this.classList.remove('copied');
            }, ${toggleMs});
          `,
        },
        readyText,
      );

      node.children.push(button);
    },
  };
}
