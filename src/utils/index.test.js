import { partition, filter } from 'utils'

describe('utils/partition', () => {
  it('should partition simple case', () => {
    expect(
      partition(x => x === true)({
        b: 'true',
        c: '123',
        a: true,
        d: {
          e: 'z'
        },
        f: false,
        g: 12
      })
    ).toEqual([
      {
        a: true
      },
      {
        b: 'true',
        c: '123',
        d: {
          e: 'z'
        },
        f: false,
        g: 12
      }
    ])
  })

  it('should handle empty objects', () => {
    expect(partition(x => x === true)({})).toEqual([{}, {}])
  })
})

describe('utils/filter', () => {
  it('should filter simple object', () => {
    expect(
      filter(x => x === true)({
        b: 'true',
        c: '123',
        d: {
          e: 'z',
          z: true
        },
        a: true,
        f: false,
        g: 12,
        x: true
      })
    ).toEqual({ a: true, x: true })
  })

  it('should handle empty objects', () => {
    expect(filter(x => x === true)({})).toEqual({})
  })
})
