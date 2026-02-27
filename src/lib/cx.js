const cx = (...values) =>
  values
    .flatMap((value) => {
      if (!value) {
        return []
      }

      if (typeof value === 'string') {
        return [value]
      }

      if (typeof value === 'object') {
        return Object.entries(value)
          .filter(([, enabled]) => Boolean(enabled))
          .map(([className]) => className)
      }

      return []
    })
    .join(' ')

export default cx