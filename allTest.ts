////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Two {
    function render<T>(name: T): T {
        return name
    }

    let a = render("omid") //// type inference 
    let b = render<string>("omid")
    let c: <T>(name: T) => T = render
    c("omid")

}
////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Three {
    ///////////////////Generic Inference
    interface identityChecker {
        <T>(name: T): T
    }

    function func<T>(name: T): T {
        return name
    }

    let a: identityChecker = func
    a("omid")
}
////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Four {
    ///////////////Generic Assertion
    interface identityChecker<T> {
        (name: T): T
    }

    function func<T>(name: T): T {
        return name
    }

    let a: identityChecker<string> = func
    a("asd")
}
////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Five {
    interface INumber<T> {
        value: T
        check: (num: T) => T
    }

    class GenericNumber<T> implements INumber<T> {
        value: T
        check = (number: T): T => number
    }

    let a = new GenericNumber<number>()
    let b = a.check(123);
}
////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Six {
    interface ITypes {
        value: number
    }

    const a = <T extends ITypes>(value: T): T => {
        return value
    }

    function c<T extends ITypes>(params: T): T {
        return params
    }

    a({ value: 1 })
    c({ value: 123 })
}
////////////////////////////////////////////////////////////////////////////////////////////////////
namespace Seven {
    interface Action {
        dispatch(action: string): string
    }

    type Reducer<S = any, A extends Action = any> = (state: S, action: A) => S

    class dispachAction implements Action {
        dispatch(action: string): string {
            return action
        }
    }

    class deliveryState {
        deliveryMethod = {
            selected: 0,
            list: []
        }
    }

    const testReducer: Reducer<deliveryState, dispachAction> = (state = new deliveryState(), action) => {
        return state

    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////