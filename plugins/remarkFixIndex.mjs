export function remarkFixIndex() {
  return function (tree, { data, ...rest }) {
    const recursiveReplaceIndex = (node) => {
      node.forEach(child => {
        if (child.type === 'link') {
          child.url = child.url.replace('index', '/').replace('.md', '').replace('//', '/');
        }
        if (child.children) {
          recursiveReplaceIndex(child.children);
        }
      });
    }
    recursiveReplaceIndex(tree.children);
  };
}
