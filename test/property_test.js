import { strictEqual } from 'assert'
import { property } from '../src'

describe('property', () => {

  it('should generate a named property accessor for the provided string key', () => {

    const o = { a: 1, b: 2 }

    strictEqual(property('a')(o), 1)
    strictEqual(property('b')(o), 2)

  })

  it('should generate a property accessor that will return undefined for undefined properties', () => {

    const o = { a: 1, b: 2 }

    strictEqual(property('c')(o), undefined)

  })

  it('should generate a property accessor that will return undefined if call on an undefined object', () => {

    strictEqual(property('c')(undefined), undefined)

  })

  it('should generate property accessors that support dot notation for subproperties', () => {

    const o = { a: { aa: { aaa: 1 }, ab: 2 } }

    strictEqual(property('a.aa.aaa')(o), 1)
    strictEqual(property('a.ab')(o), 2)

  })

  it('should generate property accessors that return undefined if the accessor path is broken', () => {

    const o = { a: 1 }

    strictEqual(property('b.c.e')(o), undefined)

  })

})
