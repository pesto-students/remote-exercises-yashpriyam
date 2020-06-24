# Instructions

Using React hooks, make a hook called `useKeyPress` that works as the following example.

## Input
- The key which the component wants to "subscribe" to.
  - For control keys, you can use angular brackets. For example, `<enter>` for enter key, `<tab>` for tab key etc.

## Output
- A boolean indicating the status of the subscribed key press.

## Example
```js
function App(props) {
  const hKeyPressed = useKeyPress("h");
  return hKeyPressed ? <h1>Pressed</h1> : <h2>Not pressed</h2>
}
```

## Restrictions
- Don't use class-based components.
- Don't use external libraries.