import { visit } from 'unist-util-visit';

const calloutRegex = /^\[!(\w+)\]\s*(.*)?/;

const ICONS = {
  note: '&#9432;',
  info: '&#9432;',
  tip: '&#128161;',
  idea: '&#128161;',
  important: '&#10071;',
  warning: '&#9888;&#65039;',
  caution: '&#9888;&#65039;',
};

export default function remarkCallouts() {
  return (tree) => {
    visit(tree, 'blockquote', (node, index, parent) => {
      const first = node.children[0];
      if (!first || first.type !== 'paragraph') return;

      const textNode = first.children[0];
      if (!textNode || textNode.type !== 'text') return;

      const match = textNode.value.match(calloutRegex);
      if (!match) return;

      const type = match[1].toLowerCase();
      const title = match[2] || type.toUpperCase();
      const icon = ICONS[type] || ICONS.note;

      const rest = textNode.value.replace(calloutRegex, '').replace(/^\n+/, '');
      if (rest) {
        textNode.value = rest;
      } else if (first.children.length > 1) {
        const remaining = first.children.slice(1);
        if (remaining[0]?.type === 'break') remaining.shift();
        first.children = remaining;
      } else {
        node.children.shift();
      }

      const titleNode = {
        type: 'paragraph',
        data: { hName: 'p', hProperties: { className: 'callout-title' } },
        children: [{ type: 'html', value: `<span class="callout-icon">${icon}</span>` }, { type: 'text', value: title }],
      };

      node.children.unshift(titleNode);
      node.data = node.data || {};
      node.data.hName = 'div';
      node.data.hProperties = { className: `callout callout-${type}` };
    });
  };
}
