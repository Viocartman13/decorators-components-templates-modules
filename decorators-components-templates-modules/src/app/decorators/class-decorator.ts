export function classDecorator(target: any) {
  Object.defineProperty(target.prototype, 'customAddedProperty', {value: () => 'property added through decorator'})
}
