import assert from 'node:assert/strict'
import test from 'node:test'
import shouldRouteClick from '../src/styled/link-click.js'

const primary = {
  button: 0,
  currentTarget: { target: '', hasAttribute: () => false }
}

test('regular links and keyboard link activation use the router', () => {
  assert.ok(shouldRouteClick(primary))
  assert.ok(shouldRouteClick({ ...primary, detail: 0 }))
})

test('browser gestures and explicit targets retain native link behavior', () => {
  for (const key of [
    'metaKey',
    'ctrlKey',
    'shiftKey',
    'altKey',
    'defaultPrevented'
  ]) {
    assert.equal(shouldRouteClick({ ...primary, [key]: true }), false, key)
  }
  for (const button of [1, 2]) {
    assert.equal(shouldRouteClick({ ...primary, button }), false)
  }
  for (const target of ['_blank', '_parent', 'report']) {
    assert.equal(
      shouldRouteClick({
        ...primary,
        currentTarget: { ...primary.currentTarget, target }
      }),
      false
    )
  }
  assert.equal(
    shouldRouteClick({
      ...primary,
      currentTarget: { target: '', hasAttribute: name => name === 'download' }
    }),
    false
  )
})
