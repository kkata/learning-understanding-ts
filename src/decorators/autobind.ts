namespace App {
  export function AutoBind2(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    return {
      get() {
        return descriptor.value.bind(this);
      },
    };
  }
}
