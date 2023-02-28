import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
    const element = useRef(null)
    const [show, setShow] = useState(false)

  // para que se renderizen a medida q voy scroleando el vh
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver != 'undefined'
        ? window.IntersectionObserver
        :  import('intersection-observer')
    )
    .then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0] //saco si es true o false
        if (isIntersecting) {
          setShow(true)
          observer.disconnect() //desconecto para q no siga act
        }
      })
      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}