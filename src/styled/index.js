import React from 'react'
import PureComponent from 'react-pure-render/component';

const partition = predicate => xs => 
  Object.entries(xs).reduce((acc, [key, value]) => 
    [
      Object.assign(acc[0], predicate(value) ? ({[key]: value}) : ({})), 
      Object.assign(acc[1], !predicate(value) ? ({[key]: value}) : ({}))
    ]
  , [{}, {}])

const toObject = (acc, [key, value]) => ({...acc, [key]: value})

const filter = predicate => xs => 
  Object.entries(xs).filter(([key, value]) => predicate(value)).reduce(toObject, {})

import classNames from 'classnames'

const viewCache = {}

import { browserHistory } from 'react-router';


function defaultView(name) {
  if(viewCache[name])
    return viewCache[name]

  const view = class StyledComponent extends PureComponent  {
    render() {
      const {children, ref, id, tag: Tag = 'div', ...rest} = this.props;
      const [booleans, others] = partition(x => x === true)(rest)
      const otherProps = filter(x => x)(others) //filter falsy values like undefined etc
      let injectedProps = {}
      const href = this.props.href

      if(Tag === 'a' && href) {
        injectedProps = {
          onClick: e => {
              if(href 
              && !href.startsWith('#')
              && !href.startsWith('http')
              && !href.startsWith('tel:')
              && !href.startsWith('mailto:')
              && !href.endsWith('.png')
              && !href.endsWith('.jpg')
              && !href.endsWith('.zip')
              && !href.endsWith('.pdf')
              ) {
                e.preventDefault();
                browserHistory.push(href);
            }
          }
        }
      }

      try {
        return (
            <Tag ref={ref} id={id} className={classNames(name, booleans)} {...injectedProps} {...otherProps} >
                {children}
            </Tag>
        )
      }
      catch (error) {
        // if(!this.error)
        // {
        //   this.error = true;
        //   //this.setState({error: 'error'})
        // }

        return (<Role ref={ref} id={id} className={classNames(name, booleans)} {...otherProps} >
                Error
            </Role>)
      }
    }

    static displayName = `styled.${name}`
  }

  viewCache[name] = view;
  return view;
}

const handler = {
  get (target, key) {
    return target[key] || defaultView(key)
  }
}

const styled = {
}

const styledOrDefault = new Proxy(styled, handler)

export default styledOrDefault

export const View = defaultView('View')