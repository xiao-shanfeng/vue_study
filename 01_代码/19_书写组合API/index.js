// shallowReactive和reactive

const reactiveHandler = {
  get(target,prop) {
    if(prop === "_is_reactive") {
      return true;
    }
    const result = Reflect.get(target,prop);
    console.log("拦截到读取操作",prop,result);
    return result;
  },
  set(target,prop,value) {
    const result = Reflect.set(target,prop,value);
    console.log("拦截到设置操作",prop,value);
    return result;
  },
  deleteProperty(target,prop) {
    const result = Reflect.deleteProperty(target,prop);
    console.log("拦截到删除操作",prop);
    return result;
  }
}

const shallowReactive = (target) => {
  // 判断target是否是一个对象object(对象和数组)
  if (target && typeof target === 'object') {
    return new Proxy(target, reactiveHandler);
  }
  return target;
}

const reactive = (target) => {
  if(target && typeof target === "object") {
    // 因为target有可能是数组也可能是对象
    if (Array.isArray(target)) {
      target.forEach((item,index) => {
        target[index] = reactive(item);
      })
    }else{
      for (const key in target) {
        if (Object.hasOwnProperty.call(target, key)) {
          target[key] = reactive(target[key])
        }
      }
    }
    return new Proxy(target, reactiveHandler)
  }
  return target
}


// shallowReadonly和readonly

const readonlyHandler = {
  get(target,prop) {
    if(prop === "_is_readonly") {
      return true
    }
    console.log("拦截的读取操作了", prop)
    return Reflect.get(target, prop)
  },
  set(target,prop, value) {
    console.warn("只能读取数据，不能修改或者添加数据", prop, value)
    return true;
  },
  deleteProperty(target,prop) {
    console.warn("只能读取数据，不能删除数据", prop)
    return true
  }
}

const shallowReadonly = (target) => {
  if (target && typeof target === "object") {
    return new Proxy(target, readonlyHandler);
  }
  return target;
}

const readonly = (target) => {
  // 1.判断target是否有值，并且判断target是否是对象
  if (target && typeof target === "object") {
    // 2.判断target是对象object还是数组类型array
    if(Array.isArray(target)) {
      // 3.遍历array每一项进行递归操作
      target.forEach((item,index) => {
        target[index] = readonly(item)
      })
    }else{
      // 3.遍历object每一项进行递归操作
      Object.keys(target).forEach((key) => {
        target[key] = readonly(target[key])
      });
    }
    // 4.返回一个Proxy对象
    return new Proxy(target, readonlyHandler)
  }
  return target
}


// shallowRef和ref

const shallowRef = (target) => {
  return {
    _value: target,
    get value () {
      console.log("劫持到读取操作")
      return this._value
    },
    set value (val) {
      console.log("劫持到设置操作",val);
      this._value = val;
    }
  }
}

const ref = (target) => {
  target = reactive(target);
  return {
    _is_ref: true,
    _value: target,
    get value() {
      console.log("劫持到读取操作")
      return this._value
    },
    set value(val) {
      console.log("劫持到设置操作")
      this._value = val;
    }
  }
}




// isRef,isReactive,isReadonly,isProxy

const isRef = (obj) => {
  return obj && obj._is_ref
}
const isReactive = (obj) => {
  return obj && obj._is_reactive
}
const isReadonly = (obj) => {
  return obj && obj._is_readonly
}
const isProxy = (obj) => {
  return isReadonly(obj) || isReactive(obj)
}