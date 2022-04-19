import "reflect-metadata";

export interface IAssociationDetails {
  schema: string,
  table: string
  modelClass: any
  by: string
}

export function Table(table: string): ClassDecorator {
  return (constructor: Function): void => {
    constructor.prototype.table = table;
  }
}

export function Schema(schema: string): ClassDecorator {
  return (constructor: Function): void => {
    constructor.prototype.schema = schema;
  }
}

export function Fixed(val: any): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineProperty(target, key, {
      get: function () { return val },
      set: function (value) { if (target[key] !== value) target[key] = value },
      enumerable: true,
      configurable: true
    });
    Reflect.defineMetadata('Fixed', val, target, key);
  };
}

export function Random(dataType: string): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineProperty(target, key, {
      get: function () { return dataType },
      set: function (value) { },
      enumerable: true,
      configurable: true
    });
    Reflect.defineMetadata('Random', true, target, key);
  };
}

export function Function(f: () => any): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineProperty(target, key, {
      get: function () { return f },
      set: function (value) { },
      enumerable: true,
      configurable: true
    });
    Reflect.defineMetadata('Function', f, target, key);
  };
}

export function Enum(en: any): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineProperty(target, key, {
      get: function () { return Object.values(en) },
      set: function (value) { if (target[key] !== value) target[key] = value },
      enumerable: true,
      configurable: true
    });
    Reflect.defineMetadata('Enum', true, target, key);
  };
}

export function List(array: any[]): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineProperty(target, key, {
      get: function () { return array },
      set: function (value) { if (target[key] !== value) target[key] = value },
      enumerable: true,
      configurable: true
    });
    Reflect.defineMetadata('List', true, target, key);
  };
}

export function Association(details: IAssociationDetails): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineProperty(target, key, {
      get: function () { return details },
      set: function (value) { },
      enumerable: true,
      configurable: true
    });
    Reflect.defineMetadata('Association', details, target, key);
  };
}

export function FillInFrequency(freq: number): PropertyDecorator {
  return (target, key): void => {
    Reflect.defineMetadata('FillInFrequency', freq, target, key);
  };
}

export function isDecoratedWith<T>(instance: T, propertyKey: string, decorator: string) {
  return Boolean(Reflect.getMetadata(decorator, instance, propertyKey) != null);
}

export function getDecoratorParameter<T>(instance: T, propertyKey: string, decorator: string) {
  return Reflect.getMetadata(decorator, instance, propertyKey);
}