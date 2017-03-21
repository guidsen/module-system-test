# Module System Test
This repository is intended to show the different approach when using the module system of NodeJS.
Both directories have the same files, but the method of exporting is different.
I've introduced a circular dependency to show the difference between two approaches.

object-module-exports uses the approach of exporting an object with `module.exports = { method1, method2 }`.
normal-exports uses the approach of using `exports.method1 = method1` for every function that should be exported.

# Usage
```
node
> require('./normal-exports/handler').handle('Foo');
> require('./object-module-exports/handler').handle('Baz');
```

The `object-module-exports` approach is failing because of how the module system works in NodeJS.
`module.exports` exports as reference where as `export default` exports bindings.
