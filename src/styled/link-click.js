// Intercept only ordinary activations meant for the current tab.
export default function shouldRouteClick(event) {
  const link = event.currentTarget
  return (
    !event.defaultPrevented &&
    event.button === 0 &&
    !event.metaKey &&
    !event.ctrlKey &&
    !event.shiftKey &&
    !event.altKey &&
    (!link.target || link.target.toLowerCase() === '_self') &&
    !link.hasAttribute('download')
  )
}
